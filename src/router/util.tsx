import loadable from "@loadable/component";
import { ComponentType, ReactNode } from "react";
import { RouteObject } from "react-router-dom";
import { Loading } from "@/components";

type PagesModule = {
  [key: string]: ComponentType;
};

export type AuthProps = {
  isAuth: boolean | null;
};

const handleCatchChunkError = () => {
  window.location.reload();

  return { default: Loading };
};

export const getLoadablePage = (pageName: string): ComponentType =>
  loadable(
    () =>
      import("../pages")
        .then((module: PagesModule) => ({ default: module[pageName] }))
        .catch(handleCatchChunkError),
    {
      fallback: <Loading betweenPages />,
    }
  );

export const createRoute = (
  path: string,
  element: ReactNode,
  children?: RouteObject[]
): RouteObject => ({
  path,
  element,
  children,
});

export const createConditionalRoute = (
  condition: boolean | undefined,
  path: string,
  Component: ReactNode,
  children?: RouteObject[],
  Fallback?: JSX.Element
) => {
  return condition
    ? createRoute(path, Component, children)
    : createRoute(path, Fallback, children);
};

export const createIndexRoute = (element: ReactNode): RouteObject => ({
  index: true,
  element,
});

export const createConditionalIndexRoute = (
  condition: boolean | undefined,
  Component: JSX.Element,
  Fallback?: JSX.Element
) => {
  return condition ? createIndexRoute(Component) : createIndexRoute(Fallback);
};
