import { useGetMedia, useGetMediaByType } from "@/libs";
import { Box, SectionTitle } from "@/components";

import { ImageItem } from "@/pages/news/media/image";
import { Segmented } from "antd";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { VideoItem } from "@/pages/news/media/video";
import { SkeletonItem } from "@/pages/news/media/skeleton";

export const Media = () => {
  const { t } = useTranslation("main");
  const [searchParams, setSearchParams] = useSearchParams();
  const byType = searchParams.get("byType") || "ALL";
  const { data, setParams, isPending } = useGetMediaByType(
    {
      type: byType || "IMAGE",
    },
    byType != "ALL",
  );
  const { data: allData, isPending: isPendingAll } = useGetMedia(
    undefined,
    byType == "ALL",
  );

  const handleChangeType = (type: string) => {
    if (type) setParams((prev) => ({ ...prev, type }));
  };

  return (
    <section id={"media"} className={"py-[60px]"}>
      <div className="container">
        <Box $align={"center"} $justify={"space-between"}>
          <SectionTitle label={t("media")} $color={"black"} $textAlign="start" />
          <Segmented<string>
            options={[
              { label: t("all"), value: "ALL" },
              { label: t("image"), value: "IMAGE" },
              { label: t("video"), value: "VIDEO" },
            ]}
            size={"large"}
            className={
              "transition-all relative mt-4 bg-[linear-gradient(294.77deg,#3F9CFB_10.58%,#39D88E_146.85%)] text-color-light !rounded p-1 [&_.ant-segmented-group]:gap-1 [&_.ant-segmented-item]:!rounded [&_.ant-segmented-item]:hover:!text-color-light [&_.ant-segmented-item-selected]:!bg-white/20 [&_.ant-segmented-thumb]:!bg-white/50 [&_.ant-segmented-item-selected]:!text-color-light [&_.ant-segmented-item-label]:!min-h-10 [&_.ant-segmented-item-label]:!leading-10"
            }
            value={byType}
            onChange={(value) => {
              setSearchParams((prev) => {
                const newParams = new URLSearchParams(prev);
                newParams.set("byType", value);
                if (newParams.get("byType") != "ALL") {
                  handleChangeType(newParams.get("byType") as string);
                }
                return newParams;
              });
            }}
          />
        </Box>

        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          {isPending && byType != "ALL" && <SkeletonItem />}
          {isPendingAll && byType == "ALL" && <SkeletonItem />}
          {(byType == "ALL" ? allData : data)?.content.map((item, idx) =>
            item.mediaType == "IMAGE" ? (
              <ImageItem item={item} idx={idx} key={idx} />
            ) : (
              <VideoItem item={item} idx={idx} />
            ),
          )}
        </div>
      </div>
    </section>
  );
};
