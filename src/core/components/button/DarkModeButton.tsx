import { Button } from "@heroui/button";
import { MoonIcon, SunIcon } from "./IconButton.tsx";
import { useThemeContext } from "../../context/theme/ThemeContext.ts";

export const DarkModeButton = () => {
  const { isDarkTheme, toogleTheme } = useThemeContext();

  return (
    <Button size="sm" isIconOnly color="primary" onPress={toogleTheme}>
      {isDarkTheme ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
