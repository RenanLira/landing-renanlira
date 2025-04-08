import { connectDB } from "@/lib/database";
import { Technology } from "@/models/technology";


export async function GET() {
    await connectDB()

    const technologies = await Technology.find();

    const technologiesByType = technologies.reduce((acc, tech) => {
        if (!acc[tech.type]) {
            acc[tech.type] = [];
        }
        acc[tech.type].push(tech);
        return acc;
    }, {} as Record<string, typeof technologies>);

    return Response.json(technologiesByType);

}