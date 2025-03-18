import { motion } from "framer-motion";
import { Button } from "@/components";
import { SunEnergyGif } from "@/assets";
import { useTranslation } from "react-i18next";

export const Sell = () => {
  const { t } = useTranslation("main");
  return (
    <section
      id={"sell"}
      className={"xl:py-[80px] lg:py-[50px] md:py-[35px] py-[20px] relative"}
      style={{
        background:
          "linear-gradient(195.41deg, #c8eafc -4.5%, #b3e0f8 22.61%, #1898db 71.47%, #028ed7 94.37%)",
      }}
    >
      <div className={"container flex items-center flex-wrap justify-between"}>
        <div
          className={
            "flex flex-col items-start flex-1 gap-[32px] max-w-[678px] text-color-light "
          }
        >
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={
              "lg:text-[33px] lg:leading-[45px] md:text-[30px] md:leading-[30px] text-xl leading-[28px] xl:text-[42px] xl:leading-[51px]  font-semibold"
            }
          >
            {t("O’z ehtiyojidan tashqari energiyani sotib daromad qilish")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className={"lg:text-base md:text-[14px] text-sm"}
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
        <div
          className={
            "flex-1 hidden  items-center xl:flex lg:flex md:flex   2xl:translate-x-[92px] min-h-[383px]"
          }
        >
          <img
            src={SunEnergyGif}
            loading={"lazy"}
            alt="gif"
            className={
              "absolute 2xl:-right-[57px] right-[0] xl:w-[540px] lg:w-[500px] md:w-[420px] w-[280px]"
            }
          />
        </div>
      </div>
    </section>
  );
};
