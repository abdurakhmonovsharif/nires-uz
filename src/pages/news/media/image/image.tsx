import { cn } from "@/libs";
import { getFile } from "@/utils";
import dayjs from "dayjs";
import { H4 } from "@/components";
import { TMedia } from "@/types";
import { useAppStore } from "@/store";
import { Image } from "antd";

type TProps = {
  item: TMedia;
  idx: number;
};

export const ImageItem = ({ item, idx }: TProps) => {
  const { language } = useAppStore();

  return (
    <div
      className={cn("relative h-[242px] rounded-lg overflow-hidden group", {
        "col-span-2 row-span-2 h-[500px]": idx == 0,
      })}
    >
      <Image
        src={getFile(item.mediaUrl)}
        preview={{
          mask: false,
          title: item.title[language],
          className:
            "[&_.ant-image-preview-title]:text-color-light pt-10 text-lg",
        }}
        className={
          "object-cover object-center w-full !h-full absolute left-0 top-0 group-hover:scale-110 transition-all"
        }
        rootClassName={"static block"}
        alt={`${item.title[language]}-image`}
      />

      <div
        className={"absolute w-full h-full pointer-events-none"}
        style={{
          background:
            "linear-gradient(180deg,rgba(0, 42, 108,.2) 60.06%, rgba(var(--color-primary)) 100%)",
        }}
      ></div>
      <div className={"absolute z-10 bottom-0 text-color-light p-4"}>
        <div>
          <p className={"text-sm text-white/90"}>
            {dayjs(item.creationDate).format("HH:mm DD.MM.YYYY")}
          </p>
        </div>
        <H4
          $fs={idx == 0 ? "20px" : "14px"}
          $color={"inherit"}
          $lineHeigt={"120%"}
          className={"line-clamp-2"}
        >
          {item.title[language]}
        </H4>
      </div>
    </div>
  );
};
