import {SectionTitle, SwiperBtn} from "@/components";
import {Pagination, A11y, Autoplay} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "./swiper.css";
import "swiper/css/pagination";
import {ABOUT_HTML, ABOUT_HTML_RU, about_imgs} from "@/pages/about/constants.ts";
import {Image} from "antd";
import {cn} from "@/libs";
import htmr from "htmr";
import {useEditorStyle} from "@/styles/editorStyle.ts";
import {useTranslation} from "react-i18next";
import {useAppStore} from "@/store";

export const About = () => {
    const {styles} = useEditorStyle();
    const {t} = useTranslation("main")
    const {language} = useAppStore()
    return (
        <section id={"about"} className={"py-[60px]"}>
            <div className="container">
                <SectionTitle
                    label={t("Institut haqida")}
                    $color={"black"}
                    $textAlign="start"
                />

                <Swiper
                    modules={[Pagination, A11y, Autoplay]}
                    autoplay={{delay: 3000, disableOnInteraction: false}}
                    loop={true}
                    speed={500}
                    spaceBetween={20}
                    slidesPerView={1}
                    virtual={false}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                >
                    <div
                        className="container max-[1000px]:hidden z-40 mx-auto absolute top-1/2 -translate-y-1/0 left-0 right-0"
                        slot="container-start"
                    >
                        <SwiperBtn
                            isPrev
                            className="left-5 text-primary border border-solid border-primary/50"
                        />
                        <SwiperBtn className="right-5 text-primary border border-solid border-primary/50"/>
                    </div>
                    {about_imgs.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Image.PreviewGroup items={about_imgs.map((item) => item.img)}>
                                <div
                                    className={cn(
                                        "relative group mt-4 w-full h-[700px] overflow-hidden"
                                    )}
                                >
                                    <Image
                                        alt={item.alt}
                                        preview={{
                                            mask: false,
                                        }}
                                        src={item.img}
                                        rootClassName={
                                            "w-full absolute left-0 top-0 w-full h-full content-['_'] blur-[10px]"
                                        }
                                        className={
                                            "!h-full w-full object-center object-cover cursor-pointer"
                                        }
                                    />
                                    <Image
                                        alt={item.alt}
                                        preview={{
                                            mask: false,
                                        }}
                                        src={item.img}
                                        rootClassName={"h-[700px] w-full absolute"}
                                        className={
                                            "!h-full w-full object-center object-contain cursor-pointer"
                                        }
                                    />
                                </div>
                            </Image.PreviewGroup>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className={cn(styles.editor, "mt-5")}>{htmr(language === "uz" ? ABOUT_HTML : ABOUT_HTML_RU)}</div>
            </div>
        </section>
    );
};
