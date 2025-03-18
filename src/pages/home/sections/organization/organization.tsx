import { motion } from "framer-motion";
import { LawEntity, SolarCharging } from "@/assets";
import { useTranslation } from "react-i18next";

export const Organization = () => {
  const { t } = useTranslation("organization");

  return (
    <section id={"organization"} className={"py-[80px]"}>
      <div className={"container"}>
        <div
          className={
            "flex items-start lg:justify-between gap-8 max-tablet:flex-col max-tablet:items-center"
          }
        >
          <div
            className={
              "flex flex-col gap-4 2xl:gap-6 max-w-[500px] 2xl:max-w-[594px] w-full"
            }
          >
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              className={
                "lg:text-[33px] lg:leading-[52px] md:text-[30px] md:leading-[40px] text-2xl max-md:text-center xl:text-[42px] xl:leading-[64px] font-semibold"
              }
            >
              {t("Tashkilotlar uchun optimal yechim")}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className={
                "xl:text-xl lg:text-lg text-base leading-[20px] text-secondary"
              }
            >
              {t(
                `Quyosh panellarini o’rnatish bo’yicha eng optimal yechim berishda biz olimlarimizning bilimi uzoq yillik tajribasiga tayanamiz. Mablag’ingiz va vaqtingizni tejaymiz.`,
              )}
              <br />
              <br />
              {t(
                `Tashkilotning energiyaga bo'lgan extiyojidan kelib chiqibsifatli quyosh panellarini o'rnatib beramiz.`,
              )}
              <br />
              <br />
              {t(
                "Ehtiyojdan ortgan elektr energiyasini sotish bo'yicha yechimlar va takliflar",
              )}
            </motion.p>
            <div className={"flex flex-col gap-3"}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className={"xl:text-[20px] text-base flex gap-[10px]"}
              >
                <span className={"font-bold text-green"}>01/</span>
                <p className={"font-semibold"}>
                  {t("Quyosh panellarini o'rnatish")}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className={"xl:text-[20px] text-base flex gap-[10px]"}
              >
                <span className={"font-bold text-green"}>02/</span>
                <p className={"font-semibold"}>
                  {t("Ortiqcha energiyani sotib beramiz")}
                </p>
              </motion.div>
            </div>
          </div>
          <div className={"relative"}>
            <div
              className={
                "max-h-[552px] max-md:mt-5 h-full rounded-[12px] overflow-hidden"
              }
            >
              <img
                src={LawEntity}
                width={469}
                height={552}
                alt="organization img"
                className={
                  "w-[400px] h-[300px] md:w-[469px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[552px] object-cover"
                }
              />
            </div>

            <motion.div
              initial={{ y: -70, x: 70 }}
              whileInView={{ y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className={
                "absolute max-md:hidden xl:bottom-[28px] bottom-[10px] xl:left-[-54px] md:left-[-40px] left-[10px] p-[24px_30px] pr-0 bg-yellow rounded-[12px] text-[#2A3334] max-w-[266px]"
              }
            >
              <SolarCharging className="text-[50px] lg:text-[70px] xl:text-[90px]" />
              <p className={"xl:text-lg mt-5 xl:mt-[28px]"}>
                {t("Ortiqcha quyosh energiyasini soting va pul ishlang.")}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
