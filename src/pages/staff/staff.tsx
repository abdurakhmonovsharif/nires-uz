import { useGetManagement } from "@/libs";
import { AntCard, Box, Button, H4, LG, SectionTitle, Text } from "@/components";
import { getFile, phoneFormatter } from "@/utils";
import { Image } from "antd";
import { useTranslation } from "react-i18next";
import { useAppStore } from "@/store";

export const Staff = () => {
  const { staff } = useGetManagement();
  const { t } = useTranslation("main");
  const { language } = useAppStore();
  return (
    <section id={"management"} className={"py-[60px] bg-primary/80"}>
      <div className={"container"}>
        <SectionTitle
          label={t("Mudirlar")}
          $color={"white"}
          $textAlign="start"
        />
        {staff
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          ?.map((item) => (
            <AntCard
              className={
                "bg-gradient-to-br from-primary/70 from-60% to-primary/50 mt-10 relative management-card"
              }
            >
              <Box $gap={"24px"} $pos={"relative"}>
                <Image
                  src={getFile(item.image)}
                  width={187}
                  alt={item?.name?.[language]?.split(" ")[0]}
                  className={"aspect-[187/240] object-cover rounded-xl"}
                />
                <Box $direction={"column"} $align={"start"}>
                  <H4 $color={"white"} $fs={"24px"}>
                    {item.name?.[language]}
                  </H4>
                  <Text className={"!text-teal-100"} $mt={"4px"} $fs={"15px"}>
                    {item.rank?.[language]}
                  </Text>
                  <Box $gap={"80px"} $mt={"16px"} style={{ flexWrap: "wrap" }}>
                    <a href={`tel:+${item?.phone?.replace("+", "")}`}>
                      <LG $color={"white"} $fs={"18px"} $fw={500}>
                        {phoneFormatter(item?.phone?.replace("+", ""))}
                      </LG>
                    </a>
                    <a href={`mailto:${item?.email}`}>
                      <LG $color={"white"} $fs={"18px"} $fw={500}>
                        {item?.email}
                      </LG>
                    </a>
                  </Box>
                  <Button
                    href={`/about/management/${item.id}`}
                    label={"Batafsil"}
                    variant={"outline"}
                    className={"py-2 px-4 rounded mt-4"}
                  />
                </Box>
              </Box>
            </AntCard>
          ))}
      </div>
    </section>
  );
};
