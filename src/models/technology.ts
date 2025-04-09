
export enum TechnologyType {
    FRONTEND = 'frontend',
    BACKEND = 'backend',
    DATABASE = 'database',
    TOOLS = 'tools',
}


export class Technology {

    _id!: string;
    name!: string;
    type!: TechnologyType;
    createdAt!: Date;
    updatedAt!: Date;
    knowledge!: number;
    icon!: string;

}