import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ListEmployee.module.css";
import FormModal from "../Components/Modals/FormModal";
import axios from "axios";
import ListingTable from "../Components/Table/ListingTable";
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
    { Header: "Id Azienda", accessor: "IdAzienda" },
    { Header: "Id Dipendente", accessor: "IdDipendente" },
    { Header: "Cognome", accessor: "CognomeDipendente" },
    { Header: "Nome", accessor: "NomeDipendente" },
    { Header: "Mail", accessor: "MailDipendente" },
    { Header: "Attivo", accessor: "DipendenteAttivo" },
    { Header: "Modifica", accessor: "btn" },
  ];

  useEffect(() => {
    validateUser().then((resp) => {
      resp.loggedIn ? getData() : navigate("/login");
    });
  }, [IsVisible]); //Ejecuta useEffect cada vez que cambia "IsVisible"

  const getData = async () => {
    try {
      const getEmployees = await axios.get("http://localhost:3001/dipendenti", {
        headers: {
          "my-access-token": localStorage.getItem("token"),
        },
      });

      const btnModifica = (
        <FontAwesomeIcon className={styles.btn} icon={faPenToSquare} />
      );
      const data = getEmployees.data.map((employee) => {
        return { ...employee, btn: btnModifica };
      });

      setEmployeeData(data);
      setLoading(false);
    } catch (err) {
      console.error(new Error(err));
    }
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
        <ListingTable data={EmployeeData} columns={columns} />
      )}
    </section>
  );
};

export default ListEmployee;