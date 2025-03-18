import { contactsList } from "@/layout/footer/constants.tsx";
import { Box, Field, Form } from "@/components";
import { Button, Col,  Flex, Image, Input,  Modal, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import React from "react";
import { useGetContact, useGetSocialMedias, useSendMessage } from "@/libs";
import { useTranslation } from "react-i18next";
import { useAppStore } from "@/store";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
// import { SocialMediaIcon } from "@/assets";
import { getFile } from "@/utils";
// import { FaChevronUp } from "react-icons/fa";

export const Footer = () => {
    const { t } = useTranslation("contact");
    const { language } = useAppStore();
    const [showClear, setShowClear] = useState(false);
    const [openSocialModal, setOpenSocialModal] = useState(false);
    const [anony, setAnony] = useState(false);
    const { data: contactResponse } = useGetContact();
    const { mutate } = useSendMessage();
    const { data: socialMediaData } = useGetSocialMedias()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const onChangeFormFields = (e: any) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };

        setFormData(updatedFormData);

        setShowClear(Object.values(updatedFormData).some((val) => val));
        if (anony) {
            setIsSubmitDisabled(false);
        } else {
            setIsSubmitDisabled(
                !Object.values(updatedFormData).every((val) => val.trim() !== ""),
            );
        }
    };
    const handleSendMessage = () => {
        mutate({ ...formData, isAnonymous: anony });
    };

    const handleClear = () => {
        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
        });
        setShowClear(false);
        setIsSubmitDisabled(true);
    };

    const changeTab = (changeTab: string | undefined) => {
        setAnony(typeof changeTab === "string");
        handleClear();
    };
   

    return (
        <footer id={"contacts"} className="bg-[#283646] pt-[30px] pb-[40px]">
            <Modal onCancel={() => setOpenSocialModal(false)} onClose={() => setOpenSocialModal(false)}
                className={"!z-[9999] [&_.ant-modal-content]:!bg-white"} width={"700px"} open={openSocialModal}
                footer={null}>
                <ul className={"flex flex-col items-center gap-y-2"}>
                    {socialMediaData?.map((item, index) => <li
                        key={index} className={"w-[90%]"}>
                        <span
                            className={"flex items-center gap-x-3 border border-gray-300 rounded-md p-1 transition-all duration-300 ease-out"}>
                            <Image
                                preview={false}
                                className={
                                    "!w-[1em] aspect-[1/1] !h-[1em] object-contain"
                                }
                                src={getFile(item.imageUrl)}
                            />
                            <Link to={item.siteUrl} target={"_blank"}>
                                <span>{item.name}</span>
                            </Link>
                        </span>
                    </li>)}
                </ul>
            </Modal>
            <div className={"container mt-6 flex flex-col md:flex-row"}>
                <div className={"space-y-6 w-full md:w-[30%]"}>
                    <h1 className={"text-white xl:text-3xl text-xl "}>
                        {t("contactUs")}
                    </h1>
                    <ul className={"space-y-2 pl-2"}>
                        {contactsList(language)?.map((contact, index) => (
                            <li
                                key={index}
                                className={"text-white flex items-start gap-x-3 max-w-80"}
                            >
                                <div className={"mt-3"}>{contact.icon}</div>
                                <div>
                                    <span className={"block text-base font-medium"}>
                                        {t(contact.label)}
                                    </span>

                                    <span className={"text-sm text-gray-200"}>
                                        {" "}
                                        {contact.sub_label(
                                            (contactResponse && contactResponse[contact.key]) ||
                                            "No data",
                                        )}
                                    </span>
                                    <Link
                                        target="_blank"
                                        to={"https://yandex.uz/maps/-/CHE0r-~b"}
                                        className={`flex mt-2 items-center p-1 gap-x-2 text-base w-fit rounded-md  duration-300 border ${contact.key.includes("address") ? "block" : "hidden"
                                            }`}
                                    >
                                        <span className="text-white hover:text-primary transition-all duration-300">
                                            Xaritadan ko'rish
                                        </span>
                                        <MdOutlineArrowOutward />
                                    </Link>
                                </div>
                            </li>
                        ))}
                        {/* <li
                        >
                            <Dropdown className={"!bg-transparent hover:!bg-transparent hover:!border-primary !p-1"}
                                overlay={socialMediaMenu} trigger={['click']}>
                                <Button className="flex items-center  gap-x-2">
                                    <img
                                        className="!w-[1.3em] !h-[1.3em]"
                                        src={SocialMediaIcon}
                                        alt="icon"
                                    />
                                    <span className="font-medium text-base text-white">Ijtimoiy tarmoqlar</span>
                                    <FaChevronUp className={"text-white"} />
                                </Button>
                            </Dropdown>
                        </li> */}
                    </ul>
                </div>
                <div className={"w-full md:w-[70%] mt-5"}>
                    <div
                        className={
                            "flex items-center gap-x-2 justify-between px-3 xl:text-3xl text-xl "
                        }
                    >
                        <button
                            onClick={() => changeTab(undefined)}
                            className={`cursor-pointer  ${!anony ? "text-primary" : "text-white"
                                }`}
                        >
                            {t("Bog'lanish")}
                        </button>
                        <button
                            onClick={() => changeTab("anony")}
                            className={`cursor-pointer   ${anony ? "text-primary" : "text-white"
                                }`}
                        >
                            {t("Anonim bog'lanish")}
                        </button>
                    </div>

                    <Form className={"p-2 mt-5"}>
                        {anony ? (
                            <Row className={"mt-5"}>
                                <Col span={24}>
                                    <TextArea
                                        rows={4}
                                        className={"rounded-none"}
                                        placeholder={t("your_message")}
                                        name="message"
                                        value={formData.message}
                                        onChange={onChangeFormFields}
                                        required
                                    />
                                </Col>
                            </Row>
                        ) : (
                            <React.Fragment>
                                <div className="flex lg:gap-x-2  lg:flex-row flex-col gap-y-2 ">
                                    <Input
                                        className={"rounded-none"}
                                        placeholder={t("firstName")}
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={onChangeFormFields}
                                        required
                                    />
                                    <Input
                                        className={"rounded-none"}
                                        placeholder={t("lastName")}
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={onChangeFormFields}
                                        required
                                    />
                                </div>
                                <br />
                                <div className="flex lg:gap-x-2  lg:flex-row flex-col gap-y-2">
                                    <Input
                                        className={"rounded-none"}
                                        placeholder={t("emailAddress")}
                                        name="email"
                                        value={formData.email}
                                        onChange={onChangeFormFields}
                                        required
                                    />
                                    <Input
                                        className={"rounded-none"}
                                        placeholder={t("phone")}
                                        name="phone"
                                        value={formData.phone}
                                        onChange={onChangeFormFields}
                                        required
                                    />
                                </div>
                                <Row className={"mt-5"}>
                                    <Col span={24}>
                                        <TextArea
                                            rows={4}
                                            className={"rounded-none"}
                                            placeholder={t("your_message")}
                                            name="message"
                                            value={formData.message}
                                            onChange={onChangeFormFields}
                                            required
                                        />
                                    </Col>
                                </Row>
                            </React.Fragment>
                        )}

                        <Field
                            span={24}
                            wrapperCol={{
                                span: 24,
                                style: { justifyTracks: "end", marginTop: 16 },
                            }}
                        >
                            <Flex justify="flex-end" gap={"small"}>
                                <Button
                                    htmlType="reset"
                                    ghost
                                    type="primary"
                                    icon={<CloseCircleOutlined />}
                                    size="large"
                                    hidden={!showClear}
                                    onClick={handleClear}
                                >
                                    Tozalash
                                </Button>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    icon={<CheckCircleOutlined />}
                                    size="large"
                                    onClick={handleSendMessage}
                                    disabled={isSubmitDisabled}
                                >
                                    {t("send")}
                                </Button>
                            </Flex>
                        </Field>
                    </Form>
                    <div className={"flex items-center gap-x-4"}>
                        <Box $gap="8px">
                            <a href="https://info.flagcounter.com/DM3e">
                                <img
                                    src="https://s01.flagcounter.com/count/DM3e/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_10/viewers_3/labels_1/pageviews_0/flags_0/percent_0/"
                                    alt="Flag Counter"
                                />
                            </a>
                        </Box>
                        <div className="grid grid-cols-3">
                            <ul className={"flex flex-col items-center gap-y-2"}>
                                {socialMediaData?.slice(0,3)?.map((item, index) => <li
                                    key={index} className="w-full">
                                    <Link to={item.siteUrl} className="hover:text-primary w-full text-sm text-end flex items-center px-1 py-1 rounded-md gap-x-2 text-white border">
                                        <div className="w-[20px] h-[20px]">
                                            <img src={getFile(item.imageUrl)} className="object-cover !w-full !h-full" />
                                        </div>
                                        {item.name}
                                        
                                    </Link>

                                </li>)}
                            </ul> 
                            <ul className={"flex flex-col items-center gap-y-2"}>
                                {socialMediaData?.slice(3,6)?.map((item, index) => <li
                                    key={index} className="w-full">
                                    <Link to={item.siteUrl} className="hover:text-primary w-full text-sm text-end flex items-center px-1 py-1 rounded-md gap-x-2 text-white border">
                                        <div className="w-[20px] h-[20px]">
                                            <img src={getFile(item.imageUrl)} className="object-cover !w-full !h-full" />
                                        </div>
                                        {item.name}
                                        
                                    </Link>

                                </li>)}
                            </ul>
                            <ul className={"flex flex-col items-center gap-y-2"}>
                                {socialMediaData?.slice(6,9)?.map((item, index) => <li
                                    key={index} className="w-full">
                                    <Link to={item.siteUrl} className="hover:text-primary w-full text-sm text-end flex items-center px-1 py-1 rounded-md gap-x-2 text-white border">
                                        <div className="w-[20px] h-[20px]">
                                            <img src={getFile(item.imageUrl)} className="object-cover !w-full !h-full" />
                                        </div>
                                        {item.name}
                                        
                                    </Link>
                                </li>)}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
};
