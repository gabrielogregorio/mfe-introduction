import { ReactNode } from "react";
export type mediaType = {
    youtube?: string;
    imagem?: string;
};
export type dataGamesType = {
    name: string;
    classificação: "obra de prima" | "excelente" | "muito bom" | "ok" | "jogando...";
    id: string;
    conteudo: {
        title: string;
        media: mediaType;
        description: ReactNode;
    }[];
};
export declare const dataGames: dataGamesType[];
