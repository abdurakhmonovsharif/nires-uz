import {motion} from "framer-motion";
import {AntCard, Box} from "@/components";
import {Button, Card,Image} from "antd";
import {ArrowRightOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import {SolarType1, SolarType2, SolarType3} from "@/assets";
import {typeOfBattery_n3,typeOfBattery_n2,typeOfBattery_n1} from "@/pages/home/sections";
import {useAppStore} from "@/store";

export const TypesBattery = () => {
    const {language}=useAppStore();
    const {t} = useTranslation("typesBattery")
    return (
        <section id={"types"} className={"py-[80px]"}>
            <div className={"container"}>
                <motion.h2
                    initial={{opacity: 0, y: -100}}
                    viewport={{once: true}}
                    whileInView={{opacity: 1, y: 0}}
                    className={"lg:text-[33px] lg:leading-[45px] md:text-[30px] md:leading-[30px] text-xl leading-[28px] xl:text-[42px] xl:leading-[51px]  font-semibold text-center"}
                >
                    {t("Quyosh batareyasi turlari")}
                </motion.h2>
                <motion.p
                    initial={{opacity: 0, x: -100}}
                    viewport={{once: true}}
                    whileInView={{opacity: 1, x: 0}}
                    transition={{delay: 0.1}}
                    className={"lg:text-base md:text-[14px] text-sm text-secondary mt-6 text-center"}
                >
                    {t("Odatda quyosh batareyalarini o’rnatish va ishlatishning eng keng tarqalgan usuli quyidagi keltirilgan 3 usuldan iborat. bular haqida batafsil o’rganishni xohlasangiz bizning to’liq kursimizda o’qishingizni tavfsiya qilamiz.")}
                </motion.p>
                <Box $display={"grid"} $gap={"32px"} className="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3">
                    <motion.div
                        initial={{opacity: 0, scale: 1}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1, scale: [1.2, 1]}}
                        transition={{delay: 0.1, duration: 0.3}}
                    >
                        <AntCard
                            hoverable={true}
                            $mt={"40px"}
                            cover={
                                <Image
                                    alt={"card img"}
                                    height={240}
                                    className={"object-cover h-[240px] !rounded-none"}
                                    src={SolarType1
                                    }
                                />
                            }
                        >
                            <Card.Meta
                                className={
                                    "[&_.ant-card-meta-description]:line-clamp-3 [&_.ant-card-meta-description]:text-base [&_.ant-card-meta-description]:text-secondary [&_.ant-card-meta-description]:mb-6 [&_.ant-card-meta-title]:!mb-6 [&_.ant-card-meta-title]:text-xl"
                                }
                                title={typeOfBattery_n1.title[language]}
                                description={typeOfBattery_n1.body[language]}
                            />
                            <Button
                                icon={<ArrowRightOutlined/>}
                                type={"link"}
                                className={"p-0 h-max text-primary hover:!text-primary/60"}
                                iconPosition={"end"}
                            >
                                {t("Batafsil")}
                            </Button>
                        </AntCard>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, scale: 1}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1, scale: [1.2, 1]}}
                        transition={{delay: 0.3, duration: 0.3}}
                    >
                        <AntCard
                            hoverable={true}
                            $mt={"40px"}
                            cover={
                                <Image
                                    alt={"card img"}
                                    height={240}
                                    className={"object-cover h-[240px] !rounded-none"}
                                    src={SolarType2}
                                />
                            }
                        >
                            <Card.Meta
                                className={
                                    "[&_.ant-card-meta-description]:line-clamp-3 [&_.ant-card-meta-description]:text-base [&_.ant-card-meta-description]:text-secondary [&_.ant-card-meta-description]:mb-6 [&_.ant-card-meta-title]:!mb-6 [&_.ant-card-meta-title]:text-xl"
                                }
                                title={typeOfBattery_n2.title[language]}
                                description={typeOfBattery_n2.body[language]}
                            />
                            <Button
                                icon={<ArrowRightOutlined/>}
                                type={"link"}
                                className={"p-0 h-max text-primary hover:!text-primary/60"}
                                iconPosition={"end"}
                            >
                                {t("Batafsil")}
                            </Button>
                        </AntCard>
                    </motion.div>
                    <motion.div
                        initial={{opacity: 0, scale: 1}}
                        viewport={{once: true}}
                        whileInView={{opacity: 1, scale: [1.2, 1]}}
                        transition={{delay: 0.5, duration: 0.3}}
                    >
                        <AntCard
                            hoverable={true}
                            $mt={"40px"}
                            cover={
                                <Image
                                    alt={"card img"}
                                    height={240}
                                    className={"object-cover h-[240px] !rounded-none"}
                                    src={SolarType3}
                                />
                            }
                        >
                            <Card.Meta
                                className={
                                    "[&_.ant-card-meta-description]:line-clamp-3 [&_.ant-card-meta-description]:text-base [&_.ant-card-meta-description]:text-secondary [&_.ant-card-meta-description]:mb-6 [&_.ant-card-meta-title]:!mb-6 [&_.ant-card-meta-title]:text-xl"
                                }
                                title={typeOfBattery_n3.title[language]}
                                description={typeOfBattery_n3.body[language]}
                            />
                            <Button
                                icon={<ArrowRightOutlined/>}
                                type={"link"}
                                className={"p-0 h-max text-primary hover:!text-primary/60"}
                                iconPosition={"end"}
                            >
                                {t("Batafsil")}
                            </Button>
                        </AntCard>
                    </motion.div>
                </Box>
            </div>
        </section>
    );
};
