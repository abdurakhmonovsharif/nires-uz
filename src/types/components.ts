import { CardProps, TableProps } from "antd";
import type { Dispatch, PropsWithChildren, SetStateAction } from "react";
import { TReqParams } from "@/types/requests.ts";

export type TBaseProps = {
  $font?: string;
  $m?: string;
  $mb?: string;
  $mt?: string;
  $p?: string;
  $notSansSerif?: boolean;
};

export type TIconProps = {
  isOpen?: boolean;
} & React.HTMLAttributes<SVGElement>;

export interface IAntTableProps extends TableProps {
  setParams?: Dispatch<SetStateAction<TReqParams>>;
  draggable?: boolean;
  onDrag?: (dataSource?: readonly any[]) => void;
  withoutPagination?: boolean;
}

export type TBoxProps = {
  $display?: string;
  $align?: string;
  $direction?: string;
  $justify?: string;
  $gap?: string;
  $height?: string;
  $width?: string;
  $maxWidth?: string;
  $minWidth?: string;
  $pos?: string;
  $bg?: string;
  $gridCols?: string;
  $zIndex?: string;
  $rounded?: string;
  $childrenLabels?: string;
} & TBaseProps;

export type TTextProps = {
  $opacity?: string;
  $color?: string;
  $lineHeigt?: string;
  $m?: string;
  $mb?: string;
  $mt?: string;
  $p?: string;
  $fs?: string;
  $fw?: string;
  $textAlign?: string;
} & TBaseProps;

export type TCardProps = {
  $rounded?: string;
  $overflow?: string;
  $hoverBorderColor?: string;
  $isHover?: boolean;
  $cursor?: string;
} & TBaseProps &
  CardProps;

export type TDynamicObject<T> = {
  [key: string]: T;
};

export type TSeoProps = {
  metaTitle?: string;
  metaDescription?: string;
  metaKeyword?: string;
  ogImage?: string;
  home?: string;
  faviconPath?: string;
  locale?: string;
  ogType?: string;
  ogURL?: string;
  ogSiteName?: string;
  alternates?: {
    href: string;
    hrefLang: string;
  }[];
  hasChat?: boolean;
} & PropsWithChildren;

export type LanguageDropdownProps = {
  customBtn?: React.ReactNode;
  isDrawer?: boolean
  variant?: "outline" | "fill" | "ghost";
}