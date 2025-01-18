import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { CircularProgress } from "@nextui-org/progress";

interface Props {
  loading: boolean;
}

export const ButtonProgress = ({ loading }: Props) => {
  return (
    <Popover isOpen={loading} placement="top" backdrop="blur">
      <PopoverTrigger>
        <label></label>
      </PopoverTrigger>
      <PopoverContent>
        <CircularProgress />
      </PopoverContent>
    </Popover>
  );
};
