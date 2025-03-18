import { useRoutes } from "react-router-dom";
import { createIndexRoute, createRoute } from "./util";
import {
  About,
  AnnouncementById,
  Announcements,
  Contacts,
  Home,
  Management,
  ManagementById,
  Media,
  News,
  Offers,
  Services,
  Structure,
  Vacancies,
  Staff,
  Acts,
  Activities,
  ActivityById,
} from "./loadable";
import { DefaultLayout } from "@/layout";
import { ROUTES } from "@/constants";
import { Public } from "./public";
import { Protected } from "./protected";
import { useAuthStore } from "@/store";
import { TLanguages } from "@/types";

const baseRoutes = (isAuth: boolean | null, language: TLanguages | string) => [
  {
    element: <Public />,
    children: [
      createRoute(`/${language}`, <DefaultLayout />, [
        createIndexRoute(<Home />),
        createRoute(ROUTES.about, null, [
          createRoute(ROUTES.management, <Management />),
          createRoute(ROUTES.staff, <Staff />),
          createRoute(ROUTES.structure, <Structure />),
          createRoute(ROUTES.general, <About />),
          createRoute(`${ROUTES.management}/${ROUTES.id}`, <ManagementById />),
        ]),
        createRoute(ROUTES.services, <Services />),
        createRoute(ROUTES.acts, <Acts />),
        createRoute(ROUTES.activities, null, [
          createIndexRoute(<Activities />),
          createRoute(ROUTES.id, <ActivityById />),
        ]),
        createRoute(ROUTES.offers, <Offers />),
        createRoute(ROUTES.news, null, [
          createIndexRoute(<News />),
          createRoute(ROUTES.vacancies, <Vacancies />),
          createRoute(ROUTES.media, <Media />),
          createRoute(ROUTES.announcements, <Announcements />),
          createRoute(
            `${ROUTES.announcements}/${ROUTES.id}`,
            <AnnouncementById />,
          ),
        ]),
        createRoute(ROUTES.contacts, <Contacts />),
      ]),
    ],
  },
  {
    element: <Protected isAuth={isAuth} />,
    children: [createRoute(ROUTES.cabinet, <DefaultLayout />, [])],
  },
];

export const Router = () => {
  const { isAuth } = useAuthStore();
  const generateLanguageRoutes = (language: TLanguages | string) => [
    {
      children: baseRoutes(isAuth, language),
    },
  ];

  return useRoutes([...generateLanguageRoutes("")]);
};
