import { useGetManagementById } from "@/libs";
import { useParams } from "react-router-dom";
import { AntCard, Box, H4, LG, Text } from "@/components";
import { Image } from "antd";
import { getFile, phoneFormatter } from "@/utils";
import htmr from "htmr";
import { htmrOptions } from "@/constants";
import { useEditorStyle } from "@/styles/editorStyle.ts";
import { useAppStore } from "@/store";

export const ManagementById = () => {
  const { id } = useParams();
  const { data } = useGetManagementById(id);
  const { styles } = useEditorStyle();
  const { language } = useAppStore();
  return (
    <section className={"py-[60px] bg-primary/80"}>
      <div className="container">
        <AntCard
          className={
            "bg-gradient-to-br from-primary/70 from-60% to-primary/50 mt-10 relative management-card"
          }
        >
          <Box $gap={"24px"} $pos={"relative"}>
            <Image
              src={getFile(data?.image)}
              width={187}
              preview={{
                mask: null,
              }}
              alt={data?.name?.[language]?.split(" ")[0]}
              rootClassName={"rounded-xl overflow-hidden"}
              className={"aspect-[187/240] object-cover cursor-pointer"}
            />
            <Box $direction={"column"} $align={"start"}>
              <Text className={"!text-white"} $fs={"20px"}>
                {data?.rank?.[language]}
              </Text>

              <H4 $color={"white"} $fs={"24px"} $mt={"4px"}>
                {data?.name?.[language]}
              </H4>

              <Box
                $direction={"column"}
                $mt={"16px"}
                $gap={"8px"}
                className={"ml-2"}
              >
                <a href={`tel:+${data?.phone?.replace("+", "")}`}>
                  <LG $color={"white"} $fs={"18px"} $fw={500}>
                    {phoneFormatter(data?.phone?.replace("+", ""))}
                  </LG>
                </a>
                <a href={`mailto:${data?.email}`}>
                  <LG $color={"white"} $fs={"18px"} $fw={500}>
                    {data?.email}
                  </LG>
                </a>
              </Box>
            </Box>
          </Box>
          {/*<Segmented<string>*/}
          {/*  options={[*/}
          {/*    { label: t("bio"), value: "bio" },*/}
          {/*    { label: t("duties"), value: "duties" },*/}
          {/*  ]}*/}
          {/*  size={"large"}*/}
          {/*  className={*/}
          {/*    "management-segmentd transition-all relative mt-4 bg-[linear-gradient(294.77deg,#3F9CFB_10.58%,#39D88E_146.85%)] text-color-light !rounded p-1 [&_.ant-segmented-group]:gap-1 [&_.ant-segmented-item]:!rounded [&_.ant-segmented-item-selected]:!bg-white/30 [&_.ant-segmented-item-selected]:!text-color-light [&_.ant-segmented-item-label]:!min-h-10 [&_.ant-segmented-item-label]:text-white [&_.ant-segmented-item-label]:!leading-10"*/}
          {/*  }*/}
          {/*  value={sortBy}*/}
          {/*  onChange={(value) => {*/}
          {/*    setSearchParams((prev) => {*/}
          {/*      const newParams = new URLSearchParams(prev);*/}
          {/*      newParams.set("sortBy", value);*/}
          {/*      return newParams;*/}
          {/*    });*/}
          {/*  }}*/}
          {/*/>*/}
          <Box $pos={"relative"}>
            {/*{sortBy == "bio" ? (*/}
            <Box $direction={"column"} $mt={"16px"} $gap={"16px"}>
              <H4 $color={"white"} $fs={"22px"}>
                Tarjimai holi
              </H4>
              <LG $color={"white"} className={styles.editor}>
                {htmr(data?.bio?.[language] || "", htmrOptions)}
              </LG>
            </Box>
            {/*) : (*/}
            {/*  <Box $direction={"column"} $mt={"16px"} $gap={"16px"}>*/}
            {/*    <H4 $color={"white"} $fs={"22px"}>*/}
            {/*      Vazifasi*/}
            {/*    </H4>*/}
            {/*    <LG $color={"white"} className={styles.editor}>*/}
            {/*      {data?.duties &&*/}
            {/*        htmr(data?.duties?.[language] || "", htmrOptions)}*/}
            {/*    </LG>*/}
            {/*  </Box>*/}
            {/*)}*/}
          </Box>
        </AntCard>
      </div>
    </section>
  );
};
