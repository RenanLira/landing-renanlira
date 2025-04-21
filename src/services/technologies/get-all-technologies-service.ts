"use server";

export async function GetAllTechnologiesService() {
    const response = await fetch(`${process.env.API_URL}/api/technologies`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Falha ao buscar tecnologias");
    }

    return response.json()
}