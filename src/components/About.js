import React from "react";

const About = () => (
  <div className="w-100 min-vh-100 flex flex-start items-center-ns pa3">
    <div className="mw7 center">
      <div className="profile">{/* Image */}</div>
      <div className="">
        <h1 className="f1 b pink ttu">Joe Baldwin</h1>
        <h2 className="f3 fw3 ttu blue mb3">Junior Web Developer</h2>
        <p className="green tracked">
          Joe and I worked together at Loco2 for almost four years. During that
          time, we built a solid working relationship - often remotely via Slack
          and video chat. Joe is incredibly hard-working - bright, thoughtful
          and conscientious. I was always impressed by his appetite for new
          information, projects and responsibility, so his move into the role of
          team leader at Loco2's support team was well deserved. He is ambitious
          and unusually adept at self-reflection which gives him an edge when he
          puts himself forward for new opportunities. I have no doubt that he
          will continue to thrive at Loco2 or elsewhere, and I will be cheering
          on his success.
        </p>
      </div>
    </div>
  </div>
);

export default About;
