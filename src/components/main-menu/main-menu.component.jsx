import React from "react";

import MenuItem from "../menu-item/menu-item.component";

const MainMenu = ({ currentWorkout }) => {
  return (
    <React.Fragment>
      <MenuItem
        title="Next Workout"
        subtitle={currentWorkout}
        route="/workout"
      />
      <MenuItem title="Select Workout" />
    </React.Fragment>
  );
};

export default MainMenu;
