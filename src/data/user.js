const user = {
  name: "Sam",
  city: "Omaha",
  state: "NE",
  bio: "Technical Support Engineer looking to get out of technical support to pursue his dream career as a web developer!",
  color: "firebrick",
  links: {
    github: "https://github.com/samuelbanya",
    linkedin: "https://www.linkedin.com/in/samuelbanya/",
  },
  projects: [
    {
      id: 1,
      name: "GitHub Searcher",
      about:
        "An app that allows the user to search for GitHub profiles and related projects",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/GitHubSearcher",
      demoLink:
        "https://apps.musimatic.xyz/jsprojectwebsites/GitHubSearcher/index.html",
    },
    {
      id: 2,
      name: "Simple Liker",
      about:
        "Simple app that allows the user to like a user's comment which then sends a response to the app's server",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/phase-1-building-simple-liker",
      demoLink: "https://samuelbanya.github.io/phase-1-building-simple-liker/",
    },
    {
      id: 3,
      name: "Monsters",
      about:
        "Web app that obtains a list of movie monsters from a 'db.json' based database via 'json-server'",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/phase-1-monsters",
      demoLink: "https://samuelbanya.github.io/phase-1-monsters/",
    },
    {
      id: 4,
      name: "JavaScript Quotes",
      about: "Web app that displays a list of quotes",
      technologies: ["JS (Vanilla)"],
      repoLink:
        "https://github.com/SamuelBanya/phase-1-javascript-quotes-practice",
      demoLink:
        "https://samuelbanya.github.io/phase-1-javascript-quotes-practice/",
    },
    {
      id: 5,
      name: "Ramen Rater",
      about: "Web app that allows you to rate plates of various ramen dishes",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/phase-1-mock-cc-ramen-rater",
      demoLink: "https://samuelbanya.github.io/phase-1-mock-cc-ramen-rater/",
    },
    {
      id: 6,
      name: "Meowser",
      about:
        "My Phase 1 project for Flatiron School Software Bootcamp that allows you to view various cat breeds",
      technologies: ["JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/Meowser",
      demoLink: "https://samuelbanya.github.io/Meowser/meowser.html",
    },
    {
      id: 7,
      name: "Back To The Drawing Board",
      about:
        "70's and 80's inspired comic book artist style drawing board web app that allows you to upload images to use as image references for creating art",
      technologies: ["React", "JS (Vanilla)"],
      repoLink: "https://github.com/SamuelBanya/BackToTheDrawingBoard",
      demoLink:
        "https://apps.musimatic.xyz/pythonprojectwebsites/Bandcamper/tags.html",
    },
    {
      id: 8,
      name: "Bandcamper",
      about:
        "Python 3 based web app that scrapes data from the Bandcamp.com website to allow the user to search bands by genre and location in a simpler way than even on the Bandcamp site itself",
      technologies: ["Python 3"],
      repoLink: "https://github.com/SamuelBanya/Bandcamper",
      demoLink:
        "https://apps.musimatic.xyz/pythonprojectwebsites/Bandcamper/tags.html",
    },
    {
      id: 9,
      name: "Scripture Of The Day",
      about:
        "Web app based upon a CronTab job that generates a random King James Version of the Bible scripture of the day, and displays it on a webpage by using the 'KJV' command line utility.",
      technologies: ["Python 3"],
      repoLink: "https://github.com/SamuelBanya/ScriptureOfTheDay",
      demoLink:
        "https://apps.musimatic.xyz/pythonprojectwebsites/ScriptureOfTheDay/output.html",
    },
    {
      id: 10,
      name: "Collar",
      about:
        "Bootstrap CSS based parody dating website that showcases several high-profile white collar ex-con celebrities",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/BootstrapSites/Collar/index.html",
    },
    {
      id: 11,
      name: "Emulation Nation",
      about:
        "Bootstrap CSS website that discusses the topic of emulators throughout their history and their use today",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "./BootstrapSites/EmulationNation/index.html",
    },
    {
      id: 12,
      name: "Garfield Zone",
      about:
        'Bootstrap CSS website that that discusses the comic, "Garfield", created by the one and only Jim Davis',
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/GarfieldZone/index.html",
    },
    {
      id: 13,
      name: "PageCeption",
      about:
        'Bootstrap CSS website that showcases Chapter 8 in both the "HTML & CSS: Design and Build Websites" and "JavaScript & JQuery: Interactive Front - end Web Development " books as well as play around with iFrame tags',
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "./BootstrapSites/PageCeption/index.html",
    },
    {
      id: 14,
      name: "Sector T",
      about:
        "Bootstrap CSS website that discusses the topic of text editors throughout their history, and the popular ones used today",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/BootstrapSites/SectorT/index.html",
    },
    {
      id: 15,
      name: "Slings",
      about: "Parody website for a night club for stay-at-home dads",
      technologies: ["HTML5"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/BootstrapSites/Slings/index.html",
    },
    {
      id: 16,
      name: "Synth City",
      about:
        "Bootstrap CSS website that discusses the topic of synthesizers and their role in past and present music today",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/SynthCity/index.html",
    },
    {
      id: 17,
      name: "The History Of MS Paint",
      about: "Website that discusses the history of MS Paint",
      technologies: ["HTML5"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/TheHistoryOfMSPaint/index.html",
    },
    {
      id: 18,
      name: "Visit Monaco",
      about:
        "Bootstrap website about the second smallest country in the world, Monaco",
      technologies: ["Bootstrap"],
      repoLink: "https://github.com/samuelbanya",
      demoLink:
        "https://apps.musimatic.xyz/BootstrapSites/VisitMonaco/index.html",
    },
    {
      id: 19,
      name: "Webring",
      about:
        "Webring website created from an Emacs Org Mode doc that contains interesting websites",
      technologies: ["Emacs", "Emacs Lisp", "Emacs Org Mode"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/webring.html",
    },
    {
      id: 20,
      name: "Main Dish Recipes",
      about:
        "Recipes websites built from an Emacs Org Mode doc that contains great main dish recipes",
      technologies: ["Emacs", "Emacs Lisp", "Emacs Org Mode"],
      repoLink: "https://github.com/samuelbanya",
      demoLink: "https://apps.musimatic.xyz/maindishrecipes.html",
    },
    {
      id: 21,
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
