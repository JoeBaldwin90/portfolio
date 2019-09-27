import React from "react";

const Contact = () => (
  <div className="w-100 flex flex-start items-center-ns">
    <div className="contact mw6 mw7-l center db h-100">
      <h1 className="f2 f1-ns b pink mb4">Always happy to hear from you!</h1>
      <ul>
        <li className="indent">
          <a
            href="https://github.com/JoeBaldwin90"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mw5-ns center f4 f3-ns fw2 fw3-ns pa3 tc ttu mb3 tag">
              GitHub
            </h2>
          </a>
        </li>
        <li className="indent">
          <a
            href="https://www.linkedin.com/in/jbaldwin90/"
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mw5-ns center f4 f3-ns fw2 fw3-ns tc pa3 ttu mb3 tag">
              LinkedIn
            </h2>
          </a>
        </li>
        <li className="indent">
          <a
            href="mailto:jcameronbaldwin@gmail.com?Subject=Hello"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <h2 className="mw5-ns center f4 f3-ns fw2 fw3-ns tc pa3 ttu mb3 tag email">
              Email
            </h2>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Contact;
