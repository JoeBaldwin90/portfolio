import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";
import Fade from "react-reveal/Fade";

const Icons = () => (
  <div className="logos dn db-ns w-100 flex-ns flex-wrap-ns mb3">
    <Fade cascade>
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
    </Fade>
  </div>
);

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
          Fruiting gourmet mushrooms indoors, getting a black-belt and going{" "}
          <a
            href="https://youtu.be/9bO77IrvYSo?t=20"
            className="link green dim"
            target="_blank"
            rel="noopener noreferrer"
          >
            faster than 60mph on a skateboard
          </a>{" "}
          have been three technical challenges that got my juices flowing. Now,
          after being inspired by developers at the recently-acquired tech
          startup, Loco2, I’m teaching myself to code.
        </p>
        <p className="info-copy f5 f4-l fw5 white">
          At Loco2 I’ve developed an enthusiastic and pragmatic approach to
          problem solving and a passion for working in agile and collaborative
          environments. Since my promotion to Team Lead I’ve come to understand
          the importance of open and honest communication and how to take
          ownership of, and manage, complex projects over time.
        </p>
        <p className="info-copy f5 f4-l fw5 white">
          I’m currently looking for a junior frontend web development
          opportunity where I can advance my understanding of Javascript, React
          and Redux.
        </p>

        <div className="tl pt3">
          <LinkButton
            href="https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/JoeBaldwin_CV.pdf"
            logo="eye"
            title="Open CV"
            css="pa2 pa3-ns f6 f5-ns w-50 center ml0-ns mr0-ns"
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
