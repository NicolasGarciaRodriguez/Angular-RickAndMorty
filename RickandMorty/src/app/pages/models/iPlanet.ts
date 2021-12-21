export interface IPlanet {
    id: number,
    name: string,
    type: string,
    dimension: string,
    created: string,
}

export class Planet implements IPlanet {
    id: number;
    name: string;
    type: string;
    dimension: string;
    created: string;

    constructor(id: number, name: string, type: string, dimension: string, created: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.dimension = dimension;
        this.created = created;
    }
}