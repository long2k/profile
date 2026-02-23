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
            description: "This app is used to call video, chat or check information of the Meeyland company.",
            responsible: [
                "Fix bug and develop some feature: authentication, KYC, avatar, ",
                "Create Api to upload images, files and storage icon for chat app",
                "Integrate api to handle upload news"
            ]
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
            description: "Management application for patient treatment and diagnoses.",
            responsible: [
                "Fix bug UI and maintain app",
                "have a meeting with client to declare features to development",
                "check and create query statement with graphql",
                "create sql to create migration in hasura",
                "create new table, relation, and edit column and create migrations",
                "handle docker to build and run application"
            ]
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
            description: "This app is extension of Teams which helps user manage all informations, celebrations of company and staff's tasks",
            responsible: [
                "meeting with client to receive tasks and clarify new feature",
                "Developement all feature such as: view mail, banner, company news, personal tasks",
                "Find solution and help members in my team"
            ]
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
            description: "The application helps users classify data layers on the map and assign locations to it.",
            responsible: [
                'meeting with client to clarify tasks and new features',
                'fix bug and maintain app eg: manage point in map, create layer, authentication, role',
                'handle news feature: change layer, map view',
                'intruct and help member in team',
                'suggest solution and boost the development process'
                
            ]
        }
    },{
        src: "/assets/image/rappid.png",
        type:"ALL",
        detail: {
            project: "Rappid",
            tech: "VueJS, Fastapi, Postgresql, minIO, AWS, graphql, Docker",
            role: "Front End Developer",
            link: "",
            description: "Web application that supports ordering medical devices and drugs and managing orders",
            responsible: [
                'meeting and chat with client, clarify received tasks',
                'fix bug and maintain old feature: order medicine, get bill, caculate price, ...',
                'handle graphql query',
                'Manage the team members',
                'Review code before sending merge request to client'
            ]
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
            description: "The application suggests tourist attractions, experiences and accompanying services. Addition, Survey to evaluate service quality",
            responsible: [
                'recieve the design and develop feature such as step section to get successful trip, view trip`s users, comment trip, view suggestion in each trip, authentication',
                'deploy app',
                'review code and give solution',
                'meeting with team and receive the requirement from project manager'
            ]
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