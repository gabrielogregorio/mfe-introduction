import { ReactNode } from "react";
type levelsType = 1 | 2 | 3 | 4 | 5;
type Props = {
    level: levelsType;
    children: ReactNode;
};
export declare const NavigationLevel: ({ children, level }: Props) => JSX.Element;
export {};
