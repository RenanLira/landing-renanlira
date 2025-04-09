import { connectDB } from "@/lib/database";
import { TechnologyEntity } from "@/models/entities/technology-entity";



export async function GET(request: Request, { params }: {
    params: Promise<{ id: string }>
}) {
    await connectDB()

    const { id } = await params;

    const technologies = await TechnologyEntity.findById(id);

    if (!technologies) {
        return Response.json({ error: 'Tecnologia não encontrada' }, { status: 404 });
    }

    return Response.json(technologies);

}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {

    await connectDB()

    const { id } = await params;

    const body = await request.json();

    const { name, icon, knowledge, type } = body;

    const technology = await TechnologyEntity.findByIdAndUpdate(id, {
        name,
        icon,
        knowledge,
        type
    });

    if (!technology) {
        return Response.json({ error: 'Tecnologia não encontrada' }, { status: 404 });
    }

    return Response.json(technology);
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {

    await connectDB()

    const { id } = await params;

    const technology = await TechnologyEntity.findByIdAndDelete(id);

    if (!technology) {
        return Response.json({ error: 'Tecnologia não encontrada' }, { status: 404 });
    }

    return Response.json(technology);

}