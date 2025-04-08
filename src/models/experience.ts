import { Schema, model } from "mongoose"
import { Technology } from "./technology"


const ExperienceSchema = new Schema({
    title: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    actual: { type: Boolean, required: true },
    description: { type: String, required: true },
    technologies: { type: [Technology], required: true },
})

export const Experience = model("Experience", ExperienceSchema)