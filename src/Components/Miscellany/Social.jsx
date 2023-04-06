import React from "react";

const Social = () => {
  return (
    <div class="social-column eh-col col-md-3">
      {" "}
      <a
        href="https://twitter.com/bdo_italia"
        aria-label="Twitter"
        target="_blank"
        title="twitter"
      >
        <span class="icon social twitter"></span>
      </a>{" "}
      <a
        href="https://www.linkedin.com/company/bdo?trk=biz-companies-cym"
        aria-label="LinkedIn"
        target="_blank"
        title="linkedin"
      >
        <span class="icon social linkedin"></span>
      </a>{" "}
      <a href="#" aria-label="RSS" target="_blank" title="rss">
        <span class="icon social rss"></span>
      </a>{" "}
      <a
        href="https://www.youtube.com/channel/UC44GhmLIf2kow9cW-hI_K3A"
        aria-label="Youtube"
        target="_blank"
        title="YouTube"
      >
        <span class="icon social youtube"></span>
      </a>{" "}
      <a href="#" aria-label="Comment" target="_blank" title="comment">
        <span class="icon social comment"></span>
      </a>
    </div>
  );
};

export default Social;
