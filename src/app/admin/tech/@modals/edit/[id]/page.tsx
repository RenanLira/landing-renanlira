import EditIdTechPage from "@/components/pages/admin/tech/edit/[id]/edit-id-page";
import { GetTechnologieService } from "@/services/technologies/get-technologie-service";



interface EditTechPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditTechPage({ params }: EditTechPageProps) {

    const { id } = await params

    const data = await GetTechnologieService(id)

    return (
        <EditIdTechPage tech={data} />
    );
}
