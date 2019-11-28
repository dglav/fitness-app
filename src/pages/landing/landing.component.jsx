import React from "react";
import { connect } from "react-redux";

import MenuItem from "../../components/menu-item/menu-item.component";

const LandingPage = ({ nextWorkout }) => {
  const { name, phase, variation } = nextWorkout;
  const subtitle = `${name}: ${phase}${variation}`;
  return (
    <React.Fragment>
      <MenuItem
        title="Next Workout"
        subtitle={subtitle}
        route="/workout"
        workout={nextWorkout}
      />
      <MenuItem title="Select Workout" route="/" />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    nextWorkout: state.users.nextWorkout
  };
};

export default connect(mapStateToProps)(LandingPage);
