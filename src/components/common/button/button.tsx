import { cn } from "@/libs";
import React from "react";
import { styled } from "styled-components";

const StyledButton = styled.button``;

type CommonProps = {
  leftIcon?: string;
  LeftSvg?: React.JSX.Element;
  loadingElement?: React.JSX.Element;
  rightIcon?: string;
  label?: string;
  imageClass?: string;
  fullImg?: string;
  variant?: "outline" | "fill" | "ghost";
  href?: string;
  className: string;
};

type ButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type AnchorProps = CommonProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href?: string;
  };

type IProps = ButtonProps | AnchorProps;

export const Button = ({
  leftIcon,
  rightIcon,
  label,
  className,
  imageClass,
  LeftSvg,
  loadingElement,
  fullImg,
  variant = "ghost",
  href,
  ...props
}: IProps) => {
  return (
    <StyledButton
      as={href ? "a" : "button"}
      href={href}
      className={cn(
        "bg-primary flex gap-1 justify-center text-sm xl:text-base items-center p-[12px_34px] rounded-full",
        {
          "p-[9px]  rounded-[10px] justify-center border border-solid transition-all border-border hover:bg-bkg dark:hover:bg-color-light [&_p]:hover:text-primary bg-transparent [&_p]:text-color-light dark:border-color-light":
            variant == "outline",
        },
        {
          "bg-transparent gap-[10px] p-0 items-center [&_p]:text-secondary font-medium":
            variant == "ghost",
        },
        { "relative p-0 bg-gray overflow-hidden": !!fullImg },
        {
          "hover:bg-primary/80 transition-all": variant == "fill",
        },
        className,
      )}
      {...props}
    >
      {fullImg && (
        <img
          src={fullImg}
          className="absolute z-50 top-0 left-0 wh-full-important"
        />
      )}
      {LeftSvg && LeftSvg}
      {loadingElement && loadingElement}
      {leftIcon && (
        <img
          src={leftIcon}
          alt={"button left icon"}
          width={24}
          height={24}
          className={imageClass}
        />
      )}
      {label && <p className="text-current">{label}</p>}
      {rightIcon && (
        <img src={rightIcon} alt={"button right icon"} className={imageClass} />
      )}
    </StyledButton>
  );
};
