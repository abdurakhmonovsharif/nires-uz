import { H2 } from "@/components/common";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const {
    i18n: { language },
    t,
  } = useTranslation("contact");
  const link =
    language == "uz"
      ? "https://yandex.uz/map-widget/v1/?ll=69.338129%2C41.347582&mode=whatshere&whatshere%5Bpoint%5D=69.335435%2C41.347256&whatshere%5Bzoom%5D=17&z=18.8?lang=uz_UZ"
      : language == "ru"
      ? "https://yandex.uz/map-widget/v1/?ll=69.338129%2C41.347582&mode=whatshere&whatshere%5Bpoint%5D=69.335435%2C41.347256&whatshere%5Bzoom%5D=17&z=17?lang=ru_RU"
      : "https://yandex.uz/map-widget/v1/?ll=69.338129%2C41.347582&mode=whatshere&whatshere%5Bpoint%5D=69.335435%2C41.347256&whatshere%5Bzoom%5D=17&z=17?lang=en_US";

  return (
    <section id="location" className="pb-0">
      <div className="container">
        <H2 className="text-center">{t("visit_store.title")}</H2>
      </div>

      <div className="w-full mt-10 overflow-hidden relative">
        <div style={{ position: "relative", overflow: "hidden" }}>
          <a
            href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 0,
            }}
          >
            Ташкент
          </a>
          <a
            href="https://yandex.uz/maps/10335/tashkent/house/YkAYdQRlTUwCQFprfX91d3VrYQ==/?ll=69.336418%2C41.346610&utm_medium=mapframe&utm_source=maps&z=17.8"
            style={{
              color: "#eee",
              fontSize: 12,
              position: "absolute",
              top: 14,
            }}
          >
            3-я улица Навнихол, 7 — Яндекс Карты
          </a>
          <iframe
            src={link}
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen={true}
            style={{ position: "relative", border: 0 }}
          ></iframe>
        </div>
      </div>
    </section>
  );
};
