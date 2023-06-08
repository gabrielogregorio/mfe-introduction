import { ReactNode } from "react";
type Props = {
    href: string;
    icon?: ReactNode;
    children: ReactNode;
};
export declare const LinkNavigation: ({ href, children, icon }: Props) => JSX.Element;
export {};
