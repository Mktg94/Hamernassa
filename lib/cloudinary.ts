import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function uploadImage(file: string): Promise<string | null> {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    console.warn("Cloudinary not configured - returning placeholder image");
    return null;
  }

  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      folder: "hamernassa/products",
      transformation: [
        { width: 800, height: 600, crop: "fill" },
        { quality: "auto" },
        { fetch_format: "auto" },
      ],
    });
    console.log("Cloudinary upload success:", result.secure_url);
    return result.secure_url;
  } catch (error: any) {
    console.error("Cloudinary upload error:", error.message || error);
    return null;
  }
}

export async function deleteImage(publicId: string): Promise<boolean> {
  if (!process.env.CLOUDINARY_CLOUD_NAME) return false;

  try {
    await cloudinary.v2.uploader.destroy(publicId);
    return true;
  } catch (error: any) {
    console.error("Cloudinary delete error:", error.message || error);
    return false;
  }
}

export function isCloudinaryConfigured(): boolean {
  return !!(process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_API_KEY && process.env.CLOUDINARY_API_SECRET);
}