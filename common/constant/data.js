import HomeIcon from "@/common/svg/HomeIcon"
import UserIcon from "@/common/svg/UserIcon"
import BagIcon from "@/common/svg/BagIcon"
import MailIcon from "@/common/svg/MailIcon"
import MessageIcon from "@/common/svg/MessageIcon"


export const MY_SKILL = [
{
    title:"HTML/CSS",
    percentage: 70,
},
{
    title: "JAVASCRIPT/TYPESCRIPT",
    percentage: 80,
},
{
    title: "NODEJS/EXPRESS",
    percentage: 80,
},
{
    title: "DJANGO/FASTAPI",
    percentage: 80,
},
{
    title: "JAVA SPRING",
    percentage: 80,
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
    percentage: 80,
}
]

export const TAB_VALUE = [
    {
        title: "All",
        key: "ALL"
    }, 
    {
        title: "Outstanding",
        key: "OUTSTANDING"
    }
]

export const PORTPOLIO_SHOW = [
    {
        src: "/assets/image/project.jpg",
        type:"OUTSTANDING",
        detail: {
            project: "Website",
            tech: "javacript", 
            link: "",
            description: "hello"
        }
    },
    {
        src: "/assets/image/project.jpg",
        type:"OUTSTANDING",
        detail: {
            project: "Website",
            tech: "javacript", 
            link: "",
            description: "hello"
        }
    },
    {
        src: "/assets/image/project.jpg",
        type:"OUTSTANDING",
        detail: {
            project: "Website",
            tech: "javacript", 
            link: "",
            description: "hello"
        }
    },
    {
        src: "/assets/image/project.jpg",
        type:"MOI",
        detail: {
            project: "Website",
            tech: "javacript", 
            link: "",
            description: "hello"
        }
    },
    {
        src: "/assets/image/project.jpg",
        type:"OUTSTANDING",
        detail: {
            project: "Website",
            tech: "javacript", 
            link: "",
            description: "hello"
        }
    },
    {
        src: "/assets/image/project.jpg",
        type:"OUTSTANDING",
        detail: {
            project: "Website",
            tech: "javacript", 
            link: "",
            description: "hello"
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