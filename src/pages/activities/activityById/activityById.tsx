import { Button, SectionTitle } from "@/components";
import { useAppStore } from "@/store";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import htmr from "htmr";
import { htmrOptions } from "@/constants";
import { useEditorStyle } from "@/styles/editorStyle.ts";
import { useGetActivityById } from "@/libs/services/queries/activtiesQuery.ts";
import { useTranslation } from "react-i18next";
import { BiDownload } from "react-icons/bi";
import { getFile } from "@/utils";

export const ActivityById = () => {
  const { id } = useParams();
  const { data } = useGetActivityById(id);
  const { language } = useAppStore();
  const { styles } = useEditorStyle();
  const { t } = useTranslation("main");

  return (
    <section id={"activity-by-id"} className={"py-[60px]"}>
      <div className="container">
        <SectionTitle
          label={data?.name[language] as string}
          $color={"black"}
          $textAlign="start"
        />

        <div className="mt-10">
          <p className={"text-sm mb-2 text-secondary"}>
            {dayjs(data?.creationDate).format("HH:mm DD.MM.YYYY")}
          </p>

          <div className={styles.editor}>
            {data?.text && htmr(data.text?.[language] || "", htmrOptions)}
          </div>

          <Button
            variant={"fill"}
            className={
              "xl:text-[14px] px-[14px] mt-10 w-max rounded-xl text-color-light tablet:text-[12px] text-[10px]"
            }
            href={getFile(data?.fileUrl)}
            target="_blank"
            label={t("download_file")}
            LeftSvg={<BiDownload fontSize={18} />}
          />
        </div>
      </div>
    </section>
  );
};
