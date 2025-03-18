import { cn, useGetNewsById } from "@/libs";
import { SectionTitle } from "@/components";
import { getFile } from "@/utils";
import { useAppStore } from "@/store";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import { Image } from "antd";
import htmr from "htmr";
import { htmrOptions } from "@/constants";
import { useEditorStyle } from "@/styles/editorStyle.ts";

export const AnnouncementById = () => {
  const { id } = useParams();
  const { data } = useGetNewsById(id);
  const { language } = useAppStore();
  const { styles } = useEditorStyle();

  return (
    <section id={"announcements-by-id"} className={"py-[60px]"}>
      <div className="container">
        <SectionTitle
          label={data?.title[language] as string}
          $color={"black"}
          $textAlign="start"
        />

        <div className="mt-10">
          <p className={"text-sm mb-2 text-secondary"}>
            {dayjs(data?.creationDate).format("HH:mm DD.MM.YYYY")}
          </p>
          <div
            className={cn(
              "relative group mb-2 w-full h-[600px] overflow-hidden",
            )}
          >
            <Image
              src={getFile(data?.imageUrl)}
              className={"!h-full"}
              preview={false}
              rootClassName={
                "absolute left-0 top-0 w-full h-full content-['_'] blur-[10px]"
              }
              alt={`${data?.title[language]}-image`}
            />
            <Image
              src={getFile(data?.imageUrl)}
              className={"!h-full object-contain object-center"}
              preview={{
                mask: null,
              }}
              rootClassName={
                "absolute left-0 top-0 w-full h-full content-['_'] object-contain object-center"
              }
              alt={`${data?.title[language]}-image`}
            />
          </div>
          <div className={styles.editor}>
            {data?.content && htmr(data.content?.[language]||"", htmrOptions)}
          </div>
        </div>
      </div>
    </section>
  );
};
