
export type ProjectMember = {
    name: string;
    img: string;
    linkedin: string;
    github: string;
  };
  
export type Project = {
    id: number;
    slug: string;
    title: string;
    date: string;
    description: string;
    image: string;
    tags: string[];
    category: string;
    github: string;
    webapp?: string;
    member?: ProjectMember[];
    achievements?: string[];
};

export type Certificate = {
    id: number;
    title: string;
    date: string;
    image: string;
    issuingOrganization: string;
    credentialURL: string;
};


export const Bio = {
  name: "Nidhi Maiti",
  roles: ["React Native Developer", "Web Developer", "Software Engineer"],
  description:
    "A passionate Software Developer with 1+ year of experience in building responsive web and scalable mobile applications. Proficient in front-end and database management. Adept at integrating real-time features, optimizing performance, and ensuring seamless cross-platform functionality. Skilled in collaborating with cross-functional teams to deliver reliable, user-focused solutions.",
  github: "https://github.com/NidhiMaiti7",
  resume: "https://drive.google.com/file/d/1Yn3LqkUeXKrtUyU5sv0N-2KtcgeOqJvF/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/nidhi-maiti-5a061b283/",
  twitter: "https://twitter.com/nidhi-maiti",
  insta: "https://www.instagram.com/nidhi-maiti/",
  facebook: "https://www.facebook.com/nidhi.maiti.94",
  skills: [
    {
      title: "Programming & Web",
      skills: [
        {
          name: "React Native",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "ReactJS",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "TypeScript",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        },
        {
          name: "Jest",
          image: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
        },
        {
          name: "CSS",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        {
          name: "MySQL",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
        },
        {
          name: "Firebase",
          image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
        },
        {
          name: "Postman",
          image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
      ],
    },
    {
      title: "Tools & DevOps",
      skills: [
        {
          name: "Git",
          image:
            "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "GitLab",
          image: "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
        },
        {
          name: "Jira",
          image: "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
        },
        {
          name: "Android Studio",
          image: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        },
        {
          name: "Xcode",
          image: "https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png"
        }
      ],
    },
  ],
  experience: [
     {
      id: 0,
      img: "https://media.designrush.com/agencies/289332/conversions/Zestgeek-Solutions-logo-profile.jpg",
      role: "Software Engineer",
      company: "ZestGeek Solutions Pvt. Ltd.",
      date: "Jul 2025 – Present",
      desc: "My role involves building cross-platform mobile applications and developing responsive web solutions. Currently, I am working on projects like the Driver Mobile App for Maguy Non-Emergency Medical Transport, which streamlines trip management for drivers with real-time navigation, earnings tracking, and reporting, as well as the Maguy Medical Transport website, which supports the administrative operations linked to the mobile app. My focus is on delivering scalable, user-friendly, and efficient solutions that enhance both user experience and operational productivity.",
      skills: [
        "React Native",
        "React.js",
        "Android",
        "iOS",
      ],
    },
    {
      id: 1,
      img: "https://i.tracxn.com/logo/company/50e12e61c8a98a3f76ad186964108971?devicePixelRatio=1.125&format=webp&height=40&width=40",
      role: "React Native Developer",
      company: "Deqode",
      date: "Jun 2024 – Jun 2025",
      desc: "Contributed to the development and maintenance of cross-platform mobile applications using React Native. Ensured optimal performance and functionality across both Android and iOS platforms. Optimized app performance, resulting in a 25% reduction in load time and increased user engagement.",
      skills: [
        "React Native",
        "Android",
        "iOS",
        "Performance Optimization"
      ],
    },
    {
      id: 2,
      img: "https://custpostimages.s3.ap-south-1.amazonaws.com/18220/1712583450322.png",
      role: "Full-Stack Web Development Internship",
      company: "YHILLS - Learning Beyond Expectation",
      date: "Jan 2024 – May 2024",
      desc: "Collaborated with the core team to enhance website features using the MERN stack (MongoDB, Express.js, ReactJS, Node.js). Built reusable front-end components and contributed to RESTful backend services, enhancing site scalability. Participated in CMS configuration and comprehensive QA testing, ensuring 100% functionality before deployment. Improved mobile responsiveness and cross-browser compatibility, enhancing user access across devices.",
      skills: ["MongoDB", "Express.js", "ReactJS", "Node.js", "MERN", "RESTful APIs"],
    },
  ],
  education: [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaFV33HLb9Tyn_VZhvmuMnJuIPEXBgCwqNeWuhK3T839VePPV4KbGaA5eD8be3JxoJcg&usqp=CAU",
      school: "Uttaranchal University, Dehradun",
      date: "Sep 2022 – Jun 2024",
      grade: "",
      desc: "I recently completed my MCA in Cloud Computing from Uttaranchal University, Dehradun, with expertise in web design, cloud infrastructure, and application deployment. Skilled in  JavaScript, databases, and AWS, with experience building and deploying full-stack, cloud-based applications. Proficient in integrating real-time features, following Agile methodologies, and using version control tools.",
      degree: "MCA in Cloud Computing",
    },
     {
      id: 1,
      img: "https://www.rishiramshikshansansthan.in/images/logo-1.png",
      school: "Devi Ahilya Vishwavidyalaya, Indore",
      date: "Aug 2019 – May 2022",
      grade: "",
      desc: "Gained strong foundations in programming (C, C++), data structures and algorithms, database management, computer networks, and software development principles.",
      degree: "B.Sc. in Computer Science",
    },
  ],
  projects: [
    {
      id: 0,
      slug: "driver-mobile-app",
      title: "Driver Mobile App (Maguy Non-Emergency Medical Transport)",
      date: "Jul 2025 - Present",
      description: 
`The Non-Emergency Medical Transport (NEMT) Driver App enables registered drivers to manage patient trips efficiently with real-time updates and easy navigation.`,
      image: "https://drive.google.com/uc?export=view&id=1XKSshxm-R5EqdegLA7E3yVH0q4M7sQGO",
      tags: ["React Native", "TypeScript", "JavaScript", "Socket.io", "Node.js", "Firebase", "REST API"],
      category: "mobile app",
      github: "https://github.com/nidhi-maiti",
      webapp: "",
      achievements: [
        "Enabled real-time ride management with live navigation and trip status updates.",
        "Integrated secure authentication and user-friendly earnings tracking.",
        "Provided instant incident reporting and vehicle maintenance scheduling.",
        "Designed a scalable architecture for handling single and multiple drop-off locations."
      ],
    },
    {
      id: 1,
      slug: "coinania-app",
      title: "Coinania (Church Donation, Prayer, and Events App)",
      date: "Jan 2025 – May 2025",
      description: 
`Developed and fixed bugs in the Coinania app, boosting its functionality by 30%.`,
      image: "https://drive.google.com/uc?export=view&id=1QrUEN3-smq4nGlsCRBglpC5B8sdA83Cs",
      tags: ['React Native', 'TypeScript', 'JavaScript', 'REST API', 'GitLab CI/CD', 'Jest', 'Firestore'],
      category: "mobile app",
      github: "https://github.com/nidhi-maiti",
      webapp: "",
       achievements: [
        "Boosted app functionality by 30% through targeted bug fixes and enhancements.",
        "Reduced app load times by 25% with TypeScript and performance optimization.",
        "Achieved over 90% test coverage with Jest, enhancing application stability.",
        "Streamlined development workflows by 20% using GitLab CI/CD and Firestore."
      ],
    },
    {
      id: 2,
      slug: "rental-property-app",
      title: "Rental Property & Hostel Management",
      date: "Jun 2024 – Dec 2024",
      description: 
`Built a scalable mobile app enabling users to buy, sell, and rent properties, alongside a hostel system that tracks 100+ rooms and tenant details.`,
      image: "https://drive.google.com/uc?export=view&id=1FeiBDVTC1hJ0zGO__6hIsrleZBoSHaZ0",
      tags: ['React Native', 'Redux', 'Firebase', 'JavaScript', 'REST API'],
      category: "mobile app",
      github: "https://github.com/nidhi-maiti",
      webapp: "",
      achievements: [
        "Launched a multi-functional app for property rental, sales, and hostel management.",
        "Reduced backend configuration by 30% with Firebase for real-time data sync.",
        "Improved screen navigation speed by 80% using Redux for state management.",
        "Achieved 95% accuracy in room occupancy tracking, minimizing manual errors."
      ],
    },
    {
        id: 3,
        slug: "fixer-up-app",
        title: "Fixer Up (Handyman Contractor Finder App)",
        date: "Jan 2024 - May 2024",
        description: 
`A handyman contractor finder app where I implemented key UI screens and integrated backend APIs for live contractor data. My work also involved fixing UI and functionality bugs to improve the overall user experience and writing and maintaining test cases using Jest and Enzyme for quality assurance.`,
        image: "https://drive.google.com/uc?export=view&id=1pRgV85Vg6xRhO1DVUcin8gE54tGWA72T",
        tags: ["React Native", "JavaScript", "REST API", "Jest", "Enzyme"],
        category: "mobile app",
        github: "https://github.com/nidhi-maiti",
        webapp: "",
        achievements: [
          "Implemented key UI screens and integrated backend APIs for live contractor data.",
          "Fixed UI and functionality bugs to improve overall user experience.",
          "Wrote and maintained test cases using Jest and Enzyme for quality assurance."
        ]
    },
    {
      id: 4,
      slug: "yhills-project",
      title: "YHILLS Project",
      date: "Jan 2024 – May 2024",
      description: 
`As part of the Full Stack Web Development Internship at YHILLS, I contributed to enhancing website features using the MERN stack.`,
      image: "https://drive.google.com/uc?export=view&id=18ooMeWsJ2ej7QcDdqAxEMf1mapUcMa3U",
      tags: ["MERN", "MongoDB", "Express.js", "ReactJS", "Node.js"],
      category: "web app",
      github: "https://github.com/nidhi-maiti",
      webapp: "",
      achievements: [
        "Enhanced website features and scalability using the MERN stack.",
        "Built reusable front-end components and contributed to RESTful backend services.",
        "Ensured 100% functionality through comprehensive QA testing before deployment.",
        "Improved mobile responsiveness and cross-browser compatibility."
      ],
    },
     {
      id: 5,
      slug: "maguy-transport-website",
      title: "MaGuy Medical Transport Website",
      date: "Jul 2025 - Present",
      description: 
`This website supports the administrative operations of the Maguy Non-Emergency Medical Transport service.`,
      image: "https://drive.google.com/uc?export=view&id=1F8uwNQnSQV1vzOlGlW68SR9iH157lvyQ",
      tags: ["React.js", "TypeScript", "Node.js", "Firebase", "REST API"],
      category: "web app",
      github: "https://github.com/nidhi-maiti",
      webapp: "",
      achievements: [
        "Developed a responsive and user-friendly administrative dashboard.",
        "Ensured seamless integration with backend services for the driver mobile app.",
        "Built with a focus on scalability to support growing operational needs.",
        "Implemented secure and efficient data management for drivers and trips."
      ],
    },
  ] as Project[],
  certificates: [
    {
        id: 2,
        title: "Data Structures and Algorithms",
        date: "20 July 2023",
        image: "https://drive.google.com/uc?export=view&id=1Ib8dRfM5PUE9vIqb1RbsJkhddb3OB5Uc",
        issuingOrganization: "4 Achievers",
        credentialURL: "https://drive.google.com/file/d/1Ib8dRfM5PUE9vIqb1RbsJkhddb3OB5Uc/view?usp=sharing",
    },
    {
        id: 3,
        title: "Web Development",
        date: "12 September 2023",
        image: "https://drive.google.com/uc?export=view&id=1V0pQPIzKMGlzsx5Pmivnn-TKseDYhaBZ",
        issuingOrganization: "Internshala",
        credentialURL: "https://drive.google.com/file/d/1V0pQPIzKMGlzsx5Pmivnn-TKseDYhaBZ/view?usp=sharing",
    }
  ] as Certificate[],
};
