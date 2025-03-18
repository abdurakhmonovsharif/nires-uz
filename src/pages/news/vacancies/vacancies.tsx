import { AntTable, H5, SectionTitle } from "@/components";
import { useGetVacancies } from "@/libs";
import { columns } from "./constants.tsx";
import {useTranslation} from "react-i18next";
import {useAppStore} from "@/store";

export const Vacancies = () => {
  const { data, isPending } = useGetVacancies();
  const {t}=useTranslation("main")
  const {language}=useAppStore()
  return (
    <section id={"announcements"} className={"py-[60px]"}>
      <div className="container max-w-[1400px]">
        <SectionTitle
          label={t("Bo'sh ish o'rinlari")}
          $color={"black"}
          $textAlign="start"
        />

        <H5 $mb={"10px"} $textAlign={"center"} $mt={"40px"}>
          {t("Vakant lavozimlar")}
        </H5>

        <AntTable
          loading={isPending}
          dataSource={data}
          columns={columns(t,language)}
          rowKey={(record) => record.id}
          withoutPagination={true}
        />
      </div>
    </section>
  );
};
