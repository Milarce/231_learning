import styles from "./Footer.module.css";
import Social from "./Social";

//<div className="links-column middle-column eh-col col-md-4">
//<div className="copyright links-column eh-col col-md-5"></div>

const Footer = (props) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={`${styles.social} ${styles["links-column"]}`}>
          <Social classType="social-grid" />
        </div>

        <div className={styles["links-column"]}>
          <ul>
            <li className={styles["call-button"]}>
              <a
                className={`${styles.button} ${styles.primary}`}
                href="tel:02 582010"
              >
                Chiama BDO
              </a>
            </li>

            <li>
              <a href="/it-it/contatti">CONTATTI</a>
            </li>
            <li>
              <a href="/it-it/uffici-it">UFFICI</a>
            </li>

            <li>
              <a href="https://whistleblowing.bdo.it" target="_blank">
                WHISTLEBLOWING
              </a>
            </li>
          </ul>
        </div>

        <div className={`${styles.copyright} ${styles["links-column"]}`}>
          <ul>
            <li>
              <a href="/it-it/legal-privacy-e-relazione-di-trasparenza">
                Legal &amp; Privacy e Relazione di Trasparenza
              </a>
            </li>
            <li>
              <a href="/it-it/sitemap-it">Sitemap</a>
            </li>
          </ul>
          <p>&nbsp;</p>Copyright © 2023{" "}
          <p>
            BDO Italia S.p.A., società per azioni italiana, è membro di BDO
            International Limited, società di diritto inglese (company limited
            by guarantee), e fa parte della&nbsp;rete internazionale BDO,
            network di società indipendenti.
          </p>
          <p>
            BDO Italia S.p.A. - Sede Legale: Viale Abruzzi n. 94, 20131 Milano -
            Capitale Sociale Euro 1.000.000 &nbsp;- Codice Fiscale, Partita IVA
            e Registro Imprese di Milano n° 07722780967 - R.E.A. Milano 1977842.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
