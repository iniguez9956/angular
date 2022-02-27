export interface Task{ //Allows for functions from here to be called elsewhere
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}