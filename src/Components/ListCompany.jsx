import React, { useState, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./ListCompany.module.css";
import HeaderTable from "./Table/HeaderTable";
import RowsTable from "./Table/RowsTable";
import Button from "./Miscellany/Button";
import CompanyLogo from "./Miscellany/CompanyLogo";
import logoLearning from "../img/logo/logo_231/231-logo-color.png";
import CreateCompany from "./CreateCompany";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { PulseLoader } from "react-spinners";
import { validateUser } from "../validation/ValidateUser";
import ListingTable from "../Components/Table/ListingTable";

const companyHeaderTexts = [
  "ID",
  "Nome Azienda",
  "Intervento Formativo",
  "Documentazione",
  "Creato",
  "Modifica",
];

const columns = [
  { Header: "No.", accessor: "Number" },
  { Header: "Id", accessor: "IdAzienda" },
  { Header: "Nome Azienda", accessor: "DesAzienda" },
  { Header: "Intervento Formativo", accessor: "DesQuestionario" },
  { Header: "Documentazione", accessor: "DownloadLink" },
  { Header: "Creato", accessor: "FormatedDate" },
  { Header: "Modifica", accessor: "Btn" },
];

const ListCompany = (props) => {
  const [IsVisible, setIsVisible] = useState(false);
  const [companyData, setCompanyData] = useState([1, 2, 3]);
  const [Loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //const companyData = useLoaderData();

  useEffect(() => {
    validateUser().then((resp) => {
      resp.loggedIn ? getData() : navigate("/login");
    });
  }, [IsVisible]); //Ejecuta useEffect cada vez que cambia "IsVisible"

  const getData = async () => {
    try {
      const getCompanies = await axios.get("http://localhost:3001/aziende", {
        headers: {
          "my-access-token": localStorage.getItem("token"),
        },
      });
      const data = getCompanies.data.map((company, i) => {
        const formatedObj = formatCompany(company);
        return { ...formatedObj, Number: i + 1 };
      });
      setLoading(false);
      setCompanyData(data);
    } catch (err) {
      console.error(new Error(err));
    }
  };

  const showCreateWindow = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const modifySelectedCompany = (e) => {
    const selCompanyId = e.target.closest("button").id;
    const cmpnyId = companyData[selCompanyId].IdAzienda;
    navigate(`/list-company/${cmpnyId}`);
  };

  const formatCompany = (companyObj) => {
    const date = new Date(companyObj.createdAt);
    const formatedDate = new Intl.DateTimeFormat(navigator.language).format(
      date
    );
    const uint8Array = new Uint8Array(companyObj.fileData.BlobData.data);
    const file = new Blob([uint8Array], {
      type: companyObj.fileData.BlobContentType,
    });

    const url = URL.createObjectURL(file);
    const downloadLink = (
      <a href={url} download={companyObj.fileData.BlobName}>
        {companyObj.fileData.BlobTags}
      </a>
    );
    return {
      IdAzienda: companyObj.IdAzienda,
      DesAzienda: companyObj.DesAzienda,
      DesQuestionario: companyObj.DesQuestionario,
      DownloadLink: downloadLink,
      FormatedDate: formatedDate,
    };
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
        <div>
          <ListingTable
            data={companyData.map((data, i) => {
              return {
                ...data,
                Btn: (
                  <button
                    id={i}
                    className={styles.btn}
                    onClick={modifySelectedCompany}
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
              Crea Azienda
            </Button>
          </footer>
          {IsVisible && (
            <CreateCompany
              headers={companyHeaderTexts}
              onClose={showCreateWindow}
              windowsType={{
                headerText: "Crea nuova azienda",
                btnText: "Crea",
              }}
            />
          )}
        </div>
      )}
    </section>
  );
};

export default ListCompany;

/* export const listCompanyLoader = async () => {
  try {
    //validateUser();
    const getCompanies = axios.get("http://localhost:3001/aziende");
    const getQuestionari = axios.get("http://localhost:3001/questionari");

    const dataResp = await Promise.all([getCompanies, getQuestionari]);

    return dataResp;
  } catch (err) {
    console.error(new Error(err));
  }
};
 */
