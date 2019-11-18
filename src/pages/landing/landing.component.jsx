import React from "react";
import { connect } from "react-redux";

import MenuItem from "../../components/menu-item/menu-item.component";

const LandingPage = ({ currentWorkout: { name, phase, variation } }) => {
  const subtitle = `${name}: ${phase}${variation}`;
  return (
    <React.Fragment>
      <MenuItem title="Next Workout" subtitle={subtitle} route="/workout" />
      <MenuItem title="Select Workout" route="/" />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    currentWorkout: state.workouts.currentWorkout
  };
};

export default connect(mapStateToProps)(LandingPage);
