import { IoMenuOutline } from "react-icons/io5";
import { Button } from "antd";

export const Buttons = () => {
  return (
    <Button
      icon={<IoMenuOutline style={{ verticalAlign: "middle" }} />}
      type="link"
      size="small"
    >
      Ko'rish
    </Button>
  );
};
