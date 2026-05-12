import { NextRequest, NextResponse } from "next/server";
import { getDb, getCollection } from "@/lib/db";
import type { Product } from "@/types";

interface ProductDocument extends Product {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

// GET - Fetch all products
export async function GET() {
  try {
    console.log("Fetching products from database...");
    const collection = await getCollection<any>("products");

    if (!collection) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }

    const products = await collection.find({}).toArray();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// POST - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, category, subcategory, description, image, type, featured, new: isNew } = body;

    if (!name || !category || !description || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store image directly (base64 for now, can add Cloudinary later)
    // For large images, you might want to resize or compress them first
    const imageUrl = image || "";

    const collection = await getCollection<any>("products");

    if (!collection) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }

    const product: ProductDocument = {
      id: `prod-${Date.now()}`,
      name,
      category,
      subcategory: subcategory || "",
      description,
      image: imageUrl,
      type,
      featured: featured || false,
      new: isNew || false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await collection.insertOne(product);

    return NextResponse.json(product, { status: 201 });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

// PUT - Update a product
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, name, category, subcategory, description, image, type, featured, new: isNew } = body;

    if (!id || !name || !category || !description || !type) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Store image directly
    const imageUrl = image || "";

    const collection = await getCollection<any>("products");

    if (!collection) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }

    const result = await collection.findOneAndUpdate(
      { id },
      {
        $set: {
          name,
          category,
          subcategory: subcategory || "",
          description,
          image: imageUrl,
          type,
          featured: featured || false,
          new: isNew || false,
          updatedAt: new Date().toISOString(),
        },
      },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}

// DELETE - Delete a product
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Product ID required" },
        { status: 400 }
      );
    }

    const collection = await getCollection<any>("products");

    if (!collection) {
      return NextResponse.json(
        { error: "Database not configured" },
        { status: 503 }
      );
    }

    const result = await collection.deleteOne({ id });

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}