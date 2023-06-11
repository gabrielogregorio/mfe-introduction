import { ReactElement } from "react";
type Props = {
    src: string;
    index: number;
    onClick: (index: number) => void;
};
export declare const GalleryImage: ({ src, onClick, index }: Props) => ReactElement;
export {};
