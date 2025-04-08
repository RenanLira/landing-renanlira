import EditIdTechPage from "@/components/pages/admin/tech/edit/[id]/edit-id-page";


async function getTech(id: string) {
    const response = await fetch('http://localhost:3000/api/technologies/' + id)

    const data = await response.json()

    return data
}

interface EditTechPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function EditTechPage({ params }: EditTechPageProps) {

    const { id } = await params

    const data = await getTech(id)

    return (
        <EditIdTechPage tech={data} />
    );
}
