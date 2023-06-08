import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const NavigationSpace = ({ children = undefined }: Props) => {
  return <div className="mt-[26px]">{children}</div>;
};
