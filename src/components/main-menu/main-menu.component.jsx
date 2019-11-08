import React from "react";

import { MainMenuContainer } from "./main-menu.styles";

import MenuItem from "../menu-item/menu-item.component";

const MainMenu = () => {
  return (
    <MainMenuContainer>
      <MenuItem title="Check In" />
      <MenuItem title="Workouts" />
      <MenuItem title="Exercises" />
    </MainMenuContainer>
  );
};

export default MainMenu;
