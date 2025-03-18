import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const Integration = () => {
  const { t } = useTranslation("integration");
  return (
    <section
      id={"integration"}
      className={`xl:py-[96px] lg:py-[75px] md:py-[50px] py-[30px] bg-[url(/src/assets/images/home/integration-bg.webp)] bg-no-repeat bg-cover bg-center`}
    >
      <div className={"container"}>
        <div
          className={
            "xl:p-[44px] lg:p-[30px] md:p-[25px] p-5  flex flex-col gap-8  bg-black/[57%] max-w-[858px] mx-auto rounded-xl backdrop-blur"
          }
        >
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
            className={
              "lg:text-[33px] lg:leading-[45px] md:text-[30px] md:leading-[30px] text-xl leading-[28px] xl:text-[42px] xl:leading-[51px] font-semibold text-center text-color-light"
            }
          >
            {t("Ilm va tijorat integratsiyasi")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className={
              "xl:text-xl lg:text-lg text-[14px] text-color-light text-center font-medium"
            }
          >
            {t(
              "Biz, Quyosh sayyoradagi eng arzon energiya manbai ekanligiga ishonamiz. Quyosh energiyasidan foydalanib hayotimizni osonlashtira olamiz. Biz qayta tiklanuvchi energiya tizimlarini, shuningdek,elektromobillarni zaryadlash stansiyalarini yuqori sifatli o’rnatish va texnik xizmat ko’rsatishni ta’minlay olamiz."
            )}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
