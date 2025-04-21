"use server";

import { revalidatePath } from "next/cache";
import { UpdateTechnologieRequestDTO } from "./contracts/update-technologie-dto";


export async function UpdateTechnologieService(data: UpdateTechnologieRequestDTO) {
    const response = await fetch(`${process.env.API_URL}/api/technologies/` + data._id, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, id: undefined }),
    });

    if (!response.ok) {
        throw new Error("Falha ao atualizar tecnologia");
    }

    revalidatePath("/admin/tech", "page");

    return response.json()
}