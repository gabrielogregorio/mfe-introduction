import { Text, TitleText } from "ogregorio-component-library-studies";
import { dataListIntroductionType } from "./types";

type Props = {
  title: string;
  data: dataListIntroductionType[];
};

export const ModelListScreen = ({ title, data }: Props) => {
  return (
    <div className="animate-fadeIn">
      <div className="mt-[1rem]">
        <TitleText content={title} />
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
                  <Text content={job.title} />
                  <Text content={job.subtitle} />
                </div>
              </div>

              <div>
                {job.description.trim() ? (
                  <Text content={job.description} />
                ) : undefined}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
