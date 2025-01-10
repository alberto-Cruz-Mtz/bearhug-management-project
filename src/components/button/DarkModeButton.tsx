import { Button } from "@nextui-org/button";
import { MoonIcon, SunIcon } from "./IconButton.tsx";
import useDarkMode from "./useDarkMode.ts";

export const DarkModeButton = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Button size="sm" isIconOnly color="primary" onClick={toggleDarkMode}>
      {isDarkMode ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
