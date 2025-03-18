import { TAntFormProps } from "@/types";
import { Button, Flex, Form as AntForm } from "antd";
import { Field } from "@/components";
import { useIsMutating } from "@tanstack/react-query";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

export const Form = ({ children, save, ...props }: TAntFormProps) => {
  const isMutating = useIsMutating();
  const { t } = useTranslation("main");
  return (
    <AntForm layout="vertical" {...props}>
      {children}

      {save && (
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
            >
              {t("cancel")}
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              icon={<CheckCircleOutlined />}
              loading={!!isMutating}
              size="large"
            >
              {t("save")}
            </Button>
          </Flex>
        </Field>
      )}
    </AntForm>
  );
};
