import { ReactNode } from "react";
import { mediaType } from "../games/data";
type expandedModoType = {
    title: string;
    media: mediaType;
    description: ReactNode;
    onClose: () => void;
    handleNext: () => void;
    handlePrev: () => void;
};
export declare const ExpandedMode: ({ media, title, description, onClose, handleNext, handlePrev, }: expandedModoType) => JSX.Element;
export {};
