import { Model, Schema, model, models } from "mongoose"
import { TechnologyEntity } from "./technology-entity"
import { Experience } from "../experience"

export type IExperience = Experience & Document

const ExperienceSchema = new Schema<IExperience>({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    actual: { type: Boolean, required: true },
    description: { type: String, required: true },
    technologies: { type: [TechnologyEntity], required: true },
})

export const ExperienceEntity = (models?.Experience as Model<IExperience>) || model<IExperience>('Experience', ExperienceSchema);