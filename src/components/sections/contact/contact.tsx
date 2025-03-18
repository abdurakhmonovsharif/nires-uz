import {Box, Field, XL} from "@/components";
import {useMediaQuery} from "@/hooks";
import {Button, Form, Row} from "antd";
import {useTheme} from "antd-style";
import {useTranslation} from "react-i18next";
import {SectionTitle} from "@/components";
import emailjs from 'emailjs-com';
import {useRef} from 'react';
import {errorMessage, successMessage} from "@/utils";

export const Contacts = () => {
    const {t} = useTranslation("contact");
    const {colorTextSecondary, colorPrimaryBg} = useTheme();
    const {tabletXs, mobileLg} = useMediaQuery();

    const styleInput: React.CSSProperties = {
        fontSize: mobileLg ? 14 : 16,
        fontWeight: mobileLg ? 400 : 500,
        padding: "12px 16px",
        height: 48,
    };

    const formRef = useRef(null);

    const sendEmail = (value: { first_name: string, last_name: string, email: string, message: string }) => {
        const {first_name, last_name, email, message} = value;
        const templateParams = {
            name: first_name + " " + last_name,
            message,
            email,
        };

        emailjs
            .send('service_7te1ivq', 'template_a5vnvwp', templateParams, 'CZ6T4EN47pg8_GFkW')
            .then(() => {
                successMessage('Email sent successfully!');
            }, (error) => {
                errorMessage('Failed to send email. Please try again later.');
                console.log(error.text);
            });
    };


    return (
        <Box
            as="section"
            $m={tabletXs ? "64px 0" : "120px 0"}
            id="contact"
            $direction="column"
            className="font-inter"
            $gap="16px"
        >
            <Box
                className="container"
                $width="100%"
                $justify="center"
                $align="center"
                style={{background: colorPrimaryBg, borderRadius: 24}}
                $p={tabletXs ? "16px" : "64px 16px"}
            >
                <Box $maxWidth="624px" $width="100%" $direction="column">
                    <SectionTitle
                        $textAlign="start"
                        $mb={mobileLg ? "0" : "8px"}
                        label={t("contactUs")}
                    />
                    <XL
                        $color={colorTextSecondary}
                        $fw={mobileLg ? 400 : 600}
                        $fs={mobileLg ? "14px" : "20px"}
                        $lineHeigt={mobileLg ? "22px" : "28px"}
                    >
                        {t("suggestionsOrIssues")}
                    </XL>
                    <Form
                        layout="vertical"
                        style={{marginTop: 24}}
                        ref={formRef}
                        onFinish={sendEmail}
                    >
                        <Row gutter={32}>
                            <Field
                                label={t("firstName")}
                                inputProps={{style: styleInput}}
                                name={"first_name"}
                                placeholder={t("enterFirstName")}
                                colProps={{md: {span: 12}}}
                                span={24}
                            />
                            <Field
                                label={t("lastName")}
                                inputProps={{style: styleInput}}
                                name={"last_name"}
                                placeholder={t("enterLastName")}
                                colProps={{md: {span: 12}}}
                                span={24}
                            />
                        </Row>
                        <Field
                            label={t("emailAddress")}
                            inputProps={{style: styleInput}}
                            name={"email"}
                            placeholder={t("enterEmail")}
                            span={24}
                        />
                        <Field
                            label={t("message")}
                            name={"message"}
                            textarea
                            placeholder={t("enterMessage")}
                            span={24}
                            textareaProps={{
                                rows: 5,
                                style: {...styleInput, height: "auto"},
                            }}
                        />
                        <Button
                            style={{height: mobileLg ? 54 : 62, fontSize: 20}}
                            block
                            type="primary"
                            size="large"
                            htmlType="submit"
                        >
                            {t("send")}
                        </Button>
                    </Form>
                </Box>
            </Box>
        </Box>
    );
};
