"use server";

export async function GetAllTechnologiesService() {
    const response = await fetch('http://localhost:3000/api/technologies', {
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