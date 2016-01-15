import {AnimalGroup} from "./enums";

export interface Animal{
    group: AnimalGroup,
    weight: number,
    height: number,
    age?: number
}