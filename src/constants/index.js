import {
    mobile,
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
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DevOps Engineer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UIUX Developer",
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
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
      title: "React.js Developer",
      company_name: "Francie(Freelancing)",
      icon: meta,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborated with Clients designers, understood their system design to create high-quality product.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Changed the existing design as per requirements.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "FWB",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Dec 2021 - Feb 2022",
      points: [
        "An local 8-9 employee Startup Cafe-line where I did short, part-time freelancing work",
        "Developed and maintaining web applications using React.js and other related technologies.",
        "Collaborated with owner and designers, and other mentors to create high-quality website.",
        "Implemented responsive design and ensuring cross-browser compatibility.",
        "Also designed and made their user interface and graphical faces such as logo and banners using figma and Illustrator",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Freelancing",
      icon: meta,
      iconBg: "#383E56",
      date: "May 2022 - June 2022",
      points: [
        "Developed and maintained web applications using React.js and other related technologies.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participated in maintaining the site as they opted for it",
      ],
    },
    {
      title: "DevOpse Engineer",
      company_name: "Freelancing",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - April",
      points: [
        "Performed in setting up CI/CD pipelines to automate the build, testing, and deployment of their applications using tools like Jenkins, GitLab CI/CD",
        "Assist clients in optimizing application performance by analyzing bottlenecks, identifying performance issues, and suggesting improvements in areas such as database tuning, caching, or network optimization",
        "Implemented security best practices, setting up access controls, and ensuring compliance with industry regulations HIPAA.",
        "Learned working on DevOps tools on an actual project"
      ],
    },
  ];
 /* 
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
  ]; */
  
  const projects = [
    {
      name: "Bug-Tracker",
      description:
        "Web-based platform that is made on react that allows user to track Bugs and perform CRUD operations to manage thier application",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "node",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Share-Me",
      description:
        "Web application with all advanced Social Media features, such as Google Authentication, create, edit, delete and save posts, like and comment on other people's posts, search and filter images and much more, ShareMe is the best Image Sharing Social Media App",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,/* testimonials */projects };