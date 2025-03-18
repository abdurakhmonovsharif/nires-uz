import { englishFlag, russianFlag, uzbekFlag } from "@/assets";
import { useGetServices } from "@/libs";
import { useGetActivites } from "@/libs/services/queries/activtiesQuery.ts";
import { getFile } from "@/utils";
import { useAppStore } from "@/store";

export interface NavItem {
  label: string;
  path: string;
  childDivClassName?: string;
  childNavClassName?: string;
  children?: NavItem[];
}

export const useNavItems = (): NavItem[] => {
  const { services } = useGetServices();
  const { activities, tasks } = useGetActivites();
  const { language } = useAppStore();

  return [
    {
      label: "Institut haqida",
      path: "/about/general",
      childDivClassName: "",
      childNavClassName: "max-w-[244px]",
      children: [
        { label: "Umumiy ma’lumot", path: "/about/general" },
        { label: "Rahbariyat", path: "/about/management" },
        {
          label: "Bo’lim boshliqlari va labaratoriya mudirlari",
          path: "/about/staff",
        },
        {
          label: "Sohaga oid qaror va farmonlar",
          path: "/acts",
          // childNavClassName: "max-w-[354px]",
          // children:
          //     acts?.map((act) => ({
          //         label: act.name?.[language],
          //         path: act.siteUrl,
          //     })) || [],
        },
        {
          label: "Vazifa va funksiya",
          path: "#",
          childNavClassName: "max-w-[354px]",
          children:
            tasks
              ?.sort((a, b) => a.sortOrder - b.sortOrder)
              ?.map((task) => ({
                label: task.name?.[language],
                path:
                  task.fileUrl.startsWith("https://") ||
                  task.fileUrl.startsWith("http://")
                    ? task.fileUrl
                    : getFile(task.fileUrl),
              })) || [],
        },
        {
          label: "Tashkiliy tuzilma",
          path: "/about/structure",
        },
      ],
    },
    {
      label: "Yangiliklar",
      path: "/news/announcements",
      childDivClassName: "flex-row-reverse [&>img]:w-[522px]",
      childNavClassName: "max-w-[312px]",
      children: [
        {
          label: "Foto va video",
          path: "/news/media",
        },
        {
          label: "E’lonlar",
          path: "/news/announcements",
        },
        {
          label: "Bo’sh ish o’rinlari",
          path: "/news/vacancies",
        },
      ],
    },
    {
      label: "Xizmatlar",
      path: ``,
      childDivClassName: "",
      childNavClassName: "max-w-[312px]",
      children:
        services
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          ?.map((service) => ({
            label: service.name?.[language],
            path: service.siteUrl,
          })) || [],
    },
    {
      label: "Faoliyat",
      path: `/activities`,
      childDivClassName: "flex-row-reverse [&>img]:w-[476px]",
      childNavClassName: "max-w-[600px]",
      children:
        activities
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          ?.map((activity) => ({
            label: activity.name?.[language],
            path:
              activity.fileUrl.startsWith("https://") ||
              activity.fileUrl.startsWith("http://")
                ? activity.fileUrl
                : getFile(activity.fileUrl),
          })) || [],
    },

    { label: "Bog’lanish", path: `#contacts` },
  ];
};

export const isActiveLink = (
  pathname: string,
  itemPath: string,
  children?: { path: string }[],
) => {
  if (pathname === itemPath || pathname.startsWith(`${itemPath}/`)) {
    return itemPath;
  }
  if (children) {
    for (const child of children) {
      if (pathname === child.path || pathname.startsWith(child.path)) {
        return itemPath;
      }
    }
  }

  return "";
};

export const languageModalMenu = [
  {
    icon: <img src={uzbekFlag} width={16} height={16} />,
    label: "O'zbek(lotin)",
    key: "uz",
    buttonLabelIcon: uzbekFlag,
  },
  // {
  //   icon: <img src={uzbekFlag} width={16} height={16} />,
  //   label: "Ўзбекча",
  //   key: "kr_uz",
  //   buttonLabelIcon: uzbekFlag,
  // },

  {
    icon: <img src={russianFlag} width={16} height={16} />,
    label: "Русский",
    key: "ru",
    buttonLabelIcon: russianFlag,
  },
  {
    icon: <img src={englishFlag} width={16} height={16} />,
    label: "English",
    key: "en",
    buttonLabelIcon: englishFlag,
  },
];
