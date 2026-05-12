import { MongoClient, Document } from "mongodb";

const uri = process.env.MONGODB_URI || "";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient | null> | null = null;

// Timeout for MongoDB connection (3 seconds)
const CONNECTION_TIMEOUT = 3000;

export async function connectToDatabase() {
  if (!uri) {
    console.warn("MONGODB_URI not configured - using in-memory fallback");
    return null;
  }

  if (!client) {
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: CONNECTION_TIMEOUT,
      connectTimeoutMS: CONNECTION_TIMEOUT,
    });
    clientPromise = client.connect().then(() => client).catch(err => {
      console.error("MongoDB connection error:", err.message);
      client = null;
      clientPromise = null;
      return null;
    });
  }

  // Return promise that resolves quickly or null
  return Promise.race([
    clientPromise,
    new Promise<null>(resolve => setTimeout(() => resolve(null), CONNECTION_TIMEOUT))
  ]);
}

export async function getDb() {
  try {
    const client = await connectToDatabase();
    if (!client) return null;
    return client.db("hamernassa");
  } catch (error) {
    console.error("Database connection failed:", error);
    return null;
  }
}

export async function getCollection<T extends Document = Document>(name: string) {
  try {
    const db = await getDb();
    if (!db) return null;
    return db.collection<T>(name);
  } catch (error) {
    console.error("Collection error:", error);
    return null;
  }
}