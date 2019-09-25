const ProjectsApi = {
  projects: [
    {
      project: 1,
      type: "ReactJS",
      name: "Pukka Wax Radio",
      github: "github.com/JoeBaldwin90/pukka-wax-radio",
      website: "pukka-wax-radio.netlify.com",
      technologies: ["ReactJS", "Redux", "Node", "AJAX", "Tachyons", "Git"]
    },
    {
      project: 2,
      type: "ReactJS",
      name: "Jiffy",
      github: "github.com/JoeBaldwin90/jiffy-react",
      website: "jiffy-react-app.netlify.com",
      technologies: ["ReactJS", "Node", "AJAX", "Tachyons", "Git"]
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
      ]
    },
    {
      project: 4,
      type: "Ruby on Rails",
      name: "Source",
      github: "https://github.com/JoeBaldwin90/source",
      website: "bit.ly/313smNR",
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
      ]
    },
    {
      project: 5,
      type: "Ruby on Rails / AJAX & APIs",
      name: "MINIMAL TWITTER",
      github: "https://github.com/JoeBaldwin90/PinCo",
      website: "https://sleepy-tor-59434.herokuapp.com",
      technologies: [
        "Ruby on Rails",
        "SASS",
        "Git/GitHub",
        "Heroku",
        "OmniAuth"
      ]
    },
    {
      project: 6,
      type: "AJAX & APIs",
      name: "PinCo",
      github: "github.com/JoeBaldwin90/mood_board",
      website: "http://moodsfordays.surge.sh/",
      technologies: ["HTML/CSS", "JavaScript", "AJAX", "Postman"]
    },
    {
      project: 7,
      type: "Javascript / CSS",
      name: "Good Times Festival",
      github: "",
      website: "goodtimes-jb.superhi.com",
      technologies: ["HTML/CSS", "JavaScript", "Tachyons", "CSS Grid", "AJAX"]
    },
    {
      project: 8,
      type: "Javascript / CSS",
      name: "Shapez",
      github: "",
      website: "shapez.superhi.com",
      technologies: ["HTML/CSS", "JavaScript", "Tachyons", "SVG Animations"]
    },
    {
      project: 9,
      type: "Javascript / CSS",
      name: "Essemi",
      github: "",
      website: "shapez.superhi.com",
      technologies: ["HTML/CSS", "jQuery", "Keyframes", "Data-filters"]
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
