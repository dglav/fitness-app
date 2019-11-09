import React from "react";

import { MainMenuContainer } from "./main-menu.styles";

import MenuItem from "../menu-item/menu-item.component";

const MainMenu = ({ currentWorkout }) => {
  return (
    <MainMenuContainer>
      <MenuItem
        title="Next Workout"
        subtitle={currentWorkout}
        route="/workout"
      />
      <MenuItem title="Select Workout" />
    </MainMenuContainer>
  );
};

export default MainMenu;
