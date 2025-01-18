import { Popover, PopoverTrigger, PopoverContent } from "@heroui/popover";
import { CardVerifiedEmail } from "./components/CardVerifiedEmail.tsx";
import { CircularProgress } from "@nextui-org/progress";

interface Props {
  username: string;
  isVerifiedEmail: boolean;
}

export const VerifiedEmail = ({ username, isVerifiedEmail }: Props) => {
  return (
    <div className="absolute left-[50%] top-[20%]">
      <Popover isOpen={isVerifiedEmail} placement="top" backdrop="blur">
        <PopoverTrigger>
          <label></label>
        </PopoverTrigger>
        <PopoverContent>
          {username ? (
            <CardVerifiedEmail username={username} />
          ) : (
            <CircularProgress />
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
};
