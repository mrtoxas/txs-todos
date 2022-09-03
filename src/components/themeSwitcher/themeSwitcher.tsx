import React from "react";
import {useThemeContext} from "../../theme/theme";
import {Mode} from "../../theme/types";

export const ThemeSwitcher:React.FC = () => {
  const { mode, changeMode } = useThemeContext();

  const toggleMode = () => {
    changeMode(mode === Mode.Light ? Mode.Dark : Mode.Light);
  };


  return (
    <button onClick={toggleMode}>Toggle Mode</button>
  )
}
