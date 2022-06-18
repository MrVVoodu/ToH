import { Hero } from "../hero";

export interface AppState {
    heroes: Hero[];
    messages: string[];
    isLogged: boolean;
}