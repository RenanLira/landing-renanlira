export async function GetTechnologieByTypesService() {
    const response = await fetch(`${process.env.API_URL}/api/technologies/by-types`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Falha ao buscar tecnologias por tipo");
    }

    const data = await response.json()

    return data
}