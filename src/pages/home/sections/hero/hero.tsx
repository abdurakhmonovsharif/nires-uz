import "./hero.css";
import { Button } from "@/components";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { VideoPlayer } from "@/components/videoPlayer";
import { useGetMediaByType } from "@/libs";
import { MEDIA_TYPE } from "@/types";
import { useEffect, useRef, useState } from "react";
import { getFile } from "@/utils";
import { ThreeDot } from "react-loading-indicators";

export const Hero = () => {
  const { t } = useTranslation("hero");
  const { data } = useGetMediaByType({
    page: 0,
    size: 100,
    type: MEDIA_TYPE.HEADER_VIDEO,
  });
  const [selectedVideo, setSelectedVideo] = useState<string | undefined>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    if (data?.content.length) {
      setCurrentIndex(0);
      setSelectedVideo(data.content[0].mediaUrl);
    }
  }, [data]);

  useEffect(() => {
    if (data?.content[currentIndex]?.mediaUrl) {
      setSelectedVideo(data.content[currentIndex].mediaUrl);
    }

    thumbnailRefs.current[currentIndex]?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [currentIndex, data]);

  const handleVideoEnd = () => {
    if (data?.content.length && data.content.length > 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.content.length);
    }
  };

  return (
    <section id={"hero"}>
      <div
        className={
          "container max-w-[1500px]  2xl:pt-[100px] flex items-center justify-between max-tablet:flex-col xl:pt-[100px] lg:pt-[80px] md:pt-[120px] pt-[50px] xl:pb-[50px] lg:pb-[35px] md:pb-[30px] pb-5"
        }
      >
        <div className={"flex flex-col gap-3 tablet:gap-6 max-w-[730px]"}>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:text-[43px] lg:leading-[52px] md:text-[30px] md:leading-[40px] text-2xl leading-[34px] 2xl:text-[52px] 2xl:leading-[64px] font-semibold"
          >
            {t("Quyosh panellari")}
            <br /> {t("o'rnatishning eng optimal yechimlari")}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={
              "2xl:text-[30px] lg:text-[25px] md:text-[20px] text-base  2xl:leading-10 leading-[25px]    font-black"
            }
          >
            {t("Muqobil energiya bilan kelajakni yorqin qiling.")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={
              "2xl:text-[30px] lg:text-[25px] md:text-[20px] text-base  2xl:leading-10 leading-[30px] font-light"
            }
          >
            {t(
              "Quyosh, shamol, suv, vadorod energiyalaridan cheksiz  foydalanishingiz mumkin.",
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: [1, 1.1, 1] }}
            transition={{ delay: 0.3, duration: 0.4, type: "keyframes" }}
            className={"grid grid-cols-2 gap-2 xl:gap-6 tablet:mr-10"}
          >
            <Button
              variant={"fill"}
              className={
                "xl:text-[14px] px-[10px] rounded-xl text-color-light tablet:text-[12px] text-[10px]"
              }
              label={t("Biz bilan bog’lanish")}
            />
            <Button
              variant={"fill"}
              label={t("Qayta qo’ng’iroq uchun so’rov")}
              className={
                "bg-yellow hover:bg-yellow/80 rounded-xl xl:text-[14px] px-[10px] tablet:text-[12px] text-[10px]"
              }
            />
          </motion.div>
        </div>
        <div className="relative max-tablet:w-full max-tablet:mt-4">
          <div className="absolute z-50 bg-white/10 w-full"></div>
          <div
            className={
              "max-tablet:max-w-[500px] tablet:w-[500px] xl:w-[550px] 2xl:w-[600px]"
            }
          >
            <div className="h-[290px] sm:h-[300px] tablet:h-[300px] xl:h-[350px] w-full">
              <VideoPlayer
                loop={data?.content.length == 1}
                videoPath={selectedVideo}
                onEnd={handleVideoEnd}
              />
            </div>

            <div className="flex gap-2 mt-2 overflow-x-auto w-full">
              {data?.content.map((video, index) => (
                <div className={"relative"}>
                  {currentIndex === index && (
                    <div
                      className={
                        "absolute w-full h-full bg-white/40 flex justify-center items-center"
                      }
                    >
                      <ThreeDot
                        color="#0d0d0d"
                        size="small"
                        text=""
                        textColor=""
                      />
                    </div>
                  )}
                  <img
                    key={index}
                    ref={(el) => (thumbnailRefs.current[index] = el)}
                    src={getFile(video.photoUrl)}
                    alt={`Thumbnail ${index}`}
                    className={`min-w-24 max-w-24 h-16 tablet:min-w-32 tablet:max-w-32 tablet:h-20 rounded cursor-pointer hover:opacity-80 object-cover`}
                    onClick={() => {
                      setSelectedVideo(video.mediaUrl);
                      setCurrentIndex(index);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
