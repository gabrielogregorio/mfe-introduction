import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { BaseLayout } from "./baseLayout";

type Props = {
  mainTitle: string;
  items: {
    title: string;
    linkToPage?: string;
    svg: ReactNode;
  }[];
};

const SectionItem = ({ mainTitle, items }: Props) => {
  return (
    <section className="mt-[48px]">
      <h3>{mainTitle}</h3>

      <div className="flex items-center justify-start gap-[80px] mt-[13px]">
        {items.map((item) => {
          return (
            <Link
              to={item.linkToPage?.toString() || "/"}
              className="hover:scale-105 transition-all duration-500 hover:duration-150"
              key={item.title}
            >
              <div className="bg-[#ffffff] w-[153px] h-[129px] rounded-[30px] flex items-center justify-center">
                {item.svg}
              </div>

              <div className="text-center text-[#333333] text-[16px]">
                {item.title}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

type SocialLinksProps = {
  children: ReactNode;
  href: string;
};
const SocialLinks = ({ children, href = "" }: SocialLinksProps) => {
  return (
    <a
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
      className="min-w-[80px] min-h-[80px] flex items-center justify-center rounded-full bg-white hover:scale-105 transition-all duration-150 hover:duration-700"
    >
      {children}
    </a>
  );
};

type BaseTitleProps = {
  title: string;
};
const BaseTitle = ({ title }: BaseTitleProps) => {
  return (
    <h1 className="text-[#333333] font-[600] text-[48px] text-center cursor-pointer">
      {title.split("").map((letter, index) => {
        return (
          <span
            key={index}
            className="hover:scale-125 inline-block transition-all duration-700 hover:duration-75 hover:bg-blue-400 px-1"
          >
            {letter}
          </span>
        );
      })}
    </h1>
  );
};

export const Introduction = () => {
  return (
    <>
      <BaseLayout>

      </BaseLayout>
    </>
  );
};
