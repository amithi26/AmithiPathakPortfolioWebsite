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
    blender,
    aswf,
    winlab,
    softdev,
    design,
    vfx,
    datascience,
    maya,
    csharp,
    unity,
    houdini,
    pytorch,
    graphite,
    rufp,
    nasa
  } from "../assets";
  import { projectImages } from "./projectImages";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Experience",
    },
    {
      id: "tech",
      title: "Tech",
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
      icon: softdev,
    },
    {
      title: "VFX & Animation",
      icon: vfx,
    },
    {
      title: "UI/UX & Graphic Design",
      icon: design,
    },
    {
      title: "Data Science",
      icon: datascience,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "PyTorch",
      icon: pytorch,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "React",
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
      name: "Blender",
      icon: blender
    },
    {
      name: "Maya",
      icon: maya
    },
    {
      name: "After Effects",
      icon: aftereffects,
    },
    {
      name: "Three.js",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "C",
      icon: C,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "Houdini",
      icon: houdini,
    },
  ];
  
  const experiences = [
    {
      title: "AR/VR/XR Development Intern",
      company_name: "NASA Glenn Research Center",
      icon: nasa,
      iconBg: "#E6DEDD",
      date: "June 2026 - August 2026",
      points: [
        "Researched, explored, and documented the capabilities of Unreal 5.7.4 technologies for integration into the Graphics and Visualization (GVIS) Lab's workflow across two projects:",
        "Introduced Unreal Engine's nDisplay as a streamlined alternative to the lab's existing 4-instance Unity-based CAVE workflow, reducing system complexity to a single instance. Applied perspective projection and motion-tracking principles and mapped coordinate system alignment with DTrack. Built a working prototype and authored technical documentation, establishing the foundation for the lab's ongoing nDisplay development.",
        "Independently ideated and executed an interactive VR visualization of a Lunar Base for Meta Quest 3, using ESA's Unreal XR Plugin and Blueprint visual scripting. Modeled and textured 3D assets in Blender; designed the Unreal environment, integrating external CAD assets. Configured an AI assistant via ESA's built-in plugin support to deliver real-time information on lunar rock samples to users. Personally exhibited the project to 15+ NASA employees at center-wide VR showcase event.",
        "Delivered VR/XR-focused lab tours and outreach presentations to audiences ranging from schoolchildren to research scientists and industry professionals, translating technical concepts into accessible demonstrations.",
      ],
    },
    {
      title: "AR Research Intern",
      company_name: "WINLAB Rutgers",
      icon: winlab,
      demoReelUrl: "https://www.orbit-lab.org/wiki/Other/Summer/2025/OH2025#P20",
      iconBg: "#E6DEDD",
      date: "May 2025 - December 2025",
      points: [
        "Developed a collaborative AR art & 3D modeling platform on Microsoft HoloLens using Unity and C# scripting.",
        "Implemented multi-user drawing spaces, undo/redo functionality, and player avatars with MQTT server networking in a Linux VM for real-time synchronization.",
        "Identified critical performance bottlenecks and redesigned project backend, migrating from LevelDB to PostgreSQL.",
        "Architected new database schema and optimized data access patterns, achieving 73% latency reduction for real-time AR collaboration.",
        "Presented weekly progress updates and a final research poster to supervisors and stakeholders.",
        "Design and implementation of AR/VR curriculum for a Rutgers University certification program.",
      ],
    },
    {
      title: "Summer Learning Mentee",
      company_name: "Academy Software Foundation",
      icon: aswf,
      demoReelUrl: "https://drive.google.com/file/d/1CJBwuG9XoK_IftsnEcJHEP_WjbjX45FF/view?usp=sharing",
      iconBg: "#E6DEDD",
      date: "June 2025 - August 2025",
      points: [
        "Among 20 individuals accepted worldwide to explore open-source software development for visual effects and animation in film.",
        "Mentored and attended talks by industry professionals from leading studios such as ILM, Pixar, Disney, DreamWorks, CoSA VFX.",
        "Coursework and professional mentorship in computer graphics and VFX/animation production pipelines and technology.",
        "Developed a procedural modeling tool for tree branches for Maya using PyQt libraries and Python scripting.",
        "Developed a procedural turntable tool in Houdini for dynamic environment and lighting setups.",
        "Program in collaboration with the Academy of Motion Picture Arts and Sciences and Linux."
      ],
    },
    {
      title: "Co-President, Founder",
      company_name: "GRAPHiTE: Graphics in Technology Rutgers",
      icon: graphite,
      iconBg: "#E6DEDD",
      date: "May 2025 - Current",
      points: [
        "Led university-wide initiative to educate students within the computer graphics and creative technology fields.",
        "Presentations about technical opportunities in creative industries across hackathons and club fairs.",
        "3D modeling/pipeline workshops, professional panels, VFX/animation screenings, and student films."
      ],
    },
    {
      title: "Research Assistant",
      company_name: "Laboratory for Interactive Virtual Environments",
      icon: rutgers,
      iconBg: "#E6DEDD",
      date: "May 2024 - September 2024",
      points: [
        "Study of contact simulation and formal methods of verifying skinning algorithms.",
        "Use of Dafny to prove correctness of linear blend and dual quaternion skinning.",
        "Visualized concepts by utilizing Three.js and HTML to build a simulation and UI to manipulate joint rotations.",
      ],
    },
    {
      title: "Scretary, Director of Photography, Production Designer",
      company_name: "Rutgers University Film Productions",
      icon: rufp,
      iconBg: "#E6DEDD",
      date: "September 2023 - May 2025",
      points: [
        "Held multiple creative and organizational roles across several RUFP productions.",
        "As Secretary, tracked production decisions, facilitated communication amongst crew, scheduled shoots, casting, and meetings.",
        "As Production Designer for a psychological drama, shaped visuals through set design, lighting, camerawork, and art direction. Created an original acrylic painting used as a central visual motif in the film.",
        "As Director of Photography for a buddy comedy, led storytelling through storyboarding, shot composition, and camerawork.",
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
        "Content reached an online audience of 2K+ and resulted in over 800 student registrations.",
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
      primaryCategory: "Software Development",
      secondaryCategory: null, 
      description:
        "Coming into a university with over 70,000 students, it's hard to know how to navigate success. Four of my classmates and I aimed to outline a solution for this. SwipeConnect is an iOS mentorship-matching app designed to make professional connections feel intuitive and human through a familiar swiping interface. I led the frontend development, building the swipe interface and animations, interest and organization-based filtering, and onboarding flow in React Native. Working closely with backend developers, I integrated Flask API endpoints and database connections, delivering a responsive matching experience within a Scrum Agile team using Jira. I also helped perform black-box testing of all major user flows, verifying functionality without inspecting internal code to ensure feature correctness in production-like conditions.",
      tags: [
        {
          name: "ReactNative",
          color: "pink-text-gradient",
        },
        {
          name: "TypeScript",
          color: "violet-text-gradient",
        },
        {
          name: "Jira",
          color: "blue-text-gradient",
        },
      ],
      image: projectImages.swipeConnect,
      source_code_link: "https://github.com/aecone/Rumble",
    },
    {
      name: "Game Control Station",
      primaryCategory: "Graphics",
      secondaryCategory: "Software Development", // Web development and game logic
      description:
        "Inspired by Wreck-It Ralph’s Game Central Station, this project creates a unified 3D hub world that connects multiple mini-games through a single interactive experience. I developed first-person navigation in Three.js that acts as a dynamic level-selector, using ray casting, and collision systems to transition players within the lobby and into one of three mini-games. Each mini-game features its own mechanics and artistic style implemented with JavaScript. All models (including the train station itself), shading, and lighting setups were created using Blender and Three.js.",
      tags: [
        {
          name: "JavaScript",
          color: "violet-text-gradient",
        },
        {
          name: "Three.js",
          color: "pink-text-gradient",
        },
        {
          name: "HTML",
          color: "violet-text-gradient",
        },
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
      ],
      image: projectImages.gameControlStation,
      source_code_link: "https://game-control-station.vercel.app/",
    },
    {
      name: "Puff",
      primaryCategory: "Graphics",
      secondaryCategory: null, // Pure graphics project
      description:
        "This project grew from a childhood memory: biting into my mom’s fresh puri and imagining an entire universe hidden within its puffy shell. I transformed this memory into a fully realized 2-minute 3D short film, created through an end-to-end production pipeline in Blender. I drew out concept art, scripted and storyboarded scenes, modeled and shaded 15+ assets, built character rigs, and animated and edited every shot to bring my childhood world to life.",
      tags: [
        {
          name: "Blender",
          color: "orange-text-gradient",
        },
      ],
      image: projectImages.puff,
      source_code_link: "https://vimeo.com/1083689911/815addab70",
    },
    {
      name: "Procedural Tree Modeling Tool",
      primaryCategory: "Graphics",
      secondaryCategory: "Software Development",
      description:
        "A custom Maya tool built in Python and PyQt for generating procedural tree branches, designed to streamline the asset creation process for artists. The tool allows users to quickly produce natural-looking branches with adjustable parameters including length, thickness, tapering, number of sub-branches, angles, and randomized variations. Aimed to reduce manual modeling time while maintaining artistic flexibility.",
      tags: [
        {
          name: "Maya",
          color: "orange-text-gradient",
        },
        {
          name: "Python",
          color: "violet-text-gradient",
        },
        {
          name: "PyQt",
          color: "pink-text-gradient",
        },
      ],
      image: projectImages.procedural_tree_branch,
      source_code_link: "https://github.com/amithi26/Maya-Toolbuilding/blob/main/treeBranch.py",
    },
    {
      name: "Dynamic Turntable Enviornment Tool",
      primaryCategory: "Graphics",
      secondaryCategory: "Software Development",
      description:
        "A Python-driven UI in Houdini for dynamically switching HDRI environments to previsualize characters in a variety of lighting and environment setups. Each environment is paired with a custom-modeled and shaded turntable platform, ensuring consistent character presentation. This tool streamlines the workflow for artists, allowing rapid iteration and comparison across multiple lighting scenarios.",
      tags: [
        {
          name: "Houdini",
          color: "orange-text-gradient",
        },
        {
          name: "Python",
          color: "violet-text-gradient",
        },
      ],
      image: projectImages.turntable,
      source_code_link: null,
    },
    {
      name: "Hummer",
      primaryCategory: "Software Development",
      secondaryCategory: "Graphics",
      description:
        "Two of my forever loves are movies and music: they foster communities and form friendships. Anyone who knows me can attest to my love for the app Letterboxd, a social media platform for rating and reviewing films that brings together people of diverse backgrounds and stories through storytelling itself. Inspired by this idea of specialized shared digital experience, I became team lead for a UI/UX case study for a music-focused social media app. I conducted public opinion research to identify key features and interface preferences, then collaborated with a team of six to design low and high-fidelity wireframes, and eventually prototype and present the platform in Figma.",
      tags: [
        {
          name: "Figma",
          color: "orange-text-gradient",
        },
        {
          name: "GoogleForms",
          color: "blue-text-gradient",
        },
        {
          name: "GoogleSheets",
          color: "blue-text-gradient",
        },
      ],
      image: projectImages.hummer,
      source_code_link: "https://www.figma.com/proto/p7vG1uezZwYnQsNXKjJKWc/2blue-lofi-wireframe?node-id=265-6438&starting-point-node-id=265%3A7293&t=elDklgvJLz7YvHT2-1",
    },
    {
      name: "Mortgage-Backed Securities Management System",
      primaryCategory: "Data Science",
      secondaryCategory: "Software Development",
      description:
        "Backend development of a Java application using JDBC and PostgreSQL to package mortgages into Mortgage-Backed Securities. Implemented advanced filtering capabilities across multiple mortgage attributes, dynamic rate calculations, and secure transactional updates based on a NJ mortgage database.",
      tags: [
        {
          name: "PostgreSQL",
          color: "violet-text-gradient",
        },
        {
          name: "Java",
          color: "violet-text-gradient",
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
      primaryCategory: "Data Science",
      secondaryCategory: "Software Development", // Algorithm implementation
      description:
        "Designed a command-line-based dynamic grid environment and developed an autonomous bot utilizing advanced search algorithms to assess safety probabilities and navigate towards a fire-alarm button. Collected behavioral data from the bot's navigation patterns and trained a neural network model to predict optimal moves based on grid layout, bot position, and probabilistic knowledge.",
      tags: [
        {
          name: "Python",
          color: "violet-text-gradient",
        },
        {
          name: "PyTorch",
          color: "pink-text-gradient",
        },
        {
          name: "GoogleSheets",
          color: "blue-text-gradient",
        },
      ],
      image: projectImages.bot,
      source_code_link: "https://drive.google.com/drive/folders/1_hGu-Yv-j4erPzskuojgiDkbJEV-g6qC?usp=sharing",
    },
    {
      name: "Political Turmoil and Artistic Excellence: Analyzing Government and Cultural Reception",
      primaryCategory: "Data Science",
      secondaryCategory: null,
      description:
        "There’s a long-standing notion that great art often emerges from societal frustration or dissatisfaction. In this project, I conducted a data-driven analysis of the relationship between U.S. government trust (Pew Research) and trends in film and music ratings (IMDb/Billboard). Using R, I merged multiple datasets and visualized patterns to explore how societal dissatisfaction may influence the subjective and perceived quality and popularity of cultural works. The study highlights the intersection of politics, culture, and the arts through quantitative analysis.",
      tags: [
        {
          name: "R",
          color: "violet-text-gradient",
        },
        {
          name: "DataVisualization",
          color: "pink-text-gradient",
        },
      ],
      image: projectImages.data,
      source_code_link: "/data.html",
    },
    {
      name: "Disco-Pixel Effect with Webcam Feed",
      primaryCategory: "Graphics",
      secondaryCategory: "Software Development", // Real-time processing
      description:
        "This project began as a tool to help me visualize larger shapes and color compositions when drawing and painting; essentially a way to step back and see the big picture without getting lost in distracting details. I built a real-time pixelation system using Python and OpenCV, allowing users to adjust grid size and toggle color channels to explore how color perception changes at different resolutions. The interactive, live-feedback nature of the tool turned it into a playful experiment in color, abstraction, and real-time systems.",
      tags: [
        {
          name: "Python",
          color: "violet-text-gradient",
        },
        {
          name: "OpenCV",
          color: "pink-text-gradient",
        },
      ],
      image: projectImages.pixelEffect,
      source_code_link: "https://github.com/amithi26/Webcam-Effects",
    },
    {
      name: "Dystopian Escapism",
      primaryCategory: "Graphics",
      secondaryCategory: null, // Pure visual effects project
      description:
        "The courtyard of my school’s Mathematical Sciences building always felt depressing: brutalist architecture, yellowing concrete, and a lack of greenery made it feel more like a dystopian world than a university quad. This project brings my bleakest imagination to life and transforms that environment into a dynamic visual effects composition created in Adobe After Effects. I combined planar and 3D tracking/compositing, Rotobrush, mask animation, and advanced color correction techniques to integrate external elements and my filmed footage into a dystopian 3D environment.",
      tags: [
        {
          name: "AfterEffects",
          color: "orange-text-gradient",
        },
        {
          name: "Cinematography",
          color: "blue-text-gradient",
        },
      ],
      image: projectImages.dystopian,
      source_code_link: "https://vimeo.com/1037275982?share=copy",
    },
    {
      name: "\"Painter\"",
      primaryCategory: "Graphics",
      secondaryCategory: null,
      description:
        "Production design, story development, & cinematography for a short psychological drama. Executed camera operations and designed set elements, including an acrylic painting, to reinforce themes and moods, achieving a nuanced and immersive aesthetic.",
      tags: [
        {
          name: "ProductionDesign",
          color: "blue-text-gradient",
        },
        {
          name: "AcrylicArt",
          color: "blue-text-gradient",
        },
        {
          name: "Cinematography",
          color: "blue-text-gradient",
        },
      ],
      image: projectImages.painter,
      source_code_link: "https://youtu.be/mQ2ftOX-IUQ?si=RZWnIUva2MpVjSVu",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };