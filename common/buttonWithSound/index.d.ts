import { ReactNode } from "react";
type Props = {
    content: ReactNode;
    isActive?: boolean;
    onClick?: () => void;
};
export declare const ButtonWithSound: ({ content, isActive, onClick, }: Props) => JSX.Element;
export {};
