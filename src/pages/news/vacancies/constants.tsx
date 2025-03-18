import {ColumnsType, TLanguage, TLanguages} from "@/types";
import {Tag} from "antd";
import {TFunction} from "i18next";

export const columns = (t: TFunction, language: TLanguages): ColumnsType<any> => [
    {
        title: t("Lavozimi"),
        dataIndex: "title",
        ellipsis: true,
        width: "16%",
        render: (title: TLanguage) => title?.[language as keyof TLanguage]
    },
    {
        title: t("Izohi"),
        dataIndex: "description",
        ellipsis: true,
        width: "20%",
        render: (desc: TLanguage) => desc?.[language as keyof TLanguage]
    },
    {
        title: t("Daraja"),
        dataIndex: "level",
        ellipsis: true,
        width: "10%",
        render: (level: TLanguage) => level?.[language as keyof TLanguage]
    },
    {
        title: t("Ko'nikmalar"),
        dataIndex: "skills",
        ellipsis: true,
        render: (skills: TLanguage[]) => (
            <div className={"flex flex-wrap gap-y-2"}>
                {(skills)?.map((item, idx) => (
                    <Tag color="green" key={idx}>
                        {item?.[language]}
                    </Tag>
                ))}
            </div>
        ),
    },
    {
        title: t("Malakaviy Talablar"),
        dataIndex: "requirements",
        ellipsis: true,
        render: (skills: TLanguage[]) => (
            <ul className={"flex flex-wrap gap-y-2 list-disc"}>
                {(skills)?.map((item, idx) => (
                    <li color="green" className={"text-xs"} key={idx}>
                        {item?.[language]}
                    </li>
                ))}
            </ul>
        ),
    },
];
