import { ReactNode } from "react";
export type dataGamesType = {
    name: string;
    classificação: "obra de prima" | "excelente" | "muito bom" | "ok" | "jogando...";
    id: string;
    conteudo: {
        title: string;
        media: {
            youtube?: string;
            imagem?: string;
        };
        description: ReactNode;
    }[];
};
export declare const dataGames: dataGamesType[];
