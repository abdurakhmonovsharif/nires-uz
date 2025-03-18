import { useGetServices } from "@/libs";
import { AntCard, Box, Loading, SectionTitle } from "@/components";
import { useAppStore } from "@/store";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import { FileIcon } from "@/assets";
import { Link } from "react-router-dom";

// const navigate = useNavigate()

export const Acts = () => {
  const { acts, isPending } = useGetServices();
  const { language } = useAppStore();
  const { t } = useTranslation("main");
  return (
    <section className={"py-[60px] bg-primary/80"}>
      <div className="container max-w-[1400px] space-y-3.5">
        <SectionTitle
          label={t("Sohaga oid qaror va farmonlar")}
          $color={"white"}
          $textAlign="start"
        />
        {!isPending ? (
          acts
            ?.sort((a, b) => a.sortOrder - b.sortOrder)
            .map((act) => (
              <AntCard
                className={
                  "!rounded-md bg-gradient-to-br  from-primary/70 from-60% to-primary/50 mt-10 relative management hover:from-primary hover:to-primary/70 hover:shadow-lg transition-all  duration-300"
                }
                hoverable
              >
                <Link
                  to={act?.siteUrl}
                  className="block w-full h-full"
                  target="_blank"
                >
                  <Box className={"flex items-end justify-between  "}>
                    <Box className={"flex items-center gap-x-3"}>
                      <Box className="flex items-center">
                        <Image
                          preview={false}
                          src={FileIcon}
                          width={70}
                          alt={"doc"}
                          className={"aspect-[187/240] object-cover rounded-xl"}
                        />
                      </Box>
                      <Box className={"px-2 flex-col text-white"}>
                        <h5
                          className={
                            "text-lg font-semibold text-white group-hover:text-white"
                          }
                        >
                          {act?.name?.[language]}
                        </h5>
                      </Box>
                    </Box>
                  </Box>
                </Link>
              </AntCard>
            ))
        ) : (
          <Loading />
        )}
      </div>
    </section>
  );
};
