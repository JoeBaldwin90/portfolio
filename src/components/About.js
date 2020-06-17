import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "./LinkButton";
import Fade from "react-reveal/Fade";

const Icons = () => (
  <div className='logos dn db-ns w-100 flex-ns flex-wrap-ns mb3'>
    <Fade cascade>
      <FontAwesomeIcon icon={["fab", "html5"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "css3-alt"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "sass"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "js"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "react"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "node-js"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "aws"]} className='icon' />
      <FontAwesomeIcon icon='database' className='icon' />
      <FontAwesomeIcon icon={["fab", "trello"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "slack"]} className='icon' />
      <FontAwesomeIcon icon={["fab", "github"]} className='icon' />
    </Fade>
  </div>
);

const About = () => (
  <div className='w-100 flex flex-start items-center-ns'>
    <div className='about mw6 mw8-l center db flex-l'>
      <div className='profile br3 w-100 w-60-ns w-35-l'>{/* Image */}</div>
      <div className='info w-100 pl3-l w-65-l'>
        <h1 className='f2 f1-ns b pink ttu'>Joe Baldwin</h1>
        <h2 className='f4 f3-ns fw2 fw3-ns ttu blue mb2'>
          Full-Stack Web Developer
        </h2>

        <Icons />

        <p className='info-copy f5 f4-l fw5 white'>
          I enjoy the intrinsic reward and process of learning. Be it Spanish,
          rock climbing or{" "}
          <a
            href='https://youtu.be/9bO77IrvYSo?t=20'
            className='link dim'
            target='_blank'
            rel='noopener noreferrer'
          >
            how to go faster than 60mph on a skateboard
          </a>
          .
        </p>
        <p className='info-copy f5 f4-l fw5 white'>
          I've been teaching myself how to build full-stack applications since
          January 2019 and I'm comfortable working with MERN and MEAN stacks.
          JavaScript applications are my forté, but I have experience with Ruby
          on Rails too.
        </p>
        <p className='info-copy f5 f4-l fw5 white'>
          Due to COVID redundancies, I’m actively seeking a new React.js web
          development role. My work-ethic suits a collaborative, innovative and
          detail-oriented team. If that's you, then{" "}
          <a
            href='https://www.linkedin.com/in/jbaldwin90'
            className='link dim'
            target='_blank'
            rel='noopener noreferrer'
          >
            I'd love to get connected
          </a>
          !
        </p>

        <div className='tl pt3'>
          <LinkButton
            href='https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/JoeBaldwin_CV.pdf'
            logo='eye'
            title='Open CV'
            css='pa2 pa3-ns f6 f5-ns w-50 center ml0-ns mr0-ns'
          />
        </div>
      </div>
    </div>
  </div>
);

export default About;
