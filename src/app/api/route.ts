import { connectDB } from "@/lib/database";

export async function GET() {
    await connectDB()

    

    return Response.json({ message: "Hello, World!" });
}