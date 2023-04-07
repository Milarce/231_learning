import React from "react";
import styles from "./Social.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHashtag,
  faVideo,
  faComment,
  faRss,
} from "@fortawesome/free-solid-svg-icons";

const Social = () => {
  return (
    <div className={styles["social-grid"]}>
      <a
        href="https://twitter.com/bdo_italia"
        aria-label="Twitter"
        target="_blank"
        title="twitter"
      >
        <FontAwesomeIcon icon={faHashtag} />
      </a>
      <a
        href="https://www.linkedin.com/company/bdo?trk=biz-companies-cym"
        aria-label="LinkedIn"
        target="_blank"
        title="linkedin"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>{" "}
      <a href="#" aria-label="RSS" target="_blank" title="rss">
        <FontAwesomeIcon icon={faRss} />
      </a>{" "}
      <a
        href="https://www.youtube.com/channel/UC44GhmLIf2kow9cW-hI_K3A"
        aria-label="Youtube"
        target="_blank"
        title="YouTube"
      >
        <FontAwesomeIcon icon={faVideo} />
      </a>{" "}
      <a href="#" aria-label="Comment" target="_blank" title="comment">
        <FontAwesomeIcon icon={faComment} />
      </a>
    </div>
  );
};

export default Social;
