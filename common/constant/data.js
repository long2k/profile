import HomeIcon from "@/common/svg/HomeIcon"
import UserIcon from "@/common/svg/UserIcon"
import BagIcon from "@/common/svg/BagIcon"
import MailIcon from "@/common/svg/MailIcon"
import MessageIcon from "@/common/svg/MessageIcon"


export const MY_SKILL = [
{
    title:"HTML/CSS",
    percentage: 80,
},
{
    title: "JAVASCRIPT/TYPESCRIPT",
    percentage: 80,
},
{
    title: "NODEJS/EXPRESS",
    percentage: 70,
},
{
    title: "DJANGO/FASTAPI",
    percentage: 70,
},
{
    title: "JAVA SPRING",
    percentage: 50,
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
        title: "All",
        key: "ALL"
    }
    // {
    //     title: "Outstanding",
    //     key: "OUTSTANDING"
    // }
]

export const PORTPOLIO_SHOW = [
    {
        src: "/assets/image/web-admin.png",
        type:"OUTSTANDING",
        detail: {
            project: "Web-Admin",
            tech: "VueJS, Nodejs(Express.js), Redis, MongoDB",
            role: "Back-end Developer (Nodejs)",
            link: "This app is security, so I cannot share link.",
            description: "This app is used to manage all positions and services (meeyteam, online learning ...) of the company."
        }
    },
    {
        src: "/assets/image/meey-team.png",
        type:"OUTSTANDING",
        detail: {
            project: "Meey Team App",
            tech: "Flutter, Nodejs(Expressjs), Kafka, Socket.io, firebase, Redis, MinIO",
            role: "Back-end Developer (Nodejs)",
            link: "",
            description: "This app is used to call video, chat or check information of the company."
        }
    },
    {
        src: "/assets/image/ted.png",
        type:"OUTSTANDING",
        detail: {
            project: "TED App",
            tech: "Vuejs, Django, FastApi, Posgresql, Hasura, GraphQL",
            role: "Full-stack Developer",
            link: "",
            description: "Management application for patient treatment and diagnoses."
        }
    },
    {
        src: "/assets/image/hub-board.png",
        type:"MOI",
        detail: {
            project: "Hub-DashBoard",
            tech: "Reactjs, Microsoft Team",
            role: "Front-end Developer (Reactjs)",
            link: "",
            description: "hello"
        }
    },
    {
        src: "/assets/image/int-map.png",
        type:"OUTSTANDING",
        detail: {
            project: "Map Int (client & admin)",
            tech: "Reactjs, Fastapi, Postgresql, minIO",
            role: "Full-stack Developer",
            link: "",
            description: "The application helps users classify data layers and assign locations to it."
        }
    },
    // {
    //     src: "/assets/image/project.jpg",
    //     type:"OUTSTANDING",
    //     detail: {
    //         project: "CADAS OIS",
    //         tech: "Java Spring, TypeScript, Winter-cardinal", 
    //         role: "Full-stack Developer (Nodejs)",
    //         link: "",
    //         description: "hello"
    //     }
    // },
    {
        src: "/assets/image/tango.png",
        type:"OUTSTANDING",
        detail: {
            project: "Tango App",
            tech: "Fastapi, Django, Airtable, Nextjs", 
            role: "Front-end Developer (Nextjs)",
            link: "",
            description: "The application supports scheduling and management of tourist destinations"
        }
    },
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
        icon:  <BagIcon height="24" width="24" style="fill-white" />
    },
    {
        title: "Contact",
        icon: <MailIcon height="24" width="24" style="fill-white" />
    },
    // {
    //     title: "Blog",
    //     icon: <MessageIcon height="24" width="24" style="fill-white" />
    // },

]