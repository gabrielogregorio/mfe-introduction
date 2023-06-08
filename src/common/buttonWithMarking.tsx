import { ButtonWithSound } from "./buttonWithSound";

type Props = {
  content: string;
  isActive: boolean;
};

export const ButtonWithMarking = ({ content, isActive }: Props) => {
  return (
    <div className="flex items-center justify-between max-w-[404px] w-full">
      <ButtonWithSound isActive={isActive} content={content} />
      <div
        className={`w-[11px] h-[11px] border border-white ${
          isActive ? "bg-white" : ""
        } rounded-full`}
      ></div>
    </div>
  );
};
