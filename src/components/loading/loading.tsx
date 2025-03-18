import { cn } from "@/libs";
import { Riple } from "react-loading-indicators";

type TProps = {
  allScreen?: boolean;
  betweenPages?: boolean;
};

export const Loading = ({ allScreen, betweenPages }: TProps) => {
  return (
    <div
      className={cn("flex flex-grow items-center justify-center z-[9999]", {
        "fixed w-screen h-screen top-0 bg-white": allScreen,
        "h-screen": betweenPages,
      })}
    >
      <Riple color={"#45db4c"} size="medium" textColor={"#253726"} />
    </div>
  );
};
