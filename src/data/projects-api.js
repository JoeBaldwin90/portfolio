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
        "Pukka Wax Radio is a React app which hosts hand-picked mixes from around the world. All of the data for this site, including the images, are pulled in from Mixcloud’s API using async fetch get requests. This app was first built using stateful components, but later refactored to incorporate Redux – which has been used to hold the API data and five other states. The main UX feature of this app is that users can play their chosen mix as they navigate around the site and explore each mix’s statistics. Tachyons is the mobile-first CSS toolkit that I’ve used to make the site responsive. This was the final project that I built as part of my four week SuperHi React.js course.",
    },
    {
      project: 2,
      type: "MERN Stack",
      name: "Full-Stack Kanban",
      github: "https://github.com/JoeBaldwin90/full-stack-kanban",
      website: "https://full-stack-kanban.herokuapp.com/",
      technologies: [
        "React",
        "Redux",
        "Redux-Sagas",
        "MongoDB",
        "Node.js",
        "Express",
        "Styled Components",
        "Webpack",
        "Babel",
        "Axios",
        "ES6",
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/kanban.gif",
      description:
        "A responsive Kanban task management board built using the MERN stack. You can easily create your own account and start managing your daily to-do's by following the 'sign-up' link on the login screen.",
    },
    {
      project: 3,
      type: "ReactJS",
      name: "Jiffy",
      github: "https://github.com/JoeBaldwin90/jiffy-react",
      website: "https://jiffy-react-app.netlify.com",
      technologies: ["ReactJS", "Node", "AJAX", "Tachyons", "CSS Grid", "Git"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Jiffy.png",
      description:
        "The idea behind Jiffy is simple; type in any search term and hit enter to see a random selection of related gifs from the Giphy API. The state and components visible to the user change when the user starts typing, hits enter to search and when the app is loading data from an API call. This project was built in a week as part of my SuperHi React.js course.",
    },
    {
      project: 4,
      type: "Javascript",
      name: "Typing Speed Test",
      github: "https://github.com/JoeBaldwin90/typingspeedtest",
      website: "https://typingspeedtest.surge.sh/",
      technologies: ["HTML/CSS", "JavaScript", "ESLint"],
      url:
        "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/SpeedTest.png",
      description:
        "This is a Vanilla JavaScript application that tests how many words you can type per minute. Once you've completed the test you can see how many errors you made, how many words you typed and your final word-per-minute score. There are three levels of difficulty to choose from. Your goal is to type the provided text exactly as shown. The stopwatch starts when you start typing. Good Luck!",
    },
    {
      project: 5,
      type: "React / REST",
      name: "Weather Widget",
      github: "https://github.com/JoeBaldwin90/weather_widget",
      website: "https://weather-widget-jb.herokuapp.com/",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Sass",
        "Tachyons",
        "REST",
        "Postman",
        "Heroku",
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/weather.png",
      description:
        "This React.js weather widget was conceived, designed, and built in two days as part of a programming challenge. The app finds the user's location when the city name is clicked using Javascript's Geoloaction API, then uses that location data to fetch and display local weather data from the OpenWeather API. When the app updates the location a simple state-controlled animation.",
    },
    {
      project: 6,
      type: "Javascript / CSS",
      name: "Good Times Festival",
      github: "",
      website: "https://goodtimes-jb.superhi.com",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Tachyons",
        "CSS Grid",
        "AJAX",
        "Stripe API",
        "tilt.js",
        "in-view.js",
      ],
      url:
        "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/goodtimes.png",
      description:
        "Good times festival is a vanilla JavaScript and site which elegantly handles ticket sales for a design festival using Stripe's API. Tachyons has been used to keep the CSS lightweight and two JavaScript libraries (tilt.js & in-view.js) have been used to give the site some personality. This project was built as part of my Advanced JavaScript and CSS SuperHi course.",
    },
    {
      project: 7,
      type: "Javascript / CSS",
      name: "Shapez",
      github: "",
      website: "https://shapez.superhi.com",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Tachyons",
        "SVG Animations",
        "anime.js",
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/shapez.gif",
      description:
        "Shapez is a showcase of Anime.js powered SVG animations, styled with the CSS toolkit 'Tachyons'. This project was built as part of my SuperHi Advanced Javascript and CSS course.",
    },
    {
      project: 8,
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
        "BCrypt",
        "CarrierWave",
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/PinCo.png",
      description:
        "A Ruby on Rails app for an imaginary online store that sells pin accessories. This project solidified my understanding of model associations, form validations, image hosting with AWS and admin user logins. This project was built in two weeks as part of my SuperHi Ruby on Rails online course.",
    },
    {
      project: 9,
      type: "Javascript / CSS",
      name: "Essemi",
      github: "",
      website: "https://essemi-jb.superhi.com/",
      technologies: ["HTML/CSS", "jQuery", "Data-filters", "Responsive Design"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Essemai.png",
      description:
        "This is a responsive online clothing and accessory website built with HTML5, CSS3 and jQuery as part of my Advanced JavaScript and CSS SuperHi course. Data-attribute selectors have been used to filter the store's products by category type.",
    },
    {
      project: 10,
      type: "Angular",
      name: "Product Management",
      github: "https://github.com/JoeBaldwin90/angular-product-management",
      website: "",
      technologies: ["Angular", "Javascript", "Bootstrap"],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/angular.gif",
      description:
        "A modest Angular application which filters database entries using Angular pipes. I built this application as part of a Pluralsight Angular learning course. Styling has been created for this project with Bootstrap.",
    },
    {
      project: 11,
      type: "Ruby on Rails / AJAX & APIs",
      name: "Minimal Twitter",
      github: "https://github.com/JoeBaldwin90/PinCo",
      website: "https://sleepy-tor-59434.herokuapp.com",
      technologies: [
        "Ruby on Rails",
        "SASS",
        "Git/GitHub",
        "Heroku",
        "OmniAuth",
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Twitter.png",
      description:
        "Minimal Twitter is a Ruby on Rails application which displays a logged-in user's tweets in a clean, stylish way. Anyone with a Twitter account can use this app, which accesses the Twitter API using the Omiauth-twitter gem. This project was built as part of my AJAX & APIs SuperHi course and is hosted on Heroku.",
    },
    {
      project: 12,
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
        "BCrypt",
      ],
      url: "https://portfolio-images-jb.s3.eu-west-2.amazonaws.com/Source.png",
      description:
        "Source is a paid two-tier subscription photography website built with Ruby on Rails. New users can create an account and enter Stripe's test card details to access the paid version of the site: 4242 4242 4242 4242, plus any CVC, expiry & postal code. Once logged in, users can manage their subscription plan and search the database of hand-picked photographs using the search bar in the site header. This project was built in one week as part of my SuperHi Ruby on Rails online course.",
    },
  ],
  all: function () {
    return this.projects;
  },
  get: function (id) {
    const isProject = (p) => p.project === id;
    return this.projects.find(isProject);
  },
};

export default ProjectsApi;
