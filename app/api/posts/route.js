import { NextResponse } from "next/server";
import Post from "@/models/post";
import { connectToDB } from "@/utils/db";

export async function GET(req) {
  try {
    // Connect to the database
    const dbConnection = await connectToDB();

    // Find all posts
    const posts = await Post.find();

    if (!posts || posts.length === 0) {
      return NextResponse.error(new Error("No posts found"), 404); // Return a 404 error
    }

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error); // Log the error
    return NextResponse.error(new Error("Error fetching posts"), 500); // Return a 500 error
  }
}
