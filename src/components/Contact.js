import React from "react";
import LinkButton from "./LinkButton";

const Contact = () => (
  <div className="w-100 flex flex-start items-center-ns">
    <div className="contact mw6 mw7-l center db h-100">
      <h1 className="f3 f2-m f1-l b pink mb4">
        Always happy to hear from you!
      </h1>
      <ul className="flex justify-between">
        <li key="GitHub" className="w-50 mr3">
          <LinkButton
            href="https://github.com/JoeBaldwin90"
            logo="github"
            title="GitHub"
            css="f5 f4-ns fw2 fw3-ns pa3 mb3"
          />
        </li>
        <li key="LinkedIn" className="w-50">
          <LinkButton
            href="https://www.linkedin.com/in/jbaldwin90/"
            logo="linkedin"
            title="LinkedIn"
            css="f5 f4-ns fw2 fw3-ns pa3 mb3"
          />
        </li>
      </ul>

      <LinkButton
        href="mailto:jcameronbaldwin@gmail.com?Subject=Hello"
        logo="envelope"
        title="jcameronbaldwin@gmail.com"
        css="f5 f4-ns fw2 fw3-ns pa3 mb3"
      />
    </div>
  </div>
);

export default Contact;
