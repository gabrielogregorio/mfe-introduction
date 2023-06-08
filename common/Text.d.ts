import { ReactNode } from "react";
type Props = {
    children: ReactNode;
    fontSize?: string;
    isActive?: boolean;
};
export declare const Text: ({ children, fontSize, isActive, }: Props) => JSX.Element;
export {};
