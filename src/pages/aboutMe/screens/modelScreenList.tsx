import { Text } from "../../../common/Text";
import { dataListIntroductionType } from "./types";

type Props = {
  title: string;
  data: dataListIntroductionType[];
};

export const ModelListScreen = ({ title, data }: Props) => {
  return (
    <div className="animate-fadeIn">
      <div className="mt-[1rem]">
        <Text>{title}</Text>
      </div>

      <div className="flex flex-col gap-[20px]">
        {data.map((job) => {
          return (
            <button
              type="button"
              key={job.title}
              className="flex flex-col justify-center items-start hover:scale-105 transition-all duration-150 hover:bg-black/30 px-4 py-6 rounded-[3px]"
            >
              <div className="flex items-center justify-start">
                <div>
                  <img
                    src={job.image}
                    alt=""
                    className="w-[154px] h-[92px] object-cover border-2 border-white rounded-[3px]"
                  />
                </div>

                <div className="ml-[20px]">
                  <div className="text-white font-roboto text-[1rem] font-bold text-left">
                    {job.title}
                  </div>
                  <div className="text-white font-roboto text-[1rem] font-bold text-left">
                    {job.subtitle}
                  </div>
                </div>
              </div>

              <div>
                {job.description.trim() ? (
                  <p className="text-white font-roboto text-[1rem] font-normal mt-[12px] text-left">
                    {job.description}
                  </p>
                ) : undefined}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
