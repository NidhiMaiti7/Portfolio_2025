
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
    github?: string;
    webapp?: string;
    member?: ProjectMember[];
    achievements?: string[];
    images?: string[];
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
    "A passionate Software Developer with 2+ years of experience in building responsive web and scalable mobile applications. Proficient in front-end and database management. Adept at integrating real-time features, optimizing performance, and ensuring seamless cross-platform functionality. Skilled in collaborating with cross-functional teams to deliver reliable, user-focused solutions.",
  github: "https://github.com/NidhiMaiti7",
  resume: "https://drive.google.com/file/d/1a7aGe3EQhZ-pyvNKa16tcqVJeiaWGpTf/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/nidhi-maiti-5a061b283/",
  twitter: "https://twitter.com/nidhi-maiti",
  insta: "https://www.instagram.com/nidhi-maiti/",
  facebook: "https://www.facebook.com/nidhi.maiti.94",
  skills: [
    {
      title: "Programming & Web",
      skills: [
        {
          name: "ReactJS",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Next.js",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        },
        {
          name: "TypeScript",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        },
        {
          name: "JavaScript",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        },
        {
          name: "Redux",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
        },
        {
          name: "React Query",
          image: "https://raw.githubusercontent.com/TanStack/query/main/packages/react-query/logo/logo.svg",
        },
        {
          name: "Jest",
          image: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
        },
        {
          name: "React Navigation",
          image: "https://reactnavigation.org/img/spiro.svg",
        },
      ],
    },
    {
      title: "Mobile Development",
      skills: [
        {
          name: "React Native",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "iOS",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apple/apple-original.svg",
        },
        {
          name: "Android",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original.svg",
        },
      ]
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
        {
          name: "GraphQL",
          image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
        },
        {
            name: "REST APIs",
            image: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_restql_icon_130438.png"
        }
      ],
    },
     {
      title: "UI/UX & Frameworks",
      skills: [
           {
          name: "Tailwind CSS",
          image: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        },
        {
          name: "CSS",
          image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
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
            name: "Trello",
            image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain.svg"
        },
        {
          name: "Android Studio",
          image: "https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png",
        },
        {
          name: "Xcode",
          image: "https://developer.apple.com/assets/elements/icons/xcode/xcode-128x128_2x.png"
        },
        {
            name: "CI/CD",
            image: "https://www.svgrepo.com/show/306403/cicd.svg"
        }
      ],
    },
  ],
  experience: [
     {
      id: 0,
      img: "https://media.designrush.com/agencies/289332/conversions/Zestgeek-Solutions-logo-profile.jpg",
      role: "Software Engineer",
      company: "ZestGeek Solutions",
      date: "Jul 2025 – Present",
      desc: "Developed React Native features and reusable UI components, integrated Google Maps, REST APIs, and real-time sockets. Implemented in-app calling, push notifications, and real-time data synchronization with backend services. Resolved production issues, optimized performance, and improved application stability.",
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
      desc: "Developed cross-platform mobile applications, delivering scalable features for iOS and Android. Integrated APIs, optimized performance, and resolved critical bugs to improve user experience.",
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
      role: "Frontend Web Development Intern",
      company: "YHILLS - Learning Beyond Expectation",
      date: "Jan 2024 – May 2024",
      desc: "Developed responsive and reusable frontend components for a Hotel Booking Management System (Admin Panel). Built dashboard interfaces, booking management screens, and form-based workflows.",
      skills: ["MongoDB", "Express.js", "ReactJS", "Node.js", "MERN", "RESTful APIs"],
    },
  ],
  education: [
    {
      id: 0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaFV33HLb9Tyn_VZhvmuMnJuIPEXBgCwqNeWuhK3T839VePPV4KbGaA5eD8be3JxoJcg&usqp=CAU",
      school: "Uttaranchal University, Dehradun",
      date: "Sep 2022 – May 2024",
      grade: "",
      desc: "I recently completed my MCA in Cloud Computing from Uttaranchal University, Dehradun, with expertise in web design, cloud infrastructure, and application deployment. Skilled in  JavaScript, databases, and AWS, with experience building and deploying full-stack, cloud-based applications. Proficient in integrating real-time features, following Agile methodologies, and using version control tools.",
      degree: "Master of Computer Applications",
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
      id: 7,
      slug: "our-shared-homes",
      title: "Our Shared Homes — Home Exchange Web Platform",
      date: "Feb 2026 – Present",
      description: 
`Developed the member-facing home-exchange platform using Next.js 16 (App Router) and React 19, enabling property listings, home search, exchanges, referrals, reviews, and OSH Credits-based bookings. Built dashboard navigation and core workflows, including a multi-step listing wizard, Google Maps/Places and exchange management. Implemented real-time messaging with Socket.IO, featuring conversations, read receipts, presence tracking, stay requests, agreements. Developed the OSH Credits module with Stripe integration, balance tracking, credit gifting, and booking workflows.`,
      image: "/projects/our-shared-homes/image.png",
      tags: ['Next.js', 'React.js', 'Socket.IO', 'Stripe', 'Google Maps API'],
      category: "web app",
      github: "https://osh-frontend-preview.vercel.app",
      webapp: "",
      images: [
        "/projects/our-shared-homes/image-1.png",
        "/projects/our-shared-homes/image-2.png",
        "/projects/our-shared-homes/image-3.png",
        "/projects/our-shared-homes/image-4.png",
        "/projects/our-shared-homes/image-5.png"
      ],
      achievements: [
          "Developed a multi-step listing wizard, streamlining the process of adding new properties.",
          "Implemented a secure booking system with OSH Credits and Stripe integration.",
          "Built a real-time messaging system with Socket.IO for seamless communication.",
          "Integrated Google Maps and Places for enhanced property search and location services."
      ]
    },
    {
      id: 6,
      slug: "mpower-pro-app",
      title: "MPower Pro Mobile App",
      date: "Jul 2025 – Present",
      description: 
`Developed the frontend for MPower Pro, a React Native mobile app for music creation, wellness content, goal tracking, and social challenges on iOS and Android. Built core screens and tab navigation (Today View, Explore, Beat Library/Create, Challenges, Community, and News Feed) using React Navigation, Redux, and TypeScript/JavaScript. Implemented key product features including the Beat Library and in-app rap/sing recording, challenge uploads with celebration flows, Today View mood and goal tracking, Explore master classes and workouts, and community chat via CometChat. Integrated Firebase push notifications, background media uploads, in-app subscriptions, deep linking, and Amplitude analytics to improve engagement, retention, and app stability.`,
      image: "/projects/mpower-pro-app/image.png",
      tags: ["React Native", "TypeScript", "JavaScript", "Redux", "Firebase", "CometChat", "Amplitude"],
      category: "mobile app",
      github: "https://apps.apple.com/in/app/mpower-pro/id6443431786",
      webapp: "",
      images: [
        "/projects/mpower-pro-app/image-1.png",
        "/projects/mpower-pro-app/image-2.png",
        "/projects/mpower-pro-app/image-3.png",
        "/projects/mpower-pro-app/image-4.png"
      ],
      achievements: [
        "Built a comprehensive music creation and wellness app with a focus on user engagement.",
        "Implemented a beat library and recording functionality for in-app music creation.",
        "Integrated social features such as challenges, community chat, and a news feed.",
        "Enhanced app stability and user retention through analytics and push notifications."
    ]
    },
    {
      id: 0,
      slug: "driver-mobile-app",
      title: "Driver Mobile App (Maguy Non-Emergency Medical Transport)",
      date: "Jul 2025 - Sep 2025",
      description: 
`The Non-Emergency Medical Transport (NEMT) Driver App enables registered drivers to manage patient trips efficiently with real-time updates and easy navigation.`,
      image: "https://drive.google.com/uc?export=view&id=1XKSshxm-R5EqdegLA7E3yVH0q4M7sQGO",
      tags: ["React Native", "TypeScript", "JavaScript", "Socket.io", "Node.js", "Firebase", "REST API"],
      category: "mobile app",
      webapp: "",
      achievements: [
        "Enabled real-time ride management with live navigation and trip status updates.",
        "Integrated secure authentication and user-friendly earnings tracking.",
        "Provided instant incident reporting and vehicle maintenance scheduling.",
        "Designed a scalable architecture for handling single and multiple drop-off locations."
      ],
    },
    {
      id: 5,
      slug: "maguy-transport-website",
      title: "MaGuy Medical Transport Website",
      date: "Jul 2025 - Sep 2025",
      description: 
`This website supports the administrative operations of the Maguy Non-Emergency Medical Transport service.`,
      image: "https://drive.google.com/uc?export=view&id=1F8uwNQnSQV1vzOlGlW68SR9iH157lvyQ",
      tags: ["React.js", "TypeScript", "Node.js", "Firebase", "REST API"],
      category: "web app",
      webapp: "",
      achievements: [
        "Developed a responsive and user-friendly administrative dashboard.",
        "Ensured seamless integration with backend services for the driver mobile app.",
        "Built with a focus on scalability to support growing operational needs.",
        "Implemented secure and efficient data management for drivers and trips."
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
      webapp: "",
      achievements: [
        "Enhanced website features and scalability using the MERN stack.",
        "Built reusable front-end components and contributed to RESTful backend services.",
        "Ensured 100% functionality through comprehensive QA testing before deployment.",
        "Improved mobile responsiveness and cross-browser compatibility."
      ],
    }
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
