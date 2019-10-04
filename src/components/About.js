import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";

const Icons = () => (
        <div className="logos dn db-ns w-100 flex-ns flex-wrap-ns mb3">
          <FontAwesomeIcon icon={["fab", "html5"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "css3-alt"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "sass"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "js"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "react"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "node-js"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "aws"]} className="icon" />
          <FontAwesomeIcon icon="database" className="icon" />
          <FontAwesomeIcon icon={["fab", "trello"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "slack"]} className="icon" />
          <FontAwesomeIcon icon={["fab", "github"]} className="icon" />
        </div>
)

const About = () => (
  <div className="w-100 flex flex-start items-center-ns">
    <div className="about mw6 mw8-l center db flex-l">
      <div className="profile br3 w-100 w-60-ns w-35-l">{/* Image */}</div>
      <div className="info w-100 pl3-l w-65-l">
        <h1 className="f2 f1-ns b pink ttu">Joe Baldwin</h1>
        <h2 className="f4 f3-ns fw2 fw3-ns ttu blue mb2">
          Junior Web Developer
        </h2>
        <Icons />
        <p className="info-copy f5 f4-l fw5 white">
          Driven by my desire to build and create, I decided to skill-up and
          begin a new career path in January 2019. Since then I've been enjoying
          the intellectual challenge of teaching myself to build full-stack web
          applications through various online courses
        </p>
        <p className="info-copy f5 f4-l fw5 white">
          At the moment I'm thoroughly enjoying working with ReactJS and Redux.
          Javascript is my preferred language of choice, but I'm familiar and
          happy to work with Ruby too.
        </p>
        <p className="info-copy f5 f4-l fw5 white">
          I’m currently looking for a junior frontend web development
          opportunity. I'd like to work on creative and challenging projects
          with a mindful, communicative and supportive team.
        </p>
        <p className="tl">
          <LinkButton
            href="https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/cirriculum_vitae_joe_baldwin.pdf"
            logo="eye"
            title="Open CV"
            css="pa2 pa3-ns f6 f5-ns w-50 center ml0-ns mr0-ns"
          />
        </p>
      </div>
    </div>
  </div>
);

export default About;
