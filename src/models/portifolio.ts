import { Schema, model } from 'mongoose';
import { Technology } from './technology';

const PortifolioSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [Technology], required: true },
    url: { type: String, required: true },
    repository: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
})


export const Portifolio = model("Portifolio", PortifolioSchema)