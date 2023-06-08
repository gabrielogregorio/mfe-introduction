import { ReactNode } from "react";
export type dataGamesType = {
    video: string[];
    imagens: ReactNode[];
    name: string;
    available: number;
    content: ReactNode;
    id: string;
};
export declare const dataGames: dataGamesType[];
