import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ icon }) => {
  if (icon === "envelope" || icon === "eye") {
    return <FontAwesomeIcon icon={icon} size="m" className="icon" />;
  }
  return (
    <FontAwesomeIcon icon={["fab", `${icon}`]} size="m" className="icon" />
  );
};

const LinkButton = ({ href, logo, title, css }) => {
  return (
    <a href={href} className="link" target="_blank" rel="noopener noreferrer">
      <h2 className={`icon-title tag center ttu mb3 ${css}`}>
        <Icon icon={logo} />
        {title}
      </h2>
    </a>
  );
};

export default LinkButton;