const firstStopThumbnail = require("../assets/projectThumbnails/firstStopThumbnail.jpg");
const getATatThumbnail = require("../assets/projectThumbnails/getatatThumbnail.jpg");
const tieInThumbnail = require("../assets/projectThumbnails/tieinThumbnail.jpg");
const crowdEaseThumbnail = require("../assets/projectThumbnails/crowdeaseThumbnail.jpg");
const portfolioThumbnail = require("../assets/projectThumbnails/portfolioThumbnail.jpg");
const threedprintThumbnail = require("../assets/projectThumbnails/3dprintThumbnail.jpg");

export default [
  {
    projectTitle: "First Stop App",
    projectContent:
      "A project to learn the basics of UX and Figma prototyping. My contributions here were helping in designing the surveys, personas, user journey and the user flow. Also contributed with the Figma prototype by creating components.",
    projectImageUrl: firstStopThumbnail,
    tags: [
      { tagName: "Figma", tagColor: "blueTag" },
      { tagName: "UX", tagColor: "purpleTag" },
    ],
  },
  {
    projectTitle: "Get a Tat",
    projectContent:
      "Get a Tat connects tattoo artists with enthusiasts, displaying previous works, style, and info while scheduling appointments. Built with HTML, CSS and Javascript, the app streamlines the process of finding the perfect artist.",
    projectImageUrl: getATatThumbnail,
    tags: [
      { tagName: "Figma", tagColor: "blueTag" },
      { tagName: "Html", tagColor: "greenTag" },
      { tagName: "CSS", tagColor: "greenTag" },
      { tagName: "Javascript", tagColor: "greenTag" },
      { tagName: "Firebase", tagColor: "redTag" },
      { tagName: "PWA", tagColor: "purpleTag" },
    ],
  },
  {
    projectTitle: "Tie-in",
    projectContent:
      "A platform to connect students and businesses to engage with each other. A responsive web application for the industry to support projects or for a student to work on business ideas.",
    projectImageUrl: tieInThumbnail,
    tags: [
      { tagName: "Figma", tagColor: "blueTag" },
      { tagName: "Javascript", tagColor: "greenTag" },
      { tagName: "NodeJS", tagColor: "orangeTag" },
      { tagName: "React", tagColor: "orangeTag" },
      { tagName: "Express", tagColor: "yellowTag" },
      { tagName: "MongoDB", tagColor: "redTag" },
      { tagName: "Netlify", tagColor: "purpleTag" },
      { tagName: "Railway", tagColor: "purpleTag" },
    ],
  },
  {
    projectTitle: "Crowdease",
    projectContent:
      "A mobile app that uses data analysis and visualitzation to handle the issues associated with crowd-tracking and resource management in restaurants.",
    projectImageUrl: crowdEaseThumbnail,
    tags: [
      { tagName: "Figma", tagColor: "blueTag" },
      { tagName: "Typescript", tagColor: "greenTag" },
      { tagName: "NodeJS", tagColor: "orangeTag" },
      { tagName: "React Native", tagColor: "orangeTag" },
      { tagName: "Express", tagColor: "yellowTag" },
      { tagName: "MongoDB", tagColor: "redTag" },
      { tagName: "AWS EC2", tagColor: "purpleTag" },
    ],
  },
  {
    projectTitle: "This portfolio!",
    projectContent:
      "I made this portfolio site using React Native Web and Expo",
    projectImageUrl: portfolioThumbnail,
    tags: [
      { tagName: "Figma", tagColor: "blueTag" },
      { tagName: "Javascript", tagColor: "greenTag" },
      { tagName: "React Native Web", tagColor: "orangeTag" },
      { tagName: "Expo", tagColor: "orangeTag" },
      { tagName: "Github Pages", tagColor: "purpleTag" },
    ],
  },
  {
    projectTitle: "3D Printing Peru Website",
    projectContent:
      "3D Printing Peru company website. Features news, 3d printer and material listing and search.",
    projectImageUrl: threedprintThumbnail,
    tags: [
      { tagName: "Figma", tagColor: "blueTag" },
      { tagName: "Javascript", tagColor: "greenTag" },
      { tagName: "ReactJs", tagColor: "orangeTag" },
      { tagName: 'Ant Design', tagColor: 'yellowTag'}
    ],
  },
];
