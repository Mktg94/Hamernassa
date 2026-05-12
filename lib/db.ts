import { MongoClient, Document } from "mongodb";

const uri = process.env.MONGODB_URI || "";

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

export async function connectToDatabase() {
  if (!uri) {
    console.warn("MONGODB_URI not configured - using in-memory fallback");
    return null;
  }

  if (!client) {
    client = new MongoClient(uri);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export async function getDb() {
  const client = await connectToDatabase();
  if (!client) return null;
  return client.db("hamernassa");
}

export async function getCollection<T extends Document = Document>(name: string) {
  const db = await getDb();
  if (!db) return null;
  return db.collection<T>(name);
}