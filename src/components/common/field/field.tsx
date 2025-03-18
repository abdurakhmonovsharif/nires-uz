import { Form, Col, Input, InputNumber, Select, Radio } from "antd";
import { FC } from "react";
import { TFieldProps } from "@/types";

const style: React.CSSProperties = { fontSize: 14, padding: "9px 12px" };

export const Field: FC<TFieldProps> = ({
  span,
  textarea,
  textareaProps,
  rule,
  isRequired = false,
  isInputNumber,
  isInputPass,
  children,
  isSelect,
  selectProps,
  isRadio,
  radioProps,
  label,
  noStyle,
  numberProps,
  inputProps,
  ref,
  isListField,
  valuePropName,
  colProps,
  getValueFromEvent,
  ...props
}) => {
  const rulesArray = Array.isArray(rule) && rule.length ? rule : [];

  const numberFormatter = (value: string) => {
    if (!value) return "";
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  const numberParser = (value: string) => {
    return value.replace(/\s/g, "");
  };

  const formItem = (
    <Form.Item
      rules={[
        {
          required: isRequired,
          message: isInputNumber ? "Это поле должно быть числом!" : "",
        },
        ...rulesArray,
      ]}
      label={label}
      labelCol={{ flex: "1" }}
      noStyle={noStyle}
      wrapperCol={{ flex: "1" }}
      isListField={isListField}
      valuePropName={valuePropName}
      normalize={
        props.name == "amount" || props.name == "price"
          ? (value) => numberFormatter(value)
          : undefined
      }
      getValueFromEvent={
        props.name == "amount" || props.name == "price"
          ? (e) => numberParser(e.target.value)
          : getValueFromEvent
      }
      {...props}
    >
      {textarea ? (
        <Input.TextArea
          rows={3}
          placeholder={props.placeholder}
          style={style}
          {...textareaProps}
        />
      ) : isInputPass ? (
        <Input.Password {...props} style={style} aria-autocomplete="list" />
      ) : isInputNumber ? (
        <InputNumber style={{ fontSize: 14 }} {...numberProps} />
      ) : isSelect ? (
        <Select {...selectProps} virtual={false} />
      ) : isRadio ? (
        <Radio {...radioProps} />
      ) : children ? (
        children
      ) : (
        <Input {...props} style={style} {...inputProps} ref={ref} />
      )}
    </Form.Item>
  );

  return noStyle ? (
    formItem
  ) : (
    <Col span={span || 12} {...colProps}>
      {formItem}
    </Col>
  );
};
