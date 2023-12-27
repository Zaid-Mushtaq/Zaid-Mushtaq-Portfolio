import { digits, sfccIcon, fypIcon } from "../assets/images";
import {
    book,
    contact,
    css,
    express,
    git,
    github,
    html,
    bootstrap,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    chakraui,
    nextjs,
    nodejs,
    vtrack,
    react,
    redux,
    sass,
    dice,
    tailwindcss,
    numberguess,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: chakraui,
        name: "Chakra-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Engineer (SFCC Full stack Web Developer)",
        company_name: "Digitscom Technologies",
        icon: sfccIcon, 
        iconBg: "#accbe1",
        date: "Oct 2021 - Present",
        points: [
            "Spearheaded the development of multiSites e-commerce Progressive Web App (PWA) using React and Node.js for seamless and engaging user experiences.",
            "Integrated and deployed e-Commerce (SFCC) applications to ensure optimal performance and functionality.",
            "Collaborated in the creation of dynamic and responsive frontend components using React with Chakra UI, Material UI & Bootstrap.",
            "Translated Figma designs into ReactJS components for a polished and professional appearance.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
            "Analyzed, debugged, and troubleshooted SFCC implementation issues.",
            "Integrated third-party services via SFCC services framework, including React PayPal.",
            "Wrote backend batch jobs, worked in controllers, scripts, and ISML templates.",
            "Customized Business Manager for effective merchandise management.",
            "Regularly attended Scrum Meetings, ensuring effective communication and collaboration.",
            "Provided updates to Team Lead and Project Manager on daily progress.",
        ],
    },
    {
        title: "Intern Web Developer",
        company_name: "Digitscom Technology",
        icon: digits,
        iconBg: "#b7e4c7", 
        date: "Dec 2020 - Nov 2021",
        points: [
            "Collaborated in a team environment to develop a web application.",
            "Worked on Frontend UI and Backend development.",
            "Gained foundational knowledge in web development, including client/server-side concepts.",
            "Successfully contributed to the development of key features, enhancing the overall functionality and user experience of the web application.",
            "Leveraged hands-on experience with Figma designs to implement polished and professional ReactJS components.",
            "Engaged in bug fixes, code changes, and additional feature implementations.",
            "Demonstrated adaptability and a quick learning curve, rapidly gaining proficiency in SFCC development practices.",
        ],
    },
    {
        title: "Full Stack Developer (Final Year Project)",
        company_name: "Self-Made",
        icon: fypIcon,
        iconBg: "#a2d2ff",
        date: "May 2022 - Jun 2023",
        points: [
            "Developed a real-time vehicle tracking application using React, Flutter, CSharp, and MongoDB.",
            "Led the project from conceptualization to implementation, enhancing tracking capabilities for transportation companies, rental car managers, and government agencies.",
            "Collaborated with a team to ensure the successful integration of React components and Flutter for a seamless user experience.",
            "Addressed and resolved challenges related to real-time data synchronization and geographical tracking.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Zaid-Mushtaq',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/zain-ul-abideen-/',
    }
];

export const projects = [
    {
        iconUrl: vtrack,
        theme: 'btn-back-red',
        name: 'vTrack: Real-Time Vehicle Tracking System',
        description: 'Developed a comprehensive application using React, Flutter, CSharp, and MongoDB for real-time vehicle tracking. Led the project from conceptualization to implementation, enhancing tracking capabilities for transportation companies, rental car managers, and government agencies. Collaborated with a team to ensure the successful integration of React components and Flutter for a seamless user experience. Addressed and resolved challenges related to real-time data synchronization and geographical tracking.',
        link: 'https://github.com/Zaid-Mushtaq/final-year-project',
    },
    {
        iconUrl: numberguess,
        theme: 'btn-back-green',
        name: 'NumberWizard: Interactive Number Guessing Game',
        description: 'Developed an engaging web application using HTML, CSS, and JavaScript that challenges users to guess a randomly generated number. Implemented a clean and intuitive user interface for an enjoyable gaming experience.',
        link: 'https://zaid-mushtaq.github.io/Guess-My-Number/',
    },
    {
        iconUrl: book,
        theme: 'btn-back-blue',
        name: 'BookExpress: Social Book Review Platform',
        description: ' Created a feature-rich web application using Node.js, Express, JWT authentication, and MongoDB, establishing a dynamic platform for book enthusiasts. Users can seamlessly share, discover, and engage with book reviews in a secure and interactive environment. Implemented essential features, including user authentication and authorization, to enhance the overall user experience on the web platform.',
        link: 'https://github.com/Zaid-Mushtaq/ExpressBooksReview',
    },
    {
        iconUrl: dice,
        theme: 'btn-back-pink',
        name: 'RollIt: Multiplayer Dice Game',
        description: 'Created a dynamic and interactive multiplayer dice game using HTML, CSS, and JavaScript. Players take turns rolling virtual dice and strategically accumulate points, adding a competitive twist to a classic game.',
        link: 'https://zaid-mushtaq.github.io/pig-game/',
    },
    
];