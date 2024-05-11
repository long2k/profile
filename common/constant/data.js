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
        title: "Outstanding Projects",
        key: "ALL"
    }
    // {
    //     title: "Outstanding",
    //     key: "OUTSTANDING"
    // }
]

export const PORTPOLIO_SHOW = [
    {
        src: "/assets/image/meeyteam.png",
        type:"ALL",
        detail: {
            project: "Meey Team App",
            tech: "Flutter, NodeJS(ExpressJS), Kafka, Socket.io, firebase, Redis, MinIO, Docker",
            role: "Back-end Developer (NodeJS)",
            link: "",
            description: "This app is used to call video, chat or check information of the Meeyland company."
        }
    },
    {
        src: "/assets/image/ted.png",
        type:"ALL",
        detail: {
            project: "TED App",
            tech: "VueJS, Django, FastApi, Posgresql, Hasura, GraphQL, AWS, Docker",
            role: "Full-stack Developer",
            link: "",
            description: "Management application for patient treatment and diagnoses."
        }
    },
    {
        src: "/assets/image/hub-dashboard.png",
        type:"ALL",
        detail: {
            project: "Hub-DashBoard",
            tech: "ReactJS, Microsoft Team Api",
            role: "Front-end Developer",
            link: "",
            description: "This app is extension of Teams which helps user manage all informations, celebrations of company and staff's tasks"
        }
    },
    {
        src: "/assets/image/int.png",
        type:"ALL",
        detail: {
            project: "Map Int (client & admin)",
            tech: "ReactJS, Fastapi, Postgresql, MinIO, Docker",
            role: "Full-stack Developer",
            link: "",
            description: "The application helps users classify data layers on the map and assign locations to it."
        }
    },{
        src: "/assets/image/rappid.png",
        type:"ALL",
        detail: {
            project: "Rappid",
            tech: "VueJS, Fastapi, Postgresql, minIO, AWS, graphql, Docker",
            role: "Front End Developer",
            link: "",
            description: "Web application that supports ordering medical devices and drugs and managing orders"
        }
    },
    {
        src: "/assets/image/tango.png",
        type:"ALL",
        detail: {
            project: "Tango",
            tech: "NextJS, AirTable, FastApi, Docker",
            role: "Front End Developer",
            link: "",
            description: "The application suggests tourist attractions, experiences and accompanying services. Addition, Survey to evaluate service quality"
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
    }
    // {
    //     title: "Contact",
    //     icon: <MailIcon height="24" width="24" style="fill-white" />
    // },
    // {
    //     title: "Blog",
    //     icon: <MessageIcon height="24" width="24" style="fill-white" />
    // },

]