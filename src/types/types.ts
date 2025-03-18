import {
  ColProps,
  InputNumberProps,
  InputProps,
  RadioProps,
  SelectProps,
} from "antd";
import { FormItemProps, FormProps, Rule } from "antd/es/form";
import { InputRef, TextAreaProps } from "antd/es/input";
import { LegacyRef, ReactNode } from "react";

export type TOption = {
  label: string;
  value: string;
};

export type TFieldProps = {
  span?: number;
  rule?: Rule[];
  textarea?: boolean;
  textareaProps?: TextAreaProps;
  isRequired?: boolean;
  children?: ReactNode;
  isInputNumber?: boolean;
  numberProps?: InputNumberProps;
  isInputPass?: boolean;
  selectProps?: SelectProps;
  isSelect?: boolean;
  isRadio?: boolean;
  radioProps?: RadioProps;
  colProps?: ColProps;
  inputProps?: InputProps;
  ref?: LegacyRef<InputRef> | undefined;
} & Partial<FormItemProps & InputProps>;

export type TAntFormProps = {
  loading?: boolean;
  save?: boolean;
  children?: ReactNode;
  onCancel?: () => void;
} & FormProps;

export type TError = { error: string; message: string; statusCode: number };

export type TPasswordVerification = {
  password: string;
  isLengthValid: boolean;
  hasNumber: boolean;
  hasLowerCase: boolean;
  hasUpperCase: boolean;
  hasSpecialChar: boolean;
};

export type TContact = {
  address: string;
  addressRus: string;
  question: string;
  emailForContract: string;
  email: string;
  phone: string;
  fax: string;
  bus: string;
};

export type TMessage = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  isAnonymous: boolean;
};
