import React from "react";

import { MainMenuContainer } from "./main-menu.styles";

import MenuItem from "../menu-item/menu-item.component";

const MainMenu = () => {
  return (
    <MainMenuContainer>
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </MainMenuContainer>
  );
};

export default MainMenu;
