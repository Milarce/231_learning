import React from "react";
import HeaderTableCopy from "./Table/HeaderTableCopy";
import RowsTableCopy from "./Table/RowsTableCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ListSteps = (props) => {
  return (
    <React.Fragment>
      <HeaderTableCopy
        rows={props.headerText}
        sendStyles={props.headerStyles}
      />
      {props.stepsArr.map((stepObj, i) => {
        const faseValues = Object.values(stepObj); //Extrae los valores de cada objeto fase
        const rowsText = [
          //Crea un array con los textos de cada celda
          ...faseValues.slice(0, 2),
          <FontAwesomeIcon icon={faPenToSquare} />,
        ];
        return (
          <RowsTableCopy
            key={i}
            rows={rowsText}
            sendStyles={props.rowsStyles}
          />
        );
      })}
    </React.Fragment>
  );
};

export default ListSteps;
