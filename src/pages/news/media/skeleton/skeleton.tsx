import { cn } from "@/libs";
import { Skeleton } from "antd";

export const SkeletonItem = () => {
  return new Array(3).fill(undefined).map((_, idx) => (
    <div
      className={cn("relative h-[242px] rounded-lg overflow-hidden group", {
        "col-span-2 row-span-2 h-[500px]": idx == 0,
      })}
    >
      <Skeleton.Image active={true} className={"!w-full !h-full"} />
    </div>
  ));
};
