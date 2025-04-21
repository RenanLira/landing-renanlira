import { ExperienceEntity } from "@/models/entities/experience-entity";


export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const experience = await ExperienceEntity.findById(id);

        if (!experience) {
            return Response.json({ error: 'Experiência não encontrada' }, { status: 404 });
        }

        return Response.json(experience);
    } catch {
        return Response.json({ error: 'Erro ao buscar experiência' }, { status: 500 });
    }
}


export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const data = await request.json();

        const experience = await ExperienceEntity.findByIdAndUpdate(id, data, { new: true });

        if (!experience) {
            return Response.json({ error: 'Experiência não encontrada' }, { status: 404 });
        }

        return Response.json(experience);
    } catch {
        return Response.json({ error: 'Erro ao atualizar experiência' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;

        const experience = await ExperienceEntity.findByIdAndDelete(id);

        if (!experience) {
            return Response.json({ error: 'Experiência não encontrada' }, { status: 404 });
        }

        return Response.json(experience);
    } catch {
        return Response.json({ error: 'Erro ao deletar experiência' }, { status: 500 });
    }
}