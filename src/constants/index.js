import {
    mobile,
    aws,
    CryptoMart,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    Imaginify,
    git,
    figma,
    docker,
    meta,
    threejs,
    ShopNest
  } from "../assets";
  
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "DSA Problem Solving",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Amazon Web Services",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "node JS",
      icon: nodejs
    },
    { 
      name: "mongoDB",
      icon: mongodb

    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "typeScript",
      icon: typescript
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
    
  ];
  
  const experiences = [
    {
      title: "JavaScript",
      company_name: "",
      icon: javascript,
      iconBg: "#383E56",
      date: "",
      points: [
        "while learning JavaScript made various demo project using various tools",
        "Learned Oops in Js",
        "Ascynchronous JavaScript/promises",
        "Advanced DOM and Events",
      ],
    },
    {
      title: "React",
      company_name: "",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Learned react and it's tools like redux toolkit",
        "Learned How to fetch API",
        "Authenticating react App",
        "Fetching Database,storing to Database",
        "Basics of NextJs"
      ],
  },{
    title: "Node",
      company_name: "",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Learned node and its framework expressjs",
        "Learned how authentication and authorization work",
        "Implemented Payment Gateway",
        "Learned mongoDB and integrated database support"
      ],
  },
    {
      title: "Amazon Web Services",
      company_name: "",
      icon: aws,
      iconBg: "#383E56",
      date: "",
      points: [
        "Learned cloud foundation course of AWS",
        "Later on learned about AWS cloud Architecture",
        "Tools like EC2,S3,DynamoDB etc",
              ],
    },
    {
      title: "Data Structure & Algorithm",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Learning Data structure and algorithm",
        "Regularly solves DSA question on Leetcode and gfg",
        "Have solved 500+ questions on leetcode"
           ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "Imaginify",
      description:
        "Web-based platform that allows you to manipulate images such as generative filling,background removal,color changing,object removing etc.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typeScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
      ],
      image: Imaginify,
      source_code_link: "https://github.com/avinash-2912/Imaginify",
    },
    {
      name: "CryptoMart",
      description:
        "Web-based platform that allows you to see crypto currencies real time details and News,you can also compare different crypto currencies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ant desgin",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: CryptoMart,
      source_code_link: "https://cryptoomartt.netlify.app/",
    },
    {
      name: "ShopNest",
      description:
        "It is an E-commerce website that allow user to buy various products,placer order and do payment",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ejs",
          color: "pink-text-gradient",
        },
      ],
      image:ShopNest,
      source_code_link: "https://github.com/avinash-2912/shopNest",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };