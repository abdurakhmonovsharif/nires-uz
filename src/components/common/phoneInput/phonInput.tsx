import { MaskedInput } from "antd-mask-input";
import usePhoneInputStyles from "./style";
import { TFieldProps } from "@/types";
import { Field } from "../field";
import { useTranslation } from "react-i18next";

export const PhoneInput = ({ required, ...props }: TFieldProps) => {
  const { styles } = usePhoneInputStyles();
  const { t } = useTranslation("auth");
  return (
    <Field
      name="phone"
      label={t("login.phoneNumberLabel")}
      getValueFromEvent={(event) => `998${event.unmaskedValue}`}
      rules={[{ required: true }]}
      required={required}
      span={24}
      {...props}
    >
      <MaskedInput
        mask="+998 00 000 00 00"
        name="maskedPhone"
        required={required}
        placeholder="+998 99 876 54 32"
        className={styles.input}
      />
    </Field>
  );
};
