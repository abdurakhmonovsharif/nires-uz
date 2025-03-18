import {Empty, Menu} from "antd";
import IsMenuDrawer from "@/components/common/drawer/Drawer";
import {useNavItems} from "@/layout/header/constants.tsx";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {Logo} from "@/assets/svg/logo";
import {CloseCircleOutlined} from "@ant-design/icons";
import {LanguageDropdown} from "@/layout/header/languageDropdown";

interface PropsMobileMenu {
    drawerVisible: boolean;
    toggleDrawer: () => void;
}

export const MobileMenu = ({drawerVisible, toggleDrawer}: PropsMobileMenu) => {
    const navItems = useNavItems();
    const {t} = useTranslation("main");

    const renderMenuItems = (items: any) =>
        items.map((item: any) => ({
            key: item.path+item.label,
            label: item.path?.includes("#") ? (
                <span
                    className={"text-white"}
                >{t(item.label)}</span>
            ) : (
                <Link
                    to={item.path}
                    className={"!text-white"}
                    target={item.path.includes("http") ? "_blank" : "_self"}
                >
                    {t(item.label)}
                </Link>
            ),
            children: Array.isArray(item.children) ? renderMenuItems(item.children) : item?.children?.length === 0 ?
                [
                    {
                        key: `${item.path}-empty`,
                        label: (
                            <Empty
                                description={t("Ma'lumot topilmadi")}
                                image={Empty.PRESENTED_IMAGE_SIMPLE}
                                className="text-white"
                            />
                        ),
                    },
                ] : undefined,
        }));

    const menuItems = renderMenuItems(navItems);

    return (
        <IsMenuDrawer
            open={drawerVisible}
            toogleSidebar={toggleDrawer}
        >
            <div className="flex items-center justify-between mb-5">
                <div className="w-[180px]">
                    <Link to="/" className="w-full">
                        <img src={Logo} alt="logo" className="object-cover w-full"/>
                    </Link>
                </div>
                <button onClick={toggleDrawer}>
                    <CloseCircleOutlined className="text-white"/>
                </button>
            </div>
            <Menu
                mode="inline"
                items={menuItems}
                className={"bg-transparent"}
            />
            <div className={"pl-5"}>
                <LanguageDropdown variant={"outline"} isDrawer={true}/>
            </div>
        </IsMenuDrawer>
    );
};
