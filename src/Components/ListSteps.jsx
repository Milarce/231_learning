import React, { useState } from "react";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditStep from "./EditStep";

const ListSteps = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  const showStepWindow = () => {
    setIsVisible(() => !IsVisible);
  };
  const modifyStep = () => {};

  return (
    <React.Fragment>
      <HeaderTable rows={props.headerText} sendStyles={props.headerStyles} />
      {props.stepsArr.map((stepObj, i) => {
        const faseValues = Object.values(stepObj); //Extrae los valores de cada objeto fase
        const rowsText = [
          //Crea un array con los textos de cada celda
          ...faseValues.slice(0, 2),
          <button onClick={showStepWindow}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>,
        ];
        return (
          <RowsTable key={i} rows={rowsText} sendStyles={props.rowsStyles} />
        );
      })}
      {IsVisible && <EditStep onClose={showStepWindow} onModify={modifyStep} />}
    </React.Fragment>
  );
};

export default ListSteps;
