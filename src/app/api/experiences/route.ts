import { ExperienceEntity } from "@/models/entities/experience-entity";
import { Experience } from "@/models/experience";


type ReqExperienceDTO = Omit<Experience, "createdAt" | "updatedAt">;


export async function GET() {

    try {
        const experiences = await ExperienceEntity.find();
        return Response.json(experiences);
    } catch {
        return Response.json({ error: 'Erro ao buscar experiências' }, { status: 500 });
    }

}

export async function POST(request: Request) {
    try {
        const data: ReqExperienceDTO = await request.json();
        const experience = new ExperienceEntity({
            ...data,
            createdAt: new Date(),
            updatedAt: new Date(),
        })

        await experience.save();

        return Response.json(experience, { status: 201 });
    } catch {

        return Response.json({ error: 'Erro ao criar experiência' }, { status: 500 });
    }

}