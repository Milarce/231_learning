import React from "react";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ListSteps = (props) => {
  return (
    <React.Fragment>
      <HeaderTable rows={props.headerText} sendStyles={props.headerStyles} />
      {props.stepsArr.map((stepObj, i) => {
        const faseValues = Object.values(stepObj); //Extrae los valores de cada objeto fase
        const rowsText = [
          //Crea un array con los textos de cada celda
          ...faseValues.slice(0, 2),
          <FontAwesomeIcon icon={faPenToSquare} />,
        ];
        return (
          <RowsTable key={i} rows={rowsText} sendStyles={props.rowsStyles} />
        );
      })}
    </React.Fragment>
  );
};

export default ListSteps;
