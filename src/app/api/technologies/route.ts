import { connectDB } from "@/lib/database";
import { NextRequest } from "next/server";
import { Technology } from "@/models/technology";
import { TechnologyEntity } from "@/models/entities/technology-entity";


type ReqTechnologyDTO = Omit<Technology, "createdAt" | "updatedAt">;


export async function GET() {
    try {
        await connectDB();
        const technologies = await TechnologyEntity.find();
        return Response.json(technologies);
    } catch {
        return Response.json({ error: 'Erro ao buscar tecnologias' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const data: ReqTechnologyDTO = await request.json();

        const technology = new TechnologyEntity({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        await technology.save();
        return Response.json(technology, { status: 201 });
    } catch {
        return Response.json({ error: 'Erro ao criar tecnologia' }, { status: 500 });
    }
}