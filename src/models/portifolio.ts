import { Technology } from "./technology";


export class Portifolio {
    _id!: string;
    title!: string;
    description!: string;
    technologies!: Technology[];
    url!: string;
    repository!: string;
    image!: string;
    createdAt!: Date;
    updatedAt!: Date;
}