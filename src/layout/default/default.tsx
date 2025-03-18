import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/layout";
import { useEffect, useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
import { useAppStore } from "@/store";
import Marquee from "react-fast-marquee";
import { useGetMarquees } from "@/libs";
import { MobileMenu } from "@/layout/header/mobileMenu";

export const DefaultLayout = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const { data: marqueData } = useGetMarquees();
  const { language } = useAppStore();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer = () => setDrawerVisible((prev) => !prev);
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleResize);
    return () => {
      window.removeEventListener("scroll", handleResize);
    };
  }, []);

  return (
    <>
      {marqueData?.map(
        (item) =>
          item.isTestMode && (
            <Marquee
              className={
                "text-base w-full hidden font-semibold bg-[linear-gradient(294.77deg,#3F9CFB_10.58%,#39D88E_146.85%)] text-white !fixed top-0 z-[1001]"
              }
            >
              <p className={"text-[rgb(255,255,0)] w-full"}>
                {item.text[language]}
              </p>
            </Marquee>
          ),
      )}
      <MobileMenu drawerVisible={drawerVisible} toggleDrawer={toggleDrawer} />
      <Header toggleDrawer={toggleDrawer} />
      {/*<FloatButton.BackTop   icon={<BsArrowUpCircleFill />}/>*/}
      <button
        onClick={toTop}
        hidden={windowHeight === 0}
        className={"fixed bottom-5 right-5 z-50 bg-white rounded-full"}
      >
        <BsArrowUpCircleFill className={"text-6xl text-primary"} />
      </button>
      <main className="flex flex-col max-sm:overflow-x-hidden">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
