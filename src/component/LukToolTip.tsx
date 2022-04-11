import { Tooltip } from "@mantine/core";
import { AiOutlineInfoCircle } from "react-icons/ai";

export const LukToolTip = (text: string) => (
    <Tooltip label={text} position="top" placement="end">
      <AiOutlineInfoCircle></AiOutlineInfoCircle>
    </Tooltip>
  );