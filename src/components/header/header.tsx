import React from "react";
import { Div } from "./styled";
import {ThemeSwitcher} from "../themeSwitcher/themeSwitcher";

export const Header:React.FC = () => {
  return (
    <>
      <Div>Todo</Div>
      <ThemeSwitcher />
    </>

  )
}
