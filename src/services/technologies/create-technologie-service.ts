"use server";

import { revalidatePath } from "next/cache";
import { CreateTechnologieBodyDto } from "./contracts/create-technologie-dto";

export async function CreateTechnologieService(body: CreateTechnologieBodyDto) {
    const response = await fetch(`${process.env.API_URL}/api/technologies`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error("Falha ao criar tecnologia");
    }

    const data = await response.json()

    revalidatePath("/admin/tech", "page");

    return data
}