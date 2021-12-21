export interface ICharacter {
    name: string;
    image: string;
}


export interface ICharacterDetail {
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
    created: string;
    origin: IOrigin;
}

export interface IOrigin {
    name: ""
}