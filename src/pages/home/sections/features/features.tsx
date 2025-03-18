import { motion } from "framer-motion";
import { Box } from "@/components";
import { CarCharger, MeteoStation, MobileStation } from "@/assets";
import { useTranslation } from "react-i18next";

export const Features = () => {
  const { t } = useTranslation("features");
  return (
    <section id={"types"} className={"py-[80px]"}>
      <div className={"container"}>
        <motion.h2
          initial={{ opacity: 0, y: -100 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
          className={
            "lg:text-[33px] lg:leading-[45px] md:text-[30px] md:leading-[30px] text-2xl xl:text-[42px] xl:leading-[51px]  font-semibold text-center"
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
            "xl:text-base lg:text-[14px] text-secondary mt-6 text-center"
          }
        >
          {t(
            "Biz, Quyosh sayyoradagi eng arzon energiya manbai ekanligiga ishonamiz. Quyosh energiyasidan foydalanib hayotimizni osonlashtira olamiz. Biz qayta tiklanuvchi energiya tizimlarini, shuningdek,elektromobillarni zaryadlash stansiyalarini yuqori sifatli o’rnatish va texnik xizmat ko’rsatishni ta’minlay olamiz."
          )}
        </motion.p>
        <Box
          $display={"grid"}
          $gap={"32px"}
          className={"xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3"}
          $mt={"32px"}
        >
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: [1.2, 1] }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className={
              "bg-primary-bg border-primary border-solid border rounded-xl p-4 md:p-8 flex flex-col items-start gap-5"
            }
          >
            <MobileStation fontSize={70} color={"#0E6752"} />
            <h4
              className={
                "xl:text-xl lg:text-lg md:text-base text-[14px] font-semibold"
              }
            >
              Mobil stansiya
            </h4>
            <p className={"text-secondary text-sm md:text-base"}>
              {/*{t("mobile_station_desc")}*/}
              We're here to help you with solar panel installation in Devon and
              Cornwall. If we were to sum ourselves up in a few words, those
              would be "reliable, honest and friendly." We find our customers
              agree! We're with you from the start of the project to the finish.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: [1.2, 1] }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className={
              "bg-primary-bg border-primary border-solid border rounded-xl p-4 md:p-8 flex flex-col items-start gap-5"
            }
          >
            <CarCharger fontSize={70} color={"#0E6752"} />
            <h4
              className={
                "xl:text-xl lg:text-lg md:text-base text-[14px]  font-semibold"
              }
            >
              Elektromobillarni quvvatlash
            </h4>
            <p className={"text-secondary text-sm md:text-base"}>
              {/*{t("electric_car_charge_desc")}*/}
              As I'm sure you'll have seen, solar systems don't tend to come
              cheap. Our aim is to make solar power accessible to everyone, so
              we price ourselves in a way that makes solar energy more
              affordable. We're focused on helping you and on helping the
              environment, rather than on turning a profit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, scale: [1.2, 1] }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className={
              "bg-primary-bg border-primary border-solid border rounded-xl p-4 md:p-8 flex flex-col items-start gap-5"
            }
          >
            <MeteoStation fontSize={70} />
            <h4
              className={
                "xl:text-xl lg:text-lg md:text-base text-[14px]  font-semibold"
              }
            >
              Meteostansiya
            </h4>
            <p className={"text-secondary text-sm md:text-base"}>
              {/*{t("weatherstation_desc")}*/}
              As we've said, we do this because we truly care about the planet
              and about seeing people embrace a greener, more eco-friendly
              approach to power. The world of green energy can be jargon-filled
              and opaque, so we want to help educate people on the big and
              little things they can do to protect our planet!
            </p>
          </motion.div>
        </Box>
      </div>
    </section>
  );
};
