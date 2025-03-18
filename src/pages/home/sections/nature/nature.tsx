import { motion } from "framer-motion";
import { ProtectNature } from "@/assets";
import { Button } from "@/components";
import { useTranslation } from "react-i18next";

export const Nature = () => {
  const { t } = useTranslation("nature");
  return (
    <section
      id={"nature"}
      className={
        "relative xl:h-[510px] lg:h-[400px] md:h-[360px] h-[300px] 2xl:h-[600px] overflow-x-hidden"
      }
    >
      <img
        src={ProtectNature}
        loading={"lazy"}
        alt="background"
        height={505}
        className={"object-cover absolute -z-10 h-full w-full"}
      />
      <div className={"container h-full flex items-center"}>
        <div
          className={
            "flex flex-col items-start gap-[32px] max-w-[678px] text-color-light "
          }
        >
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={
              "lg:text-[33px] lg:leading-[52px] md:text-[30px] md:leading-[40px] text-xl leading-[34px] xl:text-[42px] font-semibold"
            }
          >
            {t("Yerni birgalikda asraylik")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={"lg:text-base md:text-base text-sm"}
          >
            {t("Agar bu sizga qiziq bo’lsa bizga qo’ng’iroq qiling")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.3 }}
          >
            <Button
              variant={"fill"}
              className={
                "bg-yellow hover:bg-yellow/80 lg:text-[14px] text-[12px]"
              }
              label={t("Hoziroq qo’ng’iroq qiling")}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
