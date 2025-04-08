export async function GetTechnologieByTypesService() {
    const response = await fetch('http://localhost:3000/api/technologies/by-types', {
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