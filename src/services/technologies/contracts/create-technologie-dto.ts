import { Technology } from "@/models/technology";

export type CreateTechnologieBodyDto = Omit<typeof Technology.schema.obj, "id">