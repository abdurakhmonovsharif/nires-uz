import { H3 } from "@/components";
import { useMediaQuery } from "@/hooks";
import { TTextProps } from "@/types";

type TProps = {
  label: string;
} & TTextProps;

export const SectionTitle = ({ label, $textAlign, ...props }: TProps) => {
  const { mobileLg } = useMediaQuery();

  return (
    <H3
      $fs={mobileLg ? "24px" : "40px"}
      style={{ width: mobileLg ? "100%" : "auto" }}
      $textAlign={$textAlign || (mobileLg ? "center" : "left")}
      $lineHeigt={mobileLg ? "32px" : "44px"}
      {...props}
    >
      {label}
    </H3>
  );
};
