import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => (
  <div className="w-100 flex flex-start items-center-ns">
    <div className="contact mw6 mw7-l center db h-100">
      <h1 className="f3 f2-m f1-l b pink mb4">Always happy to hear from you!</h1>
      <ul className="flex justify-between">
        <li className="w-50 mr3">
          <a
            href="https://github.com/JoeBaldwin90"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="icon-title center f5 f4-ns fw2 fw3-ns pa3 tc ttu mb3 tag">
              <FontAwesomeIcon
                icon={["fab", "github"]}
                size="m"
                className="icon"
              />
              GitHub
            </h2>
          </a>
        </li>
        <li className="w-50">
          <a
            href="https://www.linkedin.com/in/jbaldwin90/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="icon-title center f5 f4-ns fw2 fw3-ns tc pa3 ttu mb3 tag">
              <FontAwesomeIcon
                icon={["fab", "linkedin"]}
                size="m"
                className="icon"
              />
              LinkedIn
            </h2>
          </a>
        </li>
      </ul>

      <a
        href="mailto:jcameronbaldwin@gmail.com?Subject=Hello"
        target="_blank"
        rel="noopener noreferrer"
        className="link email"
      >
        <h2 className="icon-title w-100 center f5 f4-ns fw2 fw3-ns tc pa3 ttu mb3 tag email">
          <FontAwesomeIcon icon="envelope" size="m" className="icon" />
          jcameronbaldwin@gmail.com
        </h2>
      </a>
    </div>
  </div>
);

export default Contact;
