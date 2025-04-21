"use server"

import { revalidatePath } from "next/cache";

export async function DeleteTechnologieService(id: string) {
    const response = await fetch(`${process.env.API_URL}/api/technologies/` + id, {
        method: "DELETE",
    });

    if (!response.ok) {
        throw new Error("Falha ao deletar tecnologia");
    }

    const data = await response.json()

    revalidatePath('/admin/tech', 'page')

    return data
}