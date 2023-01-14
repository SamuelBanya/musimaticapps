const user = {
  name: "Sam",
  city: "Omaha",
  state: "NE",
  bio: "Junior Software Engineer looking for the next greatest remote opportunity to advance his career!",
  color: "firebrick",
  links: {
    github: "https://github.com/samuelbanya",
    linkedin: "https://www.linkedin.com/in/samuelbanya/",
  },
  projects: [
    {
      id: 1,
      name: "Party Planner",
      about:
        "A Full Stack web application made with React, Ruby On Rails, and PostgresSQL that allows a user to plan a party with their friends",
      technologies: ["React", "Ruby On Rails", "PostgreSQL", "JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/PartyPlanner",
      demoLink: "https://party-planner.onrender.com/",

    }
    {
      id: 2,
      name: "Craig's Cookout",
      about:
        "A Full Stack web application made with React and Ruby On Rails that allows a user to plan and schedule a cookout with friends!",
      technologies: ["React", "Ruby On Rails", "PostgreSQL", "JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/CraigsCookout",
      demoLink: "https://craigscookoutapp.onrender.com/",

    }
    {
      id: 3,
      name: "Back To The Drawing Board",
      about:
        "70's and 80's inspired comic book artist style drawing board web app that allows you to upload images to use as image references for creating art",
      technologies: ["React", "JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/BackToTheDrawingBoard",
      demoLink: "https://backtothedrawingboard.netlify.app/",
    },
    {
      id: 4,
      name: "Gregslist",
      about:
        "A React app that is modeled after a popular public goods trading website",
      technologies: ["React"],
      repoLink:
        "https://github.com/SamuelBanya/react-hooks-mock-code-challenge-gregslist",
      demoLink: "https://gregslist-sambanya.netlify.app/",
    },
    {
      id: 5,
      name: "Plantshop",
      about:
        "A React app that showcases a plant store with a filterable search",
      technologies: ["React"],
      repoLink:
        "https://github.com/SamuelBanya/react-hooks-mock-code-challenge-plantshop",
      demoLink: "https://plantshop-sambanya.netlify.app/",
    },
    {
      id: 6,
      name: "Sushi Saga",
      about:
        "A React app that showcases a sushi restaurant with a variety of sushi to order from",
      technologies: ["React"],
      repoLink:
        "https://github.com/SamuelBanya/react-hooks-practice-sushi-saga",
      demoLink: "https://sushi-saga.netlify.app/",
    },
    {
      id: 7,
      name: "Toy Tales",
      about:
        "A React app that showcases classic Toy Story characters with the ability to fetch toys, and to donate them with related fetch() API calls",
      technologies: ["React"],
      repoLink: "https://github.com/SamuelBanya/react-hooks-practice-toy-tales",
      demoLink: "https://toy-tales.netlify.app/",
    },
    {
      id: 8,
      name: "Pokemon Searcher",
      about:
        "A React app that allows users to search and view info for various Pokemon including their name, sprite, HP with additional filter options",
      technologies: ["React"],
      repoLink:
        "https://github.com/SamuelBanya/react-hooks-practice-pokemon-searcher",
      demoLink: "https://pokemon-searcher-sambanya.netlify.app/",
    },
    {
      id: 9,
      name: "Stocks",
      about:
        "A React app that displays stock prices with price and name filters",
      technologies: ["React"],
      repoLink: "https://github.com/SamuelBanya/react-hooks-practice-stocks",
      demoLink: "https://stocks-sambanya.netlify.app/",
    },
    {
      id: 10,
      name: "Meowser",
      about:
        "My Phase 1 project for Flatiron School Software Bootcamp that allows you to view various cat breeds",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/Meowser",
      demoLink: "https://meowser.netlify.app/",
    },
    {
      id: 11,
      name: "GitHub Searcher",
      about:
        "An app that allows the user to search for GitHub profiles and related projects",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/GitHubSearcher",
      demoLink:
        "https://apps.musimatic.xyz/jsprojectwebsites/GitHubSearcher/index.html",
    },
    {
      id: 12,
      name: "Simple Liker",
      about:
        "Simple app that allows the user to like a user's comment which then sends a response to the app's server",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/phase-1-building-simple-liker",
      demoLink: "https://samuelbanya.github.io/phase-1-building-simple-liker/",
    },
    {
      id: 13,
      name: "Monsters",
      about:
        "Web app that obtains a list of movie monsters from a 'db.json' based database via 'json-server'",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/phase-1-monsters",
      demoLink: "https://phase-1-monsters.netlify.app/",
    },
    {
      id: 14,
      name: "JavaScript Quotes",
      about: "Web app that displays a list of quotes",
      technologies: ["JS (Vanilla)"],
      repoLink:
        "https://github.com/SamuelBanya/phase-1-javascript-quotes-practice",
      demoLink: "https://phase-1-javascript-quotes-practice.netlify.app/",
    },
    {
      id: 15,
      name: "Ramen Rater",
      about: "Web app that allows you to rate plates of various ramen dishes",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/phase-1-mock-cc-ramen-rater",
      demoLink: "https://ramen-rater.netlify.app/",
    },
    {
      id: 16,
      name: "Bandcamper",
      about:
        "Python 3 based web app that scrapes data from the Bandcamp.com website to allow the user to search bands by genre and location in a simpler way than even on the Bandcamp site itself",
      technologies: ["Python 3"],
      repoLink: "https://github.com/SamuelBanya/Bandcamper",
      demoLink:
        "https://apps.musimatic.xyz/pythonprojectwebsites/Bandcamper/tags.html",
    },
    {
      id: 17,
      name: "Scripture Of The Day",
      about:
        "Web app based upon a CronTab job that generates a random King James Version of the Bible scripture of the day, and displays it on a webpage by using the 'KJV' command line utility.",
      technologies: ["Python 3"],
      repoLink: "https://github.com/SamuelBanya/ScriptureOfTheDay",
      demoLink:
        "https://apps.musimatic.xyz/pythonprojectwebsites/ScriptureOfTheDay/output.html",
    },
    {
      id: 18,
      name: "Collar",
      about:
        "Bootstrap CSS based parody dating website that showcases several high-profile white collar ex-con celebrities",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/BootstrapSites/Collar/index.html",
    },
    {
      id: 19,
      name: "Emulation Nation",
      about:
        "Bootstrap CSS website that discusses the topic of emulators throughout their history and their use today",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "./BootstrapSites/EmulationNation/index.html",
    },
    {
      id: 20,
      name: "Garfield Zone",
      about:
        'Bootstrap CSS website that that discusses the comic, "Garfield", created by the one and only Jim Davis',
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/GarfieldZone/index.html",
    },
    {
      id: 21,
      name: "PageCeption",
      about:
        'Bootstrap CSS website that showcases Chapter 8 in both the "HTML & CSS: Design and Build Websites" and "JavaScript & JQuery: Interactive Front - end Web Development " books as well as play around with iFrame tags',
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "./BootstrapSites/PageCeption/index.html",
    },
    {
      id: 22,
      name: "Sector T",
      about:
        "Bootstrap CSS website that discusses the topic of text editors throughout their history, and the popular ones used today",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/BootstrapSites/SectorT/index.html",
    },
    {
      id: 23,
      name: "Slings",
      about: "Parody website for a night club for stay-at-home dads",
      technologies: ["HTML5"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/BootstrapSites/Slings/index.html",
    },
    {
      id: 24,
      name: "Synth City",
      about:
        "Bootstrap CSS website that discusses the topic of synthesizers and their role in past and present music today",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/SynthCity/index.html",
    },
    {
      id: 25,
      name: "The History Of MS Paint",
      about: "Website that discusses the history of MS Paint",
      technologies: ["HTML5"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/TheHistoryOfMSPaint/index.html",
    },
    {
      id: 26,
      name: "Visit Monaco",
      about:
        "Bootstrap website about the second smallest country in the world, Monaco",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/VisitMonaco/index.html",
    },
    {
      id: 27,
      name: "Webring",
      about:
        "Webring website created from an Emacs Org Mode doc that contains interesting websites",
      technologies: ["Emacs", "Emacs Lisp", "Emacs Org Mode"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/webring.html",
    },
    {
      id: 28,
      name: "Main Dish Recipes",
      about:
        "Recipes websites built from an Emacs Org Mode doc that contains great main dish recipes",
      technologies: ["Emacs", "Emacs Lisp", "Emacs Org Mode"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/maindishrecipes.html",
    },
    {
      id: 29,
      name: "Dessert Recipes",
      about:
        "Dessert recipes website built from an Emacs Org Mode doc that contains great dessert recipes",
      technologies: ["Emacs", "Emacs Lisp", "Emacs Org Mode"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/dessertrecipes.html",
    },
  ],
};

export default user;
