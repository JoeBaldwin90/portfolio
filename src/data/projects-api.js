const ProjectsApi = {
  projects: [
    {
      project: 1,
      type: "ReactJS",
      name: "Pukka Wax Radio",
      github: "https://github.com/JoeBaldwin90/pukka-wax-radio",
      website: "https://pukka-wax-radio.netlify.com",
      technologies: ["ReactJS", "Redux", "Node", "AJAX", "Tachyons", "Git"],
      url:
        "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/PukkaWax.png",
      description:
        "Pukka Wax Radio is a React app which hosts hand-picked mixes from around the world. All of the data for this site, including the images, are pulled in from Mixcloud’s API using async fetch get requests. This app was first built using stateful components, but later refactored to incorporate Redux – which has been used to hold the API data and five other states. The main UX feature of this app is that users can play their chosen mix as they navigate around the site and explore each mix’s statistics. Tachyons is the mobile-first CSS toolkit that I’ve used to make the site  responsive. This was the final project that I built as part of my four week SuperHi React.js course."
    },
    {
      project: 2,
      type: "ReactJS",
      name: "Jiffy",
      github: "https://github.com/JoeBaldwin90/jiffy-react",
      website: "https://jiffy-react-app.netlify.com",
      technologies: ["ReactJS", "Node", "AJAX", "Tachyons", "Git"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Jiffy.png",
      description:
        "The idea behind Jiffy is simple; type in any search term and hit enter to see a random selection of related gifs from the Giphy API. The state and components visible to the user change when the user starts typing, hits enter to search and when the app is loading data from an API call."
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
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/PinCo.png",
      description:
        "A Ruby on Rails app for an imaginary online store that sells pin accessories"
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
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Source.png",
      description:
        "Source is a subscription based photography website built with Ruby on Rails"
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
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Twitter.png",
      description: "Minimal Twitter uses Twitter's OAuth login"
    },
    {
      project: 6,
      type: "AJAX & APIs",
      name: "Mood Board",
      github: "https://github.com/JoeBaldwin90/mood_board",
      website: "http://moodsfordays.surge.sh/",
      technologies: ["HTML/CSS", "JavaScript", "AJAX", "Postman"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Moods.png",
      description:
        "Mood Board is a tool for creatives. Users to type their 'mood' into the search form and the app returns related images befitting the search term from the public Unsplash API. I used the Postman API development tool to set my headers and check the data returned by the endpoints. This project was built as part of a four-week Ajax & APIs online course. "
    },
    {
      project: 7,
      type: "Javascript / CSS",
      name: "Good Times Festival",
      github: "",
      website: "https://goodtimes-jb.superhi.com",
      technologies: ["HTML/CSS", "JavaScript", "Tachyons", "CSS Grid", "AJAX"],
      url:
        "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/goodtimes.png",
      description: "Good times festival."
    },
    {
      project: 8,
      type: "Javascript / CSS",
      name: "Shapez",
      github: "",
      website: "https://shapez.superhi.com",
      technologies: ["HTML/CSS", "JavaScript", "Tachyons", "SVG Animations"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Sahpes.png",
      description: "Shapez is a showcase of JavaScript powered SVG animations."
    },
    {
      project: 9,
      type: "Javascript / CSS",
      name: "Essemi",
      github: "",
      website: "https://essemi-jb.superhi.com/",
      technologies: ["HTML/CSS", "jQuery", "Keyframes", "Data-filters"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Essemai.png",
      description:
        "This is an online clothing and accessory store built with HTML5 CSS3 and JavasCript ES6"
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
