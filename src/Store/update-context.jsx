import React from "react";

const UpdateContext = React.createContext({
  updateSteps: () => {},
  handleCompany: () => {},
  //stepsArr: [{}],
});

export default UpdateContext;
