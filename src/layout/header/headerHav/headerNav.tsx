import { isActiveLink, useNavItems } from "@/layout/header/constants";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/libs";
import { useTranslation } from "react-i18next";
import { TBoxProps } from "@/types";
import { Box } from "@/components";
import { IoMdArrowDropdown } from "react-icons/io";
import { Empty } from "antd";
import { useState } from "react";
import { scrollToSection } from "@/utils/scrollToSection.ts";

type TProps = {
  isDrawer?: boolean;
  onClose?: () => void;
} & TBoxProps;

export const HeaderNav = ({ onClose, ...props }: TProps) => {
  const { t } = useTranslation("main");
  const { pathname } = useLocation();
  const navItems = useNavItems();
  const [hoveredIndexes, setHoveredIndexes] = useState<
    Record<number, number | null>
  >({});

  const handleMouseEnter = (parentIndex: number, childIndex: number | null) => {
    setHoveredIndexes((prev) => ({ ...prev, [parentIndex]: childIndex }));
  };

  const handleMouseLeave = (parentIndex: number) => {
    setHoveredIndexes((prev) => ({ ...prev, [parentIndex]: null }));
  };

  const renderChildNavItems = (
    children: typeof navItems,
    parentIndex: number,
    isSubmenu = false,
    childNavClassName?: string,
  ) => {
    return (
      <ul
        className={cn(
          "bg-[linear-gradient(294.77deg,#3F9CFB_10.58%,#39D88E_146.85%)] z-[1000] p-5 absolute translate-y-10 group-hover/item:translate-y-0 top-full w-max opacity-0 invisible group-hover/item:visible group-hover/item:opacity-100 transition-all flex flex-col -translate-x-1/2 left-1/2",
          { "translate-x-0 left-2": isSubmenu },
          childNavClassName,
        )}
      >
        {children.length === 0 ? (
          <li className="flex justify-center items-center p-5 [&_.ant-empty-description]:!text-color-light">
            <Empty description={t("Ma'lumot topilmadi")} />
          </li>
        ) : (
          children.map((child, idx) => {
            const isChildActive = isActiveLink(pathname, child.path);
            const isHovered = hoveredIndexes[parentIndex] === idx;

            return (
              <li
                key={idx}
                className={cn("relative group/child")}
                onMouseEnter={() => handleMouseEnter(parentIndex, idx)}
                onMouseLeave={() => handleMouseLeave(parentIndex)}
              >
                <Link
                  target={child.path.includes("http") ? "_blank" : "_self"}
                  onClick={onClose}
                  className={cn(
                    "py-1.5 my-0.5 rounded text-lg leading-[19px] font-normal border-b border-dashed border-[rgba(0,255,227,1)] text-color-light flex items-center justify-between",
                    {
                      "bg-lime-200/30 text-color-light": isChildActive,
                      "bg-lime-200/20": isHovered,
                    },
                  )}
                  to={child.path}
                >
                  {t(`${child.label}`)}
                  {child.children && (
                    <IoMdArrowDropdown className="ml-2 group-hover/child:-rotate-90 transition-all min-w-4" />
                  )}
                </Link>
                {child.children && (
                  <div
                    className={cn(
                      "bg-primary/85 max-w-[500px] z-50 absolute left-full -top-2 w-max opacity-0 invisible group-hover/child:visible group-hover/child:opacity-100 transition-all flex flex-col gap-2.5",
                      isHovered ? "opacity-100 visible" : "",
                    )}
                  >
                    {renderChildNavItems(
                      child.children,
                      idx,
                      true,
                      child.childNavClassName,
                    )}
                  </div>
                )}
              </li>
            );
          })
        )}
      </ul>
    );
  };

  return (
    <nav className="flex-1 max-w-[860px]">
      <Box as={"ul"} className="justify-between flex w-full" {...props}>
        {navItems.map((item, idx) => {
          const isParentActive = isActiveLink(
            pathname,
            item.path,
            item.children,
          );
          return (
            <li
              key={idx}
              onClick={() => scrollToSection(item.path)}
              className={cn("group/item relative")}
              onMouseLeave={() => handleMouseLeave(idx)}
            >
              <Link
                target={item.path.includes("https") ? "_blank" : "_self"}
                to={item.path}
                onClick={!item.children ? onClose : undefined}
                className={cn("text-base 2xl:text-xl nav__link text-nowrap", {
                  active: isParentActive,
                })}
              >
                {t(`${item.label}`)}
              </Link>
              {item.children &&
                renderChildNavItems(
                  item.children,
                  idx,
                  false,
                  item.childNavClassName,
                )}
            </li>
          );
        })}
      </Box>
    </nav>
  );
};
