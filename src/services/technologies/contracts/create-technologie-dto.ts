import { Technology } from "@/models/technology";

export type CreateTechnologieBodyDto = Omit<Technology, "_id" | "createdAt" | "updatedAt">;