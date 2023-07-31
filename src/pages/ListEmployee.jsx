import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListEmployee.module.css";
import FormModal from "../Components/Modals/FormModal";
import axios from "axios";
import ListingTable from "../Components/Table/ListingTable";
import Button from "../Components/Miscellany/Button";
import CreateEmployee from "../Components/CreateEmployee";
import { PulseLoader } from "react-spinners";
import { validateUser } from "../validation/ValidateUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const ListEmployee = () => {
  const [IsVisible, setIsVisible] = useState(false);
  const [EmployeeData, setEmployeeData] = useState([]);
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const columns = [
    { Header: "No.", accessor: "Number" },
    { Header: "Id", accessor: "IdDipendente" },
    { Header: "Cognome", accessor: "CognomeDipendente" },
    { Header: "Nome", accessor: "NomeDipendente" },
    { Header: "Mail", accessor: "MailDipendente" },
    { Header: "Attivo", accessor: "DipendenteAttivo" },
    { Header: "Modifica", accessor: "Btn" },
  ];

  useEffect(() => {
    validateUser().then((resp) => {
      resp.loggedIn ? getData() : navigate("/login");
    });
  }, [IsVisible]); //Ejecuta useEffect cada vez que cambia "IsVisible"

  const showCreateWindow = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const getData = async () => {
    try {
      const getEmployees = await axios.get("http://localhost:3001/dipendenti", {
        headers: {
          "my-access-token": localStorage.getItem("token"),
        },
      });

      setEmployeeData(getEmployees.data);
      setLoading(false);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const modifySelectedEmployee = () => {
    console.log("It works");
  };

  return (
    <section className={styles.section}>
      {Loading ? (
        <PulseLoader
          color={"#ed1a3b"}
          loading={true}
          size={"3rem"}
          cssOverride={{ marginTop: "45vh", textAlign: "center" }}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <ListingTable
            data={EmployeeData.map((employee, i) => {
              return {
                ...employee,
                Number: i + 1,
                DipendenteAttivo: employee.DipendenteAttivo ? "Yes" : "No",
                Btn: (
                  <button
                    id={i}
                    className={styles.modify}
                    onClick={modifySelectedEmployee}
                  >
                    <FontAwesomeIcon
                      className={styles.btn}
                      icon={faPenToSquare}
                    />
                  </button>
                ),
              };
            })}
            columns={columns}
          />
          <footer className={`${styles["btn-container"]}`}>
            <Button
              btnType={"submit"}
              btnStyle={"create"}
              btnAction={showCreateWindow}
            >
              Nuovo Utente
            </Button>
          </footer>
          {IsVisible && (
            <CreateEmployee
              //headers={companyHeaderTexts}
              onClose={showCreateWindow}
              windowsType={{
                headerText: "Crea nuovo utente",
                btnText: "Crea",
              }}
            />
          )}
        </>
      )}
    </section>
  );
};

export default ListEmployee;
