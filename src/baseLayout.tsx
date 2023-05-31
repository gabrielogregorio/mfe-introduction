import { ReactNode } from "react";

export const BaseLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-[#FBFBFB] scroll-smooth overflow-hidden overflow-y-scroll scrollbar animate-fadeIn">
      {children}
    </div>
  );
};
