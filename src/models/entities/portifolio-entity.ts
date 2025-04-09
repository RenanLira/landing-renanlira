import { Model, Schema, model, models } from 'mongoose';
import { TechnologyEntity } from './technology-entity';
import { Portifolio } from '../portifolio';


export type IPortifolio = Portifolio & Document;

const PortifolioSchema = new Schema<IPortifolio>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    technologies: { type: [TechnologyEntity], required: true },
    url: { type: String, required: true },
    repository: { type: String, required: true },
    image: { type: String, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
})


export const PortifolioEntity = (models?.PortifolioEntity as Model<IPortifolio>) || model<IPortifolio>('Technology', PortifolioSchema);