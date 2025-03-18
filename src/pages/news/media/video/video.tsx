import { cn } from "@/libs";
import { extractVideoId } from "@/utils";
import dayjs from "dayjs";
import { Box, H4, Button as ButtonUi, LG } from "@/components";
import { TMedia } from "@/types";
import { useAppStore } from "@/store";
import { Button, Image } from "antd";
import { PlayIcon } from "@/assets";
import YouTube, { YouTubeProps } from "react-youtube";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from "react";
import { useScrollLock } from "usehooks-ts";

type TProps = {
  item: TMedia;
  idx: number;
};

export const VideoItem = ({ item, idx }: TProps) => {
  const { language } = useAppStore();
  const thumbnail = `https://i.ytimg.com/vi/${extractVideoId(item.mediaUrl)}/maxresdefault.jpg`;
  const [showIframe, setShowIframe] = useState<boolean>(false);
  const { lock, unlock } = useScrollLock({
    autoLock: false,
    lockTarget: "#root",
  });

  const handleShowIframe = (value: boolean) => {
    if (value) lock();
    if (!value) unlock();
    setShowIframe(value);
  };

  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <AnimatePresence>
        {showIframe && (
          <motion.div
            className="fixed top-0 w-full h-full bg-[#00000090] left-0 z-[1000] flex items-center justify-center"
            onClick={() => handleShowIframe(false)}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            <ButtonUi
              LeftSvg={<IoIosCloseCircle className="w-8 h-8" />}
              onClick={() => handleShowIframe(false)}
              className="absolute top-5 right-5 rounded-[50%] text-color-light"
            />
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-[80%] h-[80%]"
            >
              <LG $color={"white"} $textAlign={"center"} $mb={"10px"}>
                {item.title[language]}
              </LG>
              <YouTube
                videoId={extractVideoId(item.mediaUrl)}
                opts={opts}
                onReady={onPlayerReady}
                className={"h-full"}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={cn("relative h-[242px] rounded-lg overflow-hidden group", {
          "col-span-2 row-span-2 h-[500px]": idx == 0,
        })}
      >
        <Box
          $pos="absolute"
          $bg="#00000020"
          $width="100%"
          $height="100%"
          $align="center"
          $justify="center"
          $zIndex={"100"}
        >
          <Button
            icon={<PlayIcon fontSize={"20"} />}
            shape="circle"
            size="large"
            onClick={() => {
              handleShowIframe(true);
            }}
            style={{ width: "45px", height: "45px", background: "#fff" }}
          />
        </Box>
        <Image
          src={thumbnail}
          className={
            "object-cover object-center w-full !h-full absolute left-0 top-0 group-hover:scale-110 transition-all"
          }
          rootClassName={"static block"}
          alt={`${item.title[language]}-image`}
        />

        <div
          className={"absolute w-full h-full"}
          style={{
            background:
              "linear-gradient(180deg,rgba(255,255,255,0.05) 50.06%, rgba(var(--color-primary)) 100%)",
          }}
        ></div>
        <div className={"absolute bottom-0 p-4 z-[101]"}>
          <div>
            <p className={"text-sm text-white"}>
              {dayjs(item.creationDate).format("HH:mm DD.MM.YYYY")}
            </p>
          </div>
          <H4
            $fs={idx == 0 ? "20px" : "14px"}
            $color={"white"}
            $lineHeigt={"120%"}
            className={"line-clamp-2"}
          >
            {item.title[language]}
          </H4>
        </div>
      </div>
    </>
  );
};
