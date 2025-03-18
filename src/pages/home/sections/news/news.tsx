import { SectionTitle } from "@/components";
import { useTranslation } from "react-i18next";
import { CiClock1 } from "react-icons/ci";
import { Card, Image, Typography } from "antd";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineEye } from "react-icons/ai";
import Slider from "react-slick";
import { useGetNews } from "@/libs";
import { formatTimestamp, getAlt, getFile } from "@/utils";
import { useAppStore } from "@/store";
import { Link } from "react-router-dom";
import { settings } from "./constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowButton } from "./components";

const { Title } = Typography;

export const News = () => {
  const { t } = useTranslation("main");
  const { language } = useAppStore();
  const { data } = useGetNews();

  return (
    <section id="news" className="mt-10">
      <div className="container">
        <SectionTitle label={t("Yangiliklar")} $mb="16px" />
        <Slider
          {...settings({
            nextArrow: <ArrowButton direction="next" />,
            prevArrow: <ArrowButton direction="prev" />,
          })}
        >
          {data?.content?.slice(0, 5)?.map((item, idx: number) => (
            <Link
              key={idx}
              to={`/news/announcements/${item.id}`}
              className="!block h-full"
            >
              <Card
                hoverable
                className="h-full rounded-xl group flex flex-col items-center my-2 mx-2 !border-none duration-500 ease-in-out transition-all"
                styles={{
                  body: {
                    width: "100%",
                    paddingLeft: 12,
                    paddingRight: 12,
                    paddingBottom: 16,
                    alignItems: "start",
                    display: "flex",
                    flexDirection: "column",
                  },
                  cover: {
                    overflow: "hidden",
                    borderRadius: "12px",
                  },
                }}
                cover={
                  <Image
                    preview={false}
                    className="group-hover:scale-105 transition-all w-full object-cover"
                    src={getFile(item.imageUrl)}
                    alt={getAlt(item.title?.[language])}
                  />
                }
              >
                <div className="flex items-center justify-start gap-x-4 w-full">
                  <div className="flex gap-x-1 items-center">
                    <CiCalendar />
                    <span>
                      {formatTimestamp(item.creationDate as string).date}
                    </span>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <CiClock1 />
                    <span>
                      {formatTimestamp(item.creationDate as string).time}
                    </span>
                  </div>
                  <div className="flex gap-x-1 items-center">
                    <AiOutlineEye />
                    <span>{100}</span>
                  </div>
                </div>
                <div className="mt-3">
                  <Title level={5} className="font-semibold line-clamp-2">
                    {item.title?.[language]}
                  </Title>
                </div>
              </Card>
            </Link>
          ))}
        </Slider>
      </div>
    </section>
  );
};
