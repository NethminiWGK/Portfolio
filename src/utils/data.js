import Img1 from '../assets/fe.png';
import Img2 from '../assets/be.png';
import Img3 from '../assets/tools.png';
import Img4 from '../assets/se.png';


export const SKILLS = [
    {
        title:"Web Development",
        icon: Img1,
        skills: [
            {skills: "JavaScript", percentage: "85%"},
            {skills: "React Js", percentage: "90%"},
            {skills: "Next Js", percentage: "70%"},
            {skills: "Node Js", percentage: "80%"},

        ],
    },

    {
        title:"Programming",
        icon:   Img2,
        skills: [
            {skills: "Java", percentage: "85%"},
            {skills: "C", percentage: "95%"},
           
        ],
    },

    {
        title:"Databases",
        icon: Img4,
        skills: [
            {skills: "Postgre SQL", percentage: "90%"},
            {skills: "MySQL", percentage: "90%"},
            {skills: "MSSQL", percentage: "85%"},
            {skills: "MongoDB", percentage: "70%"},
        ],
    },

    {
        title:"Others",
        icon: Img3,
        skills: [
            {skills: "Github", percentage: "90%"},
            {skills: "Figma", percentage: "95%"},
            {skills: "Postman", percentage: "95%"},
        ],
    },

   
];