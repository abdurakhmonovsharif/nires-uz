import { useEffect, useState } from "react";
import { cn, useGetContact } from "@/libs";
import "./header.css";
import { HeaderNav } from "@/layout/header/headerHav";
import { LogoWhite } from "@/assets/svg/logo";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { MenuIcon } from "@/assets/svg/menu";
import { LanguageDropdown } from "@/layout/header/languageDropdown";
import { useAppStore } from "@/store";

type TProps = {
  toggleDrawer: () => void;
};

export const Header = ({ toggleDrawer }: TProps) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { t } = useTranslation("main");
  const { data: contactResponse } = useGetContact();
  const { isTestMode } = useAppStore();

  const isSticky = () => {
    const scrollTop = window.scrollY;
    if (scrollTop >= 150) setScrollTop(true);
    if (scrollTop == 0) setScrollTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  return (
    <header
      className={cn(
        "z-[1000] bg-[linear-gradient(294.77deg,#3F9CFB_10.58%,#39D88E_146.85%)] px-1 py-3 sm:py-5 sm:px-2  xl:pr-[18px] lg:pr-[16px] pr-[10px]",
        {
          "sticky top-0 scrolled": scrollTop,
          "top-6 mt-6": isTestMode,
        },
      )}
    >
      <div className={"flex items-center justify-between"}>
        <Link
          to={"/"}
          className={"xl:w-auto md:w-[280px] max-md:max-w-[220px] w-full"}
        >
          <img
            src={LogoWhite}
            alt="logo"
            className={"object-contain w-full h-[40px]"}
          />
        </Link>
        <div className={"hidden xl:block"}>
          <HeaderNav />
        </div>
        <div className={"flex items-center gap-3 md:gap-6 pl-2 "}>
          <div className={"px-3 hidden xl:block"}>
            <LanguageDropdown variant={"ghost"} />
          </div>

          <div
            className={
              "flex items-start text-nowrap text-[12px] md:text-base lg:text-base text-color-light"
            }
          >
            <a href="tel:+998712350377" className={"font-bold  "}>
              <p className={"leading-[22px]"}>{t("Qo’ng’iroq qilish")}</p>
              <span className={"hidden lg:block"}>
                {contactResponse?.phone}
              </span>
            </a>
          </div>
          <button
            onClick={toggleDrawer}
            className={"xl:hidden block w-[20px] h-[20px]"}
          >
            <img src={MenuIcon} alt={"#"} />
          </button>
        </div>
      </div>
    </header>
  );
};
