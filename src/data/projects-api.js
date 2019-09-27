const ProjectsApi = {
  projects: [
    {
      project: 1,
      type: "ReactJS",
      name: "Pukka Wax Radio",
      github: "https://github.com/JoeBaldwin90/pukka-wax-radio",
      website: "https://pukka-wax-radio.netlify.com",
      technologies: ["ReactJS", "Redux", "Node", "AJAX", "Tachyons", "Git"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/PukkaWax.png"
    },
    {
      project: 2,
      type: "ReactJS",
      name: "Jiffy",
      github: "https://github.com/JoeBaldwin90/jiffy-react",
      website: "https://jiffy-react-app.netlify.com",
      technologies: ["ReactJS", "Node", "AJAX", "Tachyons", "Git"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Jiffy.png"
    },
    {
      project: 3,
      type: "Ruby on Rails",
      name: "PinCo",
      github: "https://github.com/JoeBaldwin90/PinCo",
      website: "https://sleepy-tor-59434.herokuapp.com",
      technologies: [
        "Ruby on Rails",
        "Heroku",
        "Git",
        "PostgreSQL",
        "AWS",
        "Devise",
        "ActiveAdmin",
        "BCrypt"
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/PinCo.png"
    },
    {
      project: 4,
      type: "Ruby on Rails",
      name: "Source",
      github: "https://github.com/JoeBaldwin90/source",
      website: "https://bit.ly/313smNR",
      technologies: [
        "Ruby on Rails",
        "Heroku",
        "Git",
        "PostgreSQL",
        "Carrierwave",
        "AWS",
        "Devise",
        "ActiveAdmin",
        "BCrypt"
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Source.png"
    },
    {
      project: 5,
      type: "Ruby on Rails / AJAX & APIs",
      name: "Minimal Twitter",
      github: "https://github.com/JoeBaldwin90/PinCo",
      website: "https://sleepy-tor-59434.herokuapp.com",
      technologies: [
        "Ruby on Rails",
        "SASS",
        "Git/GitHub",
        "Heroku",
        "OmniAuth"
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Twitter.png"
    },
    {
      project: 6,
      type: "AJAX & APIs",
      name: "Mood Boad",
      github: "github.com/JoeBaldwin90/mood_board",
      website: "http://moodsfordays.surge.sh/",
      technologies: ["HTML/CSS", "JavaScript", "AJAX", "Postman"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Moods.png"
    },
    {
      project: 7,
      type: "Javascript / CSS",
      name: "Good Times Festival",
      github: "",
      website: "https://goodtimes-jb.superhi.com",
      technologies: ["HTML/CSS", "JavaScript", "Tachyons", "CSS Grid", "AJAX"],
      url:
        "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/goodtimes.png"
    },
    {
      project: 8,
      type: "Javascript / CSS",
      name: "Shapez",
      github: "",
      website: "https://shapez.superhi.com",
      technologies: ["HTML/CSS", "JavaScript", "Tachyons", "SVG Animations"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Sahpes.png"
    },
    {
      project: 9,
      type: "Javascript / CSS",
      name: "Essemi",
      github: "",
      website: "https://essemi-jb.superhi.com/",
      technologies: ["HTML/CSS", "jQuery", "Keyframes", "Data-filters"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Essemai.png"
    }
  ],
  all: function() {
    return this.projects;
  },
  get: function(id) {
    const isProject = p => p.project === id;
    return this.projects.find(isProject);
  }
};

export default ProjectsApi;
