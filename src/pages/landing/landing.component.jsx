import React from "react";

import MenuItem from "../../components/menu-item/menu-item.component";

const LandingPage = ({ currentWorkout }) => {
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

export default LandingPage;
