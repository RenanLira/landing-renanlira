import { Document, Model, Schema, model, models } from 'mongoose';
import { Technology, TechnologyType } from '../technology';


export type ITechnology = Technology & Document;



const TechnologySchema = new Schema<ITechnology>({
    name: { type: String, required: true },
    type: { type: String, enum: Object.values(TechnologyType), required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    icon: { type: String, required: true, },
    knowledge: { type: Number, required: true, default: 100 },
})



export const TechnologyEntity = (models?.Technology as Model<ITechnology>) || model<ITechnology>('Technology', TechnologySchema);