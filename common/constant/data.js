import BagIcon from "@/common/svg/BagIcon"
import HomeIcon from "@/common/svg/HomeIcon"
import UserIcon from "@/common/svg/UserIcon"


export const MY_SKILL = [
    {
        title: "HTML / CSS",
        percentage: 80,
    },
    {
        title: "JAVASCRIPT / TYPESCRIPT",
        percentage: 80,
    },
    {
        title: "NODEJS",
        percentage: 70,
    },
    {
        title: "JAVA / SPRING BOOT",
        percentage: 70,
    },
    {
        title: "REACTJS",
        percentage: 80,
    },
    {
        title: "NEXTJS",
        percentage: 80,
    },
    {
        title: "VUEJS",
        percentage: 60,
    }
]

export const TAB_VALUE = [
    {
        title: "Outstanding Projects",
        key: "ALL"
    }
]

export const PORTPOLIO_SHOW = [
    {
        src: "/assets/image/meeyteam.png",
        type: "ALL",
        detail: {
            project: "Meey Team App",
            tech: "Flutter, NodeJS(ExpressJS), Kafka, Socket.io, firebase, Redis, MinIO, Docker",
            role: "Back-end Developer (NodeJS)",
            link: "",
            description: "A real-time communication platform for Meeyland company, supporting video calls, instant messaging, and company information management.",
            responsible: [
                "Resolved bugs and developed core features including authentication, KYC verification, and avatar management.",
                "Designed and implemented APIs for image and file upload, as well as icon storage for the chat application.",
                "Integrated APIs to handle news upload functionality."
            ]
        }
    },
    {
        src: "/assets/image/ted.png",
        type: "ALL",
        detail: {
            project: "TED App",
            tech: "VueJS, Django, FastApi, Posgresql, Hasura, GraphQL, AWS, Docker",
            role: "Full-stack Developer",
            link: "",
            description: "A clinical management application for tracking patient treatments and medical diagnoses.",
            responsible: [
                "Resolved UI bugs and performed ongoing application maintenance.",
                "Collaborated with clients to gather and clarify feature requirements for development.",
                "Designed and validated GraphQL query statements.",
                "Created SQL migration scripts within Hasura.",
                "Defined new database tables, relationships, and column modifications with corresponding migrations.",
                "Managed Docker configuration for building and deploying the application."
            ]
        }
    },
    {
        src: "/assets/image/hub-dashboard.png",
        type: "ALL",
        detail: {
            project: "Hub-DashBoard",
            tech: "ReactJS, Microsoft Team Api",
            role: "Front-end Developer",
            link: "",
            description: "A Microsoft Teams extension enabling users to manage company announcements, celebrations, and personal task tracking.",
            responsible: [
                "Participated in client meetings to receive task assignments and clarify feature requirements.",
                "Developed a full feature set including email viewer, banners, company news feed, and personal task management.",
                "Provided technical guidance and solutions to team members."
            ]
        }
    },
    {
        src: "/assets/image/int.png",
        type: "ALL",
        detail: {
            project: "Map Int (client & admin)",
            tech: "ReactJS, Fastapi, Postgresql, MinIO, Docker",
            role: "Full-stack Developer",
            link: "",
            description: "A GIS application enabling users to classify map data layers and assign geographic locations.",
            responsible: [
                "Collaborated with clients to clarify requirements and define new features.",
                "Resolved bugs and maintained core functionalities including map point management, layer creation, authentication, and role-based access control.",
                "Implemented new features for layer switching and map view customization.",
                "Mentored and supported team members throughout the development process.",
                "Proposed solutions to accelerate and optimize the development workflow."
            ]
        }
    }, {
        src: "/assets/image/rappid.png",
        type: "ALL",
        detail: {
            project: "Rappid",
            tech: "VueJS, Fastapi, Postgresql, minIO, AWS, graphql, Docker",
            role: "Front End Developer",
            link: "",
            description: "A web application for ordering medical devices and pharmaceuticals, with comprehensive order management.",
            responsible: [
                "Communicated with clients to receive and clarify task requirements.",
                "Resolved bugs and maintained existing features including medicine ordering, billing, and price calculation.",
                "Designed and optimized GraphQL queries.",
                "Managed and coordinated team members to ensure timely delivery.",
                "Conducted code reviews prior to submitting merge requests to the client."
            ]
        }
    },
    {
        src: "/assets/image/tango.png",
        type: "ALL",
        detail: {
            project: "Tango",
            tech: "NextJS, AirTable, FastApi, Docker",
            role: "Front End Developer",
            link: "",
            description: "A travel recommendation platform suggesting tourist attractions, experiences, and services, with integrated surveys for service quality evaluation.",
            responsible: [
                "Translated UI designs into functional features including trip planning steps, user trip views, comments, personalized suggestions, and authentication.",
                "Deployed the application to production environments.",
                "Reviewed code and provided technical solutions to ensure quality standards.",
                "Participated in team meetings and received requirements from the project manager."
            ]
        }
    },
    {
        src: "/assets/image/tango.png",
        type: "ALL",
        detail: {
            project: "SAPP",
            tech: "NextJS, ReactJS, NestJs, Docker, ELK, Kafka",
            role: "Full-Stack Developer",
            link: "",
            description: "An e-learning platform designed to help students prepare for professional certifications including CFA, CMA, and ACCA.",
            responsible: [
                "Reviewed code submissions from team members to maintain code quality.",
                "Developed APIs and implemented features for FAQ, Blog, and Event modules.",
                "Implemented UI components per design specifications for scheduling, class management, grading, classroom, room, and teacher management.",
                "Maintained and resolved bugs in custom npm packages including question display, explanations, chapter rendering, and package updates.",
                "Collaborated with the team to identify and implement effective technical solutions.",
                "Built shared UI components to be reused across the frontend team."
            ]
        }
    },
    {
        src: "/assets/image/bemeup.png",
        type: "ALL",
        detail: {
            project: "Bemeup",
            tech: "NextJS, Supabase, Postgresql",
            role: "Full-Stack Developer",
            link: "",
            description: "A beauty and clinic discovery platform featuring business listings, user reviews, and event management.",
            responsible: [
                "Created SQL functions, restored the database, and designed schema for key tables including events, doctors, and community.",
                "Maintained existing features such as hospital listings, treatments, and review comments, while developing new features for community, events, and SNS.",
                "Participated in team meetings and proposed technical solutions."
            ]
        }
    },
    {
        src: "/assets/image/dream_deco.png",
        type: "ALL",
        detail: {
            project: "Dream Deco",
            tech: "NextJS, Supabase, Postgresql",
            role: "Full-Stack Developer",
            link: "",
            description: "An interior design application for homes and apartments, integrating AI-assisted design suggestions.",
            responsible: [
                "Researched and implemented drag-and-drop functionality with AI-compatible data structures.",
                "Designed the database schema to support application requirements.",
                "Created SQL functions for querying and restoring the database.",
                "Implemented UI components according to design specifications.",
                "Proposed technical solutions to address team challenges."
            ]
        }
    },
    {
        src: "/assets/image/ruleway.png",
        type: "ALL",
        detail: {
            project: "Ruleway",
            tech: "Spring Boot, Supabase, Postgresql",
            role: "Backend Developer",
            link: "",
            description: "A legal document management system leveraging RAG (Retrieval-Augmented Generation) for law-based queries and intelligent analysis.",
            responsible: [
                "Revised and optimized the existing database structure for improved performance.",
                "Developed a web crawler to collect and store all relevant legal pages into the database.",
                "Implemented OCR processing to clean and segment legal documents into individual articles.",
                "Integrated vector database storage for article embeddings to support semantic search.",
                "Implemented authentication and enhanced the article revision workflow in the admin panel.",
                "Developed scheduled jobs to update law statuses based on expiration dates daily and crawl new legislation weekly."
            ]
        }
    }
]

export const NAVIGATION_LIST = [
    {
        title: "Home",
        icon: <HomeIcon height="24" width="24" style="fill-white" />
    },
    {
        title: "About",
        icon: <UserIcon height="24" width="24" style="fill-white" />
    },
    {
        title: "PortFolio",
        icon: <BagIcon height="24" width="24" style="fill-white" />
    }

]