import { ReactNode } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const IsMenuDrawer = ({
  children,
  open,
  toogleSidebar,
}: {
  children: ReactNode | never;
  open: boolean;
  toogleSidebar: () => void;
}) => {
  return (
    <Drawer
      open={open}
      onClose={toogleSidebar}
      size={"290px"}
      direction="right"
      className={"relative !z-[1002]"}
    >
      <aside className="max-w-[290px] relative !z-[1002] bg-primary h-screen overflow-y-auto p-2.5 dark:bg-default-50 border-r dark:border-default-100">
        {children}
      </aside>
    </Drawer>
  );
};
export default IsMenuDrawer;
