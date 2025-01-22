import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  form: ReactNode;
  direction: any;
}

export const ModalOptionCompany = ({ children, form, direction }: Props) => {
  return (
    <Popover offset={20} backdrop="blur" placement={direction}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>{form}</PopoverContent>
    </Popover>
  );
};
