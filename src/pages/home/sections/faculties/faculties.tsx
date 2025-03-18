import {motion} from "framer-motion";
import {AntCard, Box} from "@/components";
import {Service1, Service2, Service3, Service4, ZapFast} from "@/assets";
import {Button, Card,Image} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {useMediaQuery} from "@/hooks";
import {cn} from "@/libs";
import {useTranslation} from "react-i18next";

export const Faculties = () => {
    const {tabletLg, tabletXs} = useMediaQuery();
    const {t} = useTranslation("main")
    return (
        <section id={"faculties"} className={"py-[80px] bg-yellow/5"}>
            <div className={"container"}>
                <div
                    className={cn("flex items-start justify-between gap-8 flex-wrap", {
                        "flex-col items-center": tabletLg,
                    })}
                >
                    <div
                        className={cn("flex flex-col gap-6 max-w-[360px]", {
                            "max-w-prose items-center text-center": tabletLg,
                            "max-w-full": tabletXs,
                        })}
                    >
                        <ZapFast className={""}/>
                        <motion.h2
                            initial={{opacity: 0, x: -100}}
                            viewport={{once: true}}
                            whileInView={{opacity: 1, x: 0}}
                            className={"lg:text-[33px] lg:leading-[45px] md:text-[30px] md:leading-[30px] text-xl leading-[28px] xl:text-[42px] xl:leading-[51px]  font-semibold"}
                        >
                            {t("Institutimiz quyidagi yo'nalishlarda faoliyat olib boradi")}
                        </motion.h2>
                    </div>
                    <Box
                        $display={"grid"}
                        className={"flex-1 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 "}
                        $gap={"32px"}
                    >
                        {[{title: "Ekspertiza xizmati", image: Service1}, {
                            title: "Ekspertiza xizmati",
                            image: Service2
                        }, {title: "Ilmiy tadqiqotlar", image: Service3}, {
                            title: "QTEM Loyihalari",
                            image: Service4
                        }].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{opacity: 0, scale: 1}}
                                viewport={{once: true}}
                                whileInView={{opacity: 1, scale: [1.2, 1]}}
                                transition={{delay: 0.1, duration: 0.3}}
                            >
                                <AntCard
                                    $rounded={"12px"}
                                    hoverable={true}
                                    bordered={true}
                                    className={
                                        "border-primary hover:border-primary/60 border-2 overflow-hidden"
                                    }
                                    classNames={{
                                        body: "!p-[5px_24px_14px] bg-primary/10 !rounded-none",
                                    }}
                                    cover={
                                        <Image
                                            alt={"card img"}
                                            height={182}
                                            className={"object-cover h-[182px]"}
                                            src={item.image
                                            }
                                        />
                                    }
                                >
                                    <Card.Meta
                                        className={
                                            "[&_.ant-card-meta-description]:line-clamp-4 [&_.ant-card-meta-description]:text-base [&_.ant-card-meta-description]:text-secondary [&_.ant-card-meta-description]:mb-5 [&_.ant-card-meta-title]:text-xl"
                                        }
                                        title={item.title}
                                        description={
                                            "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old"
                                        }
                                    />
                                    <Button
                                        icon={<ArrowRightOutlined/>}
                                        type={"link"}
                                        className={"p-0 h-max text-primary hover:!text-primary/60"}
                                        iconPosition={"end"}
                                    >
                                        Batafsil tanishish
                                    </Button>
                                </AntCard>
                            </motion.div>
                        ))}
                    </Box>
                </div>
            </div>
        </section>
    );
};
