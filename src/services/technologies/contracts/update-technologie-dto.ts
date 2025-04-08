"use server";

import { Technology } from "@/models/technology";


export type UpdateTechnologieRequestDTO = Partial<typeof Technology.schema.obj>