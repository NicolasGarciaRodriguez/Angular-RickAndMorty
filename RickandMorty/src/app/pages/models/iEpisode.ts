
export interface IEpisode {
    id: number,
    name: string,
    air_date: string,
    episode: string
    created: string
}

export class Episode implements IEpisode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;

    constructor(id: number, name: string, air_date: string, episode: string, created: string) {
        this.id = id;
        this.name = name;
        this.air_date = air_date;
        this. episode = episode;
        this.created = created;
    }
}