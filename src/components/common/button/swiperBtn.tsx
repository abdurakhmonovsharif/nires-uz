import { useSwiper } from "swiper/react";
import { cn } from "@/libs";
import { IoIosArrowBack } from "react-icons/io";

type TProps = {
  isPrev?: boolean;
  className?: string;
};

export const SwiperBtn = ({ isPrev, className }: TProps) => {
  const swiper = useSwiper();

  return (
    <button
      className={cn(
        `absolute top-1/2 -translate-y-1/2 z-50 bg-white w-10 text-white h-10 rounded-full bg-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.5)] transition-all duration-300 flex items-center justify-center`,
        {
          ["left-[-100px]"]: isPrev,
          ["right-[-100px]"]: !isPrev,
        },
        className,
      )}
      slot="container-start"
      onClick={() => {
        if (isPrev) {
          swiper.slidePrev();
          return;
        }
        swiper.slideNext();
      }}
    >
      <IoIosArrowBack
        style={{ rotate: !isPrev ? "180deg" : "" }}
        className="w-[24px] h-6"
      />
    </button>
  );
};
