import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <footer className={styles.bdoFooter}>
      <a
        href="/SitePages/TERMS-OF-USE-–-BDO-WORLD.aspx"
        data-interception="propagate"
        target="_self"
        data-navigationcomponent="SiteFooter"
      >
        Terms of Use and Privacy Statement
      </a>
      <a
        href="/"
        data-interception="propagate"
        target="_self"
        data-navigationcomponent="SiteFooter"
      >
        BDO World - Home
      </a>
    </footer>
  );
};

export default Footer;
