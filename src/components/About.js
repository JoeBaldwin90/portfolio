import React from "react";

const About = () => (
  <div className="w-100 flex flex-start items-center-ns">
    <div className="about mw6 mw8-l center db flex-l">
      <div className="profile w-100 w-60-ns w-35-l">{/* Image */}</div>
      <div className="info w-100 pl3-l w-65-l">
        <h1 className="f2 f1-ns b pink ttu">Joe Baldwin</h1>
        <h2 className="f4 f3-ns fw2 fw3-ns ttu blue mb3">
          Junior Web Developer
        </h2>
        <p className="info-copy f5 f4-l fw5 green tracked">
          Joe and I worked together at Loco2 for almost four years. During that
          time, we built a solid working relationship - often remotely via Slack
          and video chat.{" "}
        </p>
        <p className="info-copy f5 f4-l fw5 green tracked">
          Joe is incredibly hard-working - bright, thoughtful and conscientious.
          I was always impressed by his appetite for new information, projects
          and responsibility, so his move into the role of team leader at
          Loco2's support team was well deserved.{" "}
        </p>
        <p className="info-copy f5 f4-l fw5 green tracked">
          He is ambitious and unusually adept at self-reflection which gives him
          an edge when he puts himself forward for new opportunities. I have no
          doubt that he will continue to thrive at Loco2 or elsewhere, and I
          will be cheering on his success.
        </p>
      </div>
    </div>
  </div>
);

export default About;
