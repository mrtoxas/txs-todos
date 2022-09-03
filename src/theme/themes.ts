import {createGlobalStyle} from "styled-components";
import {normalize} from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize};
`;

export const lightTheme = {
  name: "light-theme",
  colors: {
    text: "#000000",
    background: '#FFFFFF'
  },
};

export const darkTheme = {
  name: "dark-theme",
  colors: {
    text: "#FFFFFF",
    background: '#202124',
  },
};
