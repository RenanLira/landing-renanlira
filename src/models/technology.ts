import { Document, Model, Schema, model, models } from 'mongoose';

export enum TechnologyType {
    FRONTEND = 'frontend',
    BACKEND = 'backend',
    DATABASE = 'database',
    TOOLS = 'tools',
}

export interface ITechnology extends Document {
    name: string;
    type: TechnologyType;
    createdAt: Date;
    updatedAt: Date;
    knowledge: number;
    icon: string;
}



const TechnologySchema = new Schema<ITechnology>({
    name: { type: String, required: true },
    type: { type: String, enum: Object.values(TechnologyType), required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
    icon: { type: String, required: true, },
    knowledge: { type: Number, required: true, default: 100 },
})



export const Technology = (models?.Technology as Model<ITechnology>) || model<ITechnology>('Technology', TechnologySchema);