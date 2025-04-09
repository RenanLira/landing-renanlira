import { Technology } from "./technology";

export class Experience {
    title!: string;
    company!: string;
    location!: string;
    startDate!: Date;
    endDate?: Date;
    actual!: boolean;
    description!: string;
    technologies!: Technology[];
}