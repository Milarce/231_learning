import React, { useState, useContext, useEffect } from "react";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditStep from "./EditStep";
//import UpdateContext from "../Store/update-context";

let selectedStepId;

const ListSteps = (props) => {
  const [IsVisible, setIsVisible] = useState(false);
  const [steps, setSteps] = useState(props.companyFasi);

  /*   useEffect(() => {
    console.log("component render");
    //console.log(steps[0].DesFase);
  }, [IsVisible]); */

  const openModifyWindow = (e) => {
    selectedStepId = e.target.closest(".btn").id;
    handlerVisibility();
  };

  const updateView = (modifiedObj) => {
    setSteps((prevState) => {
      prevState[modifiedObj.NumFase] = { ...modifiedObj };
      handlerVisibility();
      return prevState;
    });
  };

  const handlerVisibility = () => {
    setIsVisible(() => !IsVisible);
  };

  return (
    <React.Fragment>
      <HeaderTable rows={props.headerText} sendStyles={props.headerStyles} />
      {steps.map((stepObj, i) => {
        const rowsText = [
          stepObj.NumFase,
          stepObj.DesFase,
          <button className="btn" id={i} onClick={openModifyWindow}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>,
        ];
        return (
          <RowsTable key={i} rows={rowsText} sendStyles={props.rowsStyles} />
        );
      })}

      {IsVisible && (
        <EditStep
          stepName={steps[selectedStepId]}
          updateView={updateView}
          onClose={handlerVisibility}
        />
      )}
    </React.Fragment>
  );
};

export default ListSteps;
