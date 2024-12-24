// app/api/upload-image/route.ts
import { NextResponse } from "next/server";
import { Client, Storage } from "appwrite";
import uuid4 from "uuid4";

// Initialize Appwrite Client
const appwriteClient = new Client();
appwriteClient
  .setEndpoint(process.env.APPWRITE_ENDPOINT as string) // Your Appwrite endpoint
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_API_KEY as string); // Your Appwrite project ID

// Route Handler
export async function POST(request: Request) {
  try {
    const { imageUrl, userId } = await request.json();

    if (!imageUrl || !userId) {
      return NextResponse.json(
        { error: "Image URL and UserId are required" },
        { status: 400 }
      );
    }

    // 1. Download the image data from the provided URL
    const imageResponse = await fetch(imageUrl);
    if (!imageResponse.ok) {
      throw new Error("Failed to fetch image from URL");
    }
    const imageBlob = await imageResponse.blob();
    const imageBuffer = Buffer.from(await imageBlob.arrayBuffer());

    // 2. Upload to Appwrite Storage
    const storage = new Storage(appwriteClient);
    const fileId = uuid4(); // Generate a unique ID for the file

    const uploadedFile = await storage.createFile(
      "your-bucket-id", // Replace with your Appwrite bucket ID
      fileId,
      new File([imageBuffer], `${fileId}.png`, { type: "image/png" })
    );

    // 3. Get the File URL from Appwrite
    const fileUrl = `${process.env.APPWRITE_ENDPOINT}/storage/buckets/${process.env.NEXT_PUBLIC_BUCKET_ID}/files/${uploadedFile.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_API_KEY}`;

    // 4. Save File URL to Database
    await saveToDatabase({ userId, fileUrl });

    return NextResponse.json({ success: true, fileUrl });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image to storage" },
      { status: 500 }
    );
  }
}

// Example Database Save Function (Replace with your database logic)
async function saveToDatabase({
  userId,
  fileUrl,
}: {
  userId: string;
  fileUrl: string;
}) {
  // Add your database logic here (e.g., MongoDB, PostgreSQL)
  console.log(`Saving to database: UserId=${userId}, FileUrl=${fileUrl}`);
}
