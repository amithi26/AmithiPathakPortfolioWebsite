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
    blender
  } from "../assets";
  import { projectImages } from "./projectImages";
  
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
      icon: mobile,
    },
    {
      title: "UI/UX & Graphic Design",
      icon: web,
    },
    {
      title: "Data Science",
      icon: creator,
    },
    {
      title: "VFX•Film•Art",
      icon: backend,
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
      name: "blender",
      icon: blender
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
      name: "SwipeConnect",
      description:
        "Frontend development for an iOS swipe-based professional and academic matching app for mentorship. Use of React Native and TypeScript to implement and style swipe cards/animations, filtering, and sign-up. Worked closely with backend team to connect API endpoints created using Flask and access database configured in Python. Development in a team of five within an Agile and Scrum workflow using Jira.",
      tags: [
        {
          name: "ReactNative",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "Jira",
          color: "pink-text-gradient",
        },
      ],
      image: projectImages.swipeConnect,
      source_code_link: "https://github.com/aecone/Rumble",
    },
    {
      name: "Game Control Station",
      description:
        "Design and development a 3D web-based game featuring an interactive lobby with first-person navigation into three mini-games-- each with their own artistic style and niche. Created all mini-games and gameplay logic using JavaScript and Three.js. Modeled/textured environments and assets in Blender.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
      ],
      image: projectImages.gameControlStation,
      source_code_link: "https://game-control-station.vercel.app/",
    },
    {
      name: "Puff",
      description:
        "3D animated short film created over the course of three weeks. Modeling, shading/texturing, rigging, look development, animation done using Blender. Editing in CapCut.",
      tags: [
        {
          name: "Blender",
          color: "blue-text-gradient",
        },
        {
          name: "CapCut",
          color: "green-text-gradient",
        }
      ],
      image: projectImages.puff,
      source_code_link: "https://game-control-station.vercel.app/",
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
      image: projectImages.hummer,
      source_code_link: "https://www.figma.com/proto/p7vG1uezZwYnQsNXKjJKWc/2blue-lofi-wireframe?node-id=265-6438&starting-point-node-id=265%3A7293&t=elDklgvJLz7YvHT2-1",
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
      image: projectImages.mbs,
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
          name: "PyTorch",
          color: "green-text-gradient",
        },
        {
          name: "GoogleSheets",
          color: "pink-text-gradient",
        },
      ],
      image: projectImages.bot,
      source_code_link: "https://drive.google.com/drive/folders/1_hGu-Yv-j4erPzskuojgiDkbJEV-g6qC?usp=sharing",
    },
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
          name: "JavaFX",
          color: "pink-text-gradient",
        },
      ],
      image: projectImages.rupizzeria,
      source_code_link: "https://gitfront.io/r/amithi26/njnkUH98Tc8t/rupizzaapp3/",
    },
    {
      name: "Disco-Pixel Effect with Webcam Feed",
      description:
        "Real-time pixelation effect for webcam video using Python and OpenCV, with interactive controls for grid size and color channels. Users can adjust the pixel grid and toggle color channels (red, green, blue) while applying a customizable filled or unfilled circle pattern for the effect.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
      ],
      image: projectImages.pixelEffect,
      source_code_link: "https://github.com/amithi26/Webcam-Effects",
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
      image: projectImages.dystopian,
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
      image: projectImages.painter,
      source_code_link: "https://youtu.be/mQ2ftOX-IUQ?si=RZWnIUva2MpVjSVu",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };