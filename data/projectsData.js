import { nanoid } from "nanoid";

export const projectsData = [
  {
    id: nanoid(),
    name: "Memories",
    image: "/images/memories.png",
    description:
      "A MERN Stack Social Media Application with Google OAuth Authentication",
    tags: ["MERN", "React", "NodeJS"],
    githubLink: "https:///github.com",
    projectLink: "https://mern-memories-v5.netlify.app",
  },
  {
    id: nanoid(),
    name: "DJ Events",
    image: "/images/djevents.png",
    description:
      "Full Stack Application for Musical Events with maps and geolocation",
    tags: ["NextJS", "Strapi", "React"],
    githubLink: "https://github.com/indranildeveloper/dj-events-frontend",
    projectLink: "https://indranildeveloperdjevents.vercel.app/",
  },
  {
    id: nanoid(),
    name: "Music Player",
    image: "/images/musicplayer.png",
    description: "Vanilla JavaScript Music Player",
    tags: ["JavaScript", "HTML5", "CSS3"],
    githubLink: "https://github.com/indranildeveloper/js-music-player",
    projectLink: "https://jsmusicplayer-indranildeveloper.netlify.app",
  },
  {
    id: nanoid(),
    name: "Github Finder",
    image: "/images/githubfinder.png",
    description:
      "Github Finder Application that finds and shows Github Profiles with details",
    tags: ["React", "Github API"],
    githubLink: "https://github.com/indranildeveloper/github-finder-app",
    projectLink: "https://github-finder-app-indranildeveloper.vercel.app/",
  },
  {
    id: nanoid(),
    name: "Portfolio",
    image: "/images/portfolio.png",
    description: "Full Stack Portfolio website with Blog functionality",
    tags: ["GatsbyJS", "Strapi", "GraphQL"],
    githubLink: "https://github.com/indranildeveloper/gatsby-portfolio",
    projectLink: "https://gatsbyportfolio-indranildeveloper.netlify.app",
  },
  {
    id: nanoid(),
    name: "Codepen Clone",
    image: "/images/codepen.png",
    description: "Online Code Editor like Codepen",
    tags: ["React", "CodeMirror"],
    githubLink: "https://github.com/indranildeveloper/react-codepen-clone",
    projectLink: "https://react-codepen-clone-indranildeveloper.netlify.app",
  },
];
