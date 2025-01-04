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
    rutgers,
    hackru,
    sewa,
    java,
    python,
    sql,
    aftereffects,
    R,
    C,
    rupizzeria,
    mbs,
    bot,
    hummer,
    painter,
    dystopian,
    externallink
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Development",
      icon: web,
    },
    {
      title: "UI/UX & Graphic Design",
      icon: mobile,
    },
    {
      title: "Data Science",
      icon: backend,
    },
    {
      title: "VFX•Film•Art",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "R",
      icon: R,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "After Effects",
      icon: aftereffects,
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
      name: "c",
      icon: C,
    },
  ];
  
  const experiences = [
    {
      title: "Research Assistant",
      company_name: "Laboratory for Interactive Virtual Enviornments",
      icon: rutgers,
      iconBg: "#E6DEDD",
      date: "May 2024 - September 2024",
      points: [
        "Study of contact simulation in rigid body simulations using 3D graphics.",
        "Use of Dafny to prove correctness of the widely used physics-based skinning algorithm based on dual quaternions.",
        "Explored and applied 3D character animation utilizing Three.js and HTML.",
      ],
    },
    {
      title: "Marketing Graphic/Web Designer",
      company_name: "HackRU",
      icon: hackru,
      iconBg: "#383E56",
      date: "Sept 2023 - Current",
      points: [
        "Designer and organizer for Rutgers University's largest hackathon.",
        "Defined & designed thematic elements for the event's website, social media and other promotional material using Figma and Autodesk Sketch.",
        "Collaborated with cross-functional teams including fellow designers, marketing teams, and developers to create high-quality content.",
      ],
    },
    {
      title: "Java Mentor/Instructor",
      company_name: "SEWA International/CODEie",
      icon: sewa,
      iconBg: "#E6DEDD",
      date: "Dec 2020 - Jan 2021",
      points: [
        "Guided students aged 11-14 through the fundamentals of object-oriented programming using Java and JavaScript.",
        "Graded and outlined lesson plans based on student performance, providing constructive feedback and clarity of concepts.",
      ],
    },
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
      name: "RU Pizzeria",
      description:
        "Android-based application to manage pizza orders, enabling staff to take, customize, and track orders efficiently. Implemented features for dynamic subtotal calculation and customizable 'Build Your Own' pizzas. Ensured an intuitive GUI for selecting pizza styles, sizes, and toppings, while maintaining real-time order updates.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "AndroidStudio",
          color: "green-text-gradient",
        },
        {
          name: "JavaFXPrototyping",
          color: "pink-text-gradient",
        },
      ],
      image: rupizzeria,
      source_code_link: "https://gitfront.io/r/amithi26/njnkUH98Tc8t/rupizzaapp3/",
    },
    {
      name: "Mortgage-Backed Securities Management System",
      description:
        "Backend development of a Java application using JDBC and PostgreSQL to package mortgages into Mortgage-Backed Securities. Implemented advanced filtering capabilities across multiple mortgage attributes, dynamic rate calculations, and secure transactional updates based on a NJ mortgage database.",
      tags: [
        {
          name: "PostgreSQL",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "JDBC",
          color: "pink-text-gradient",
        },
      ],
      image: mbs,
      source_code_link: "https://github.com/amithi26/MBSSystemCS336Backend",
    },
    {
      name: "Pathfinding Bot & Neural Network",
      description:
        "Designed a command-line-based dynamic grid environment and developed an autonomous bot utilizing advanced search algorithms to assess safety probabilities and navigate towards a fire-alarm button. Collected behavioral data from the bot's navigation patterns and trained a neural network model to predict optimal moves based on grid layout, bot position, and probabilistic knowledge.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "PyCharm",
          color: "green-text-gradient",
        },
        {
          name: "GoogleSheets",
          color: "pink-text-gradient",
        },
      ],
      image: bot,
      source_code_link: "https://drive.google.com/drive/folders/1_hGu-Yv-j4erPzskuojgiDkbJEV-g6qC?usp=sharing",
    },
    {
      name: "Hummer",
      description:
        "Team lead for a UI/UX case study: a music-oriented social media app. Conducted public opinion research to identify key app features and user interface preferences. Collaborated in a team of six to design and prototype the social media platform using Figma, emphasizing user experience and engagement-driven design.",
      tags: [
        {
          name: "Figma",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleForms",
          color: "green-text-gradient",
        },
        {
          name: "GoogleSheets",
          color: "pink-text-gradient",
        },
      ],
      image: hummer,
      source_code_link: "https://www.figma.com/proto/p7vG1uezZwYnQsNXKjJKWc/2blue-lofi-wireframe?node-id=265-6438&starting-point-node-id=265%3A7293&t=elDklgvJLz7YvHT2-1",
    },
    {
      name: "Dystopian Escapism",
      description:
        "A dynamic visual effects composition created in Adobe After Effects, combining planar and 3D tracking, rotobrush, mask animation, and advanced color correction techniques. Set in a dystopian futuristic enviornment (and base footage filmed by me), the scene integrates tracked elements seamlessly into a 3D environment, with precise masking and effect keyframing to enhance realism.",
      tags: [
        {
          name: "AfterEffects",
          color: "blue-text-gradient",
        },
        {
          name: "Cinematography",
          color: "green-text-gradient",
        },
      ],
      image: dystopian,
      source_code_link: "https://vimeo.com/1037275982?share=copy",
    },
    {
      name: "\"The Painter\"",
      description:
        "Production design, development, & cinematography for a short psychological drama. Executed camera operations and designed sets to reinforce thematic elements, achieving a nuanced and immersive aesthetic.",
      tags: [
        {
          name: "AcrylicArt",
          color: "blue-text-gradient",
        },
        {
          name: "Cinematography",
          color: "green-text-gradient",
        },
      ],
      image: painter,
      source_code_link: "https://youtu.be/mQ2ftOX-IUQ?si=RZWnIUva2MpVjSVu",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };