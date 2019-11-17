import React from "react";

import MenuItem from "../../components/menu-item/menu-item.component";

const LandingPage = ({ nextWorkout }) => {
  const { name, phase, variation } = nextWorkout;
  const subtitle = `${name}: ${phase}-${variation}`;
  return (
    <React.Fragment>
      <MenuItem title="Next Workout" subtitle={subtitle} route="/workout" />
      <MenuItem title="Select Workout" />
    </React.Fragment>
  );
};

export default LandingPage;
