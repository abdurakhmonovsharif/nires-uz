import { cn, useGetNews } from "@/libs";
import { H4, SectionTitle } from "@/components";
import { getFile } from "@/utils";
import { useAppStore } from "@/store";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { Image } from "antd";
import {useTranslation} from "react-i18next";

export const Announcements = () => {
  const { data } = useGetNews();
  const { language } = useAppStore();
  const {t}=useTranslation("main")
  return (
    <section id={"announcements"} className={"py-[60px]"}>
      <div className="container">
        <SectionTitle
          label={t("Yangiliklar")}
          $color={"black"}
          $textAlign="start"
        />

        <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 mt-10">
          {data?.content.map((item, idx) => (
            <Link
              to={`/news/announcements/${item.id}`}
              key={idx}
              className={cn(
                "relative h-[242px] rounded-lg overflow-hidden group",
                {
                  "col-span-2 row-span-2 h-[500px]": idx == 0,
                },
              )}
            >
              <Image
                src={getFile(item.imageUrl)}
                className={
                  "object-cover object-center w-full h-full absolute left-0 top-0 group-hover:scale-110 transition-all"
                }
                rootClassName={"static block"}
                alt={`${item.title[language]}-image`}
              />
              <div
                className={"absolute w-full h-full"}
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
