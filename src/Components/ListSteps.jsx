import React, { useState } from "react";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditStep from "./EditStep";

let selectedStepId;

const ListSteps = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  const openModifyWindow = (e) => {
    selectedStepId = e.target.closest(".btn").id;
    handlerVisibility();
  };

  const handlerVisibility = () => {
    setIsVisible(() => !IsVisible);
  };

  return (
    <React.Fragment>
      <HeaderTable rows={props.headerText} sendStyles={props.headerStyles} />
      {props.stepsArr.map((stepObj, i) => {
        const rowsText = [
          stepObj.id,
          stepObj.descrizione,
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
          stepName={props.stepsArr[selectedStepId]}
          onClose={handlerVisibility}
          onModify={props.updateStep}
        />
      )}
    </React.Fragment>
  );
};

export default ListSteps;
