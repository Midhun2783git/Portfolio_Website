import { h } from "maath/dist/misc-19a3ec46.esm";
import {
mobile,
backend,
creator,
web,
javascript,
typescript,
html,
python,
java,
css,
reactjs,
redux,
tailwind,
nodejs,
mongodb,
git,
figma,
docker,
meta,
starbucks,
tesla,
diez,
stuDorm,
shopify,
blender,
carrent,
jobit,
tripguide,
brainwave,
tic,
rpi,
threejs,
studdorm,
seaexp,
mongm,
} from "../assets/assets";

export const navLinks = [
{
    id: "about",
    title: "About",
},
{
    id: "work",
    title: "Work",
},
{
    id: "contact",
    title: "Contact",
},
];

const services = [
{
    title: "Web Development",
    icon: web,
},
{
    title: "App Development",
    icon: mobile,
},
{
    title: "UI/UX Designing",
    icon: backend,
},
{
    title: "Game Development",
    icon: creator,
},
];

const technologies = [
{
name: "Python",
icon: python,
},
{
name: "Java",
icon: java,
},
{
    name: "HTML 5",
    icon: html,
},
{
    name: "CSS 3",
    icon: css,
},
{
    name: "JavaScript",
    icon: javascript,
},
{
    name: "TypeScript",
    icon: typescript,
},
{
    name: "React JS",
    icon: reactjs,
},
// {
//     name: "Redux Toolkit",
//     icon: redux,
// },
{
    name: "Tailwind CSS",
    icon: tailwind,
},
{
    name: "Node JS",
    icon: nodejs,
},
{
    name: "Blender",
    icon: blender,
},
// {
//     name: "Three JS",
//     icon: threejs,
// },
{
    name: "git",
    icon: git,
},
{
    name: "figma",
    icon: figma,
},
{
    name: "docker",
    icon: docker,
},
];

const experiences = [
{
    title: "Web Developer",
    company_name: "The Student Dorm",
    icon: stuDorm,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
    "Developing a website using HTML, CSS and Javascript.",
    "Collaborating with team .",
    "Implementing responsive design and ensuring browser compatibility.",
    "Participating in code reviews and providing constructive feedback.",
    ],
},
{
    title: "Software Intern",
    company_name: "Dubai Integrated Economic Zones",
    icon: diez,
    iconBg: "#E6DEDD",
    date: "May 2024 - Jul 2024",
    points: [
    "Engaged in database management tasks, optimizing data storage and retrieval processes.",
    "Contributed to graphic design projects, creating user-friendly visuals and interfaces.",
    "Assisted in software development, collaborating on feature implementation and testing.",
    "Participating in code reviews and providing constructive feedback.",
    ],
},
// {
//     title: "Web Developer",
//     company_name: "Shopify",
//     icon: shopify,
//     iconBg: "#383E56",
//     date: "Jan 2022 - Jan 2023",
//     points: [
//     "Developing and maintaining web applications using React.js and other related technologies.",
//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//     "Implementing responsive design and ensuring cross-browser compatibility.",
//     "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
// },
// {
//     title: "Full stack Developer",
//     company_name: "Meta",
//     icon: meta,
//     iconBg: "#E6DEDD",
//     date: "Jan 2023 - Present",
//     points: [
//     "Developing and maintaining web applications using React.js and other related technologies.",
//     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
//     "Implementing responsive design and ensuring cross-browser compatibility.",
//     "Participating in code reviews and providing constructive feedback to other developers.",
//     ],
// },
];

const testimonials = [
{
    testimonial:
    "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial:
    "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
    testimonial:
    "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
    name: "Brainwave",
    description:
    "Brainwave facilitates real-time collaboration via chat, video calls, and file sharing, with integrated tools for project management, focusing on accessibility and user-friendly design.",
    tags: [
    {
        name: "typescript",
        color: "blue-text-gradient",
    },
    {
        name: "javascript",
        color: "green-text-gradient",
    },
    {
        name: "CSS",
        color: "pink-text-gradient",
    },
    ],
    image: brainwave,
    source_code_link: "https://github.com/Midhun2783git/brain-wave",
},
{
    name: "Mastermind",
    description:
    "The Mastermind Game implements the classic game in C, utilizing a Raspberry Pi for input/output operations and game logic functions.",
    tags: [
    {
        name: "C",
        color: "blue-text-gradient",
    },
    {
        name: "assembly",
        color: "green-text-gradient",
    },
    {
        name: "Raspberry-Pi",
        color: "pink-text-gradient",
    },
    ],
    image: rpi,
    source_code_link: "https://github.com/Midhun2783git/Mastermind_Game",
},
{
    name: "Tic-Tac-Toe",
    description:
    "The Tic_Tac_Toe game implements the a game in Java, featuring game logic, user interface, and AI agents for single-player mode.",
    tags: [
    {
        name: "java",
        color: "blue-text-gradient",
    },
    ],
    image: tic,
    source_code_link: "https://github.com/Midhun2783git/Tic_Tac_Toe",
},
{
    name: "Student Dorm",
    description:
    "The Student Dorm website focuses on developing a management platform for student dormitories, handling room assignments, facilities, and other important information for students.",
    tags: [
    {
        name: "HTML",
        color: "blue-text-gradient",
    },
    {
        name: "CSS",
        color: "green-text-gradient",
    },
    {
        name: "javascript",
        color: "pink-text-gradient",
    },
    ],
    image: studdorm,
    source_code_link: "https://github.com/Midhun2783git/Stud_Dorm_website",
},
{
    name: "Underwater Exploration",
    description:
    "The Underwater Exploration features a project utilizing PDDL (Planning Domain Definition Language) for automated planning and scheduling in sea exploration initiatives.",
    tags: [
    {
        name: "PDDL",
        color: "blue-text-gradient",
    },
    ],
    image: seaexp,
    source_code_link: "https://github.com/Midhun2783git/Sea_Exploration",
},
{
    name: "Monster Game",
    description:
    "The Monster game is a project for developing a game using Prolog. Prolog is a logic programming language associated with artificial intelligence and computational linguistics.",
    tags: [
    {
        name: "prolog",
        color: "blue-text-gradient",
    },
    ],
    image: mongm, 
    source_code_link: "https://github.com/Midhun2783git/Monster_game-",
},
];

export { services, technologies, experiences, testimonials, projects };