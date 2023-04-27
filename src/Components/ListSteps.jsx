import React, { useState } from "react";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import EditStep from "./EditStep";

let selectedStepiD;

const ListSteps = (props) => {
  const [IsVisible, setIsVisible] = useState(false);

  const modifyStep = (stepObj) => {
    console.log(stepObj);
  };

  const openModifyWindow = (e) => {
    selectedStepiD = e.target.closest(".btn").id;
    handlerVisibility();
  };

  const handlerVisibility = () => {
    setIsVisible(() => !IsVisible);
  };

  return (
    <React.Fragment>
      <HeaderTable rows={props.headerText} sendStyles={props.headerStyles} />
      {props.stepsArr.map((stepObj, i) => {
        const faseValues = Object.values(stepObj); //Extrae los valores de cada objeto fase
        const rowsText = [
          //Crea un array con los textos de cada celda
          ...faseValues.slice(0, 2),
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
          stepName={props.stepsArr[selectedStepiD].Descrizione}
          onClose={handlerVisibility}
          onModify={modifyStep}
        />
      )}
    </React.Fragment>
  );
};

export default ListSteps;
