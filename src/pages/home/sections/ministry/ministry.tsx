import { useGetServices } from "@/libs";
import Slider from "react-slick";
import { Card, Image } from "antd";
import { getFile } from "@/utils";
import { useAppStore } from "@/store";
import { Link } from "react-router-dom";
import { settings } from "./constants";
import { useMediaQuery } from "@/hooks";

export const Ministry = () => {
  const { ministry } = useGetServices();
  const { language } = useAppStore();
  const { max900 } = useMediaQuery();

  return (
    <section className={"overflow-x-hidden"}>
      <div className={"container py-3 mb-4"}>
        <Slider {...settings({})}>
          {ministry?.map((item, idx) => (
            <div className={"px-2"} key={idx}>
              <Link target={"_blank"} to={item.siteUrl}>
                <Card
                  styles={{
                    body: {
                      paddingTop: max900 ? 10 : 13,
                      paddingBottom: max900 ? 10 : 13,
                      paddingLeft: max900 ? 12 : 16,
                      paddingRight: max900 ? 12 : 16,
                    },
                  }}
                  className="hover:bg-archive_primary duration-500 ease-in-out transition-all "
                >
                  <div className="w-full flex items-center gap-x-5 ">
                    <Image
                      preview={false}
                      className={
                        "!w-[50px] aspect-[1/1] !h-[50px] object-contain"
                      }
                      src={getFile(item.imgUrl)}
                    />
                    <p className={`mt-1 line-clamp-2 !text-sm font-semibold`}>
                      {item.name[language]}
                    </p>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
