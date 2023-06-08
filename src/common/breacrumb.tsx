import { Text } from "./Text";
import { LinkNavigationWithSound } from "./linkNavigationWithSound";

type Props = {
  content: string;
};

export const Breadcrumb = ({ content }: Props) => {
  return (
    <div className="flex items-center animate-fadeIn">
      <LinkNavigationWithSound
        to="/"
        fontSize="text-[36px]"
        content={"INICIO"}
      />

      <div className="h-[25px] w-[2px] bg-white/70 mx-[24px]"></div>
      <Text fontSize="text-[36px]">{content}</Text>
      <div className="flex-1 bg-white/70 h-[2px] ml-[48px]"></div>
    </div>
  );
};
