// profiles.ts
// types.ts

export interface Commitment {
    fullTime: {
        rate: string;
        start: string;
    };
    partTime: {
        rate: string;
        start: string;
    };
}

export interface WorkExperience {
    position: string;
    companyName: string;
    companyLogo: string;
    years: string;
    responsibilities: string[];
}

export interface Education {
    institution: string;
    degree: string;
    logo: string;
    years: string;
}

export interface Profile {
    id: number;
    avatar: string;
    name: string;
    experience: number;
    worktype: string[];
    commitment: Commitment;
    expertIn: string[];
    workExperience: WorkExperience[];
    education: Education[];
    awards: string[];
}


export const profiles: Profile[] = [
    {
        id: 1,
        avatar: "https://i.pravatar.cc/150?u=a042581f46407532987045e",
        name: "John Doe",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$8,000 / month",
                start: "Starts in 2 weeks"
            },
            partTime: {
                rate: "$4,500 / month",
                start: "Available Immediately"
            }
        },
        expertIn: ["JavaScript", "Python", "Docker", "React", "Node.js"],
        workExperience: [
            {
                position: "Senior Software Developer",
                companyName: "Tech Solutions Inc.",
                companyLogo: "https://example.com/techsolutions_logo.png",
                years: "2021 - Present",
                responsibilities: [
                    "Led a team of developers to implement an e-commerce platform, increasing sales by 25%.",
                    "Enhanced system architecture to support scalable microservices, reducing downtime by 35%.",
                    "Collaborated with cross-functional teams to streamline development workflows."
                ]
            },
            {
                position: "Software Engineer",
                companyName: "Innovative Labs",
                companyLogo: "https://example.com/innovativelabs_logo.png",
                years: "2019 - 2021",
                responsibilities: [
                    "Developed a data processing pipeline that improved efficiency by 40%.",
                    "Designed and maintained RESTful APIs used by over 50,000 active users daily.",
                    "Implemented CI/CD pipelines, reducing deployment time by 50%."
                ]
            }
        ],
        education: [
            {
                institution: "University of California, Berkeley",
                degree: "B.Sc. in Computer Science",
                logo: "https://example.com/ucberkeley_logo.png",
                years: "2011 - 2015"
            }
        ],
        awards: [
            "Top Performer Award 2020",
            "Best Innovator 2019",
            "Hackathon Champion 2021",
            "Excellence in Software Development 2018"
        ]
    },

    {
        id: 2,
        avatar: "https://i.pravatar.cc/150?u=a042581f479e29026704d",
        name: "Jane Smith",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$7,500 / month",
                start: "Starts in 1 week"
            },
            partTime: {
                rate: "$4,000 / month",
                start: "Available in 3 days"
            }
        },
        expertIn: ["Java", "Spring Boot", "Kubernetes", "AWS", "SQL"],
        workExperience: [
            {
                position: "Backend Engineer",
                companyName: "Cloudify Corp",
                companyLogo: "https://example.com/cloudify_logo.png",
                years: "2020 - Present",
                responsibilities: [
                    "Built and optimized cloud-based solutions, enhancing system reliability by 40%.",
                    "Implemented robust security protocols, achieving 100% data compliance.",
                    "Collaborated closely with DevOps to automate infrastructure deployments."
                ]
            },
            {
                position: "Software Developer",
                companyName: "DataWare Solutions",
                companyLogo: "https://example.com/dataware_logo.png",
                years: "2018 - 2020",
                responsibilities: [
                    "Designed and maintained scalable REST APIs for data management.",
                    "Developed automated testing pipelines, reducing testing time by 30%.",
                    "Conducted regular code reviews and contributed to knowledge-sharing sessions."
                ]
            }
        ],
        education: [
            {
                institution: "MIT",
                degree: "M.Sc. in Software Engineering",
                logo: "https://example.com/mit_logo.png",
                years: "2016 - 2020"
            }
        ],
        awards: [
            "Hackathon Champion 2021",
            "Excellence in Software Engineering 2020"
        ]
    },


    {
        id: 3,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e2902670004d",
        name: "Alice Johnson",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$6,500 / month",
                start: "Starts in 3 weeks",
            },
            partTime: {
                rate: "$3,500 / month",
                start: "Available in 1 week",
            },
        },
        expertIn: ["PHP", "Laravel", "MySQL", "Vue.js", "AWS"],
        workExperience: [
            {
                position: "Full Stack Developer",
                companyName: "WebWorks Ltd.",
                companyLogo: "https://example.com/webworks_logo.png",
                years: "2019 - Present",
                responsibilities: [
                    "Developed dynamic and interactive web applications, reducing load times by 30%.",
                    "Integrated third-party APIs to enhance application functionality.",
                    "Led the frontend team in adopting Vue.js, improving UI performance by 20%.",
                ],
            },
            {
                position: "Junior Developer",
                companyName: "NextGen Tech",
                companyLogo: "https://example.com/nextgen_logo.png",
                years: "2017 - 2019",
                responsibilities: [
                    "Assisted in the development of web applications using Angular and Node.js.",
                    "Performed unit testing to maintain code quality.",
                    "Participated in agile ceremonies, contributing to sprint planning and retrospectives.",
                ],
            },
        ],
        education: [
            {
                institution: "Stanford University",
                degree: "B.Sc. in Information Systems",
                logo: "https://example.com/stanford_logo.png",
                years: "2014 - 2018",
            },
        ],
        awards: [
            "Best Developer Award 2019",
            "Innovation in Web Development 2021",
        ],
    },
    {
        id: 4,
        avatar: "https://i.pravatar.cc/150?u=a042581f4ew79e29026704d",
        name: "Michael Green",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$7,200 / month",
                start: "Starts in 2 weeks",
            },
            partTime: {
                rate: "$3,800 / month",
                start: "Available Immediately",
            },
        },
        expertIn: ["Python", "Django", "PostgreSQL", "Docker", "React"],
        workExperience: [
            {
                position: "Software Developer",
                companyName: "FinTech Solutions",
                companyLogo: "https://example.com/fintech_logo.png",
                years: "2021 - Present",
                responsibilities: [
                    "Developed financial analytics tools, improving user engagement by 15%.",
                    "Enhanced backend performance, reducing processing time by 25%.",
                    "Contributed to code reviews and mentoring junior developers.",
                ],
            },
            {
                position: "Junior Software Engineer",
                companyName: "MicroTech Corp",
                companyLogo: "https://example.com/microtech_logo.png",
                years: "2018 - 2021",
                responsibilities: [
                    "Implemented new features in legacy systems, reducing error rates by 20%.",
                    "Automated deployment processes, cutting deployment time by 45%.",
                    "Worked closely with senior developers to improve code quality and efficiency.",
                ],
            },
        ],
        education: [
            {
                institution: "University of Texas",
                degree: "B.Sc. in Computer Science",
                logo: "https://example.com/utexas_logo.png",
                years: "2013 - 2017",
            },
        ],
        awards: [
            "Employee of the Year 2022",
            "FinTech Innovator 2021",
        ],
    },

    {
        id: 5,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e2902676704d",
        name: "Emily Clark",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$8,200 / month",
                start: "Available Immediately"
            },
            partTime: {
                rate: "$4,300 / month",
                start: "Starts in 1 week"
            }
        },
        expertIn: ["Ruby", "Rails", "JavaScript", "GraphQL", "AWS"],
        workExperience: [
            {
                position: "Lead Backend Developer",
                companyName: "QuickApps",
                companyLogo: "https://example.com/quickapps_logo.png",
                years: "2020 - Present",
                responsibilities: [
                    "Led backend team in building scalable APIs, improving response times by 40%.",
                    "Migrated services to AWS, reducing infrastructure costs by 30%.",
                    "Worked with frontend teams to integrate GraphQL, enhancing data accessibility."
                ]
            },
            {
                position: "Software Engineer",
                companyName: "RapidDev Inc.",
                companyLogo: "https://example.com/rapiddev_logo.png",
                years: "2017 - 2020",
                responsibilities: [
                    "Developed REST APIs for high-traffic applications, handling over 100k requests daily.",
                    "Implemented caching strategies, reducing database load by 50%.",
                    "Contributed to system documentation and conducted training for new team members."
                ]
            }
        ],
        education: [
            {
                institution: "Harvard University",
                degree: "M.Sc. in Computer Science",
                logo: "https://example.com/harvard_logo.png",
                years: "2015 - 2017"
            }
        ],
        awards: [
            "Outstanding Engineer Award 2021",
            "Code Excellence Award 2020"
        ]
    },
    {
        id: 6,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e75629026704d",
        name: "David Wilson",
        worktype: ["Full-time", "Part-time"],
        experience: 4,
        commitment: {
            fullTime: {
                rate: "$6,900 / month",
                start: "Starts in 2 weeks"
            },
            partTime: {
                rate: "$3,700 / month",
                start: "Available Immediately"
            }
        },
        expertIn: ["C#", ".NET", "Azure", "SQL Server", "Angular"],
        workExperience: [
            {
                position: "Senior Developer",
                companyName: "TechWave",
                companyLogo: "https://example.com/techwave_logo.png",
                years: "2020 - Present",
                responsibilities: [
                    "Built a secure API for financial transactions, improving processing efficiency by 30%.",
                    "Integrated Azure-based solutions for data storage and backup.",
                    "Collaborated with QA teams to develop automated testing frameworks."
                ]
            },
            {
                position: "Software Engineer",
                companyName: "MegaSoft Ltd.",
                companyLogo: "https://example.com/megasoft_logo.png",
                years: "2016 - 2020",
                responsibilities: [
                    "Developed and maintained client-server applications for business clients.",
                    "Optimized SQL queries, improving database performance by 40%.",
                    "Participated in scrum meetings, contributing to sprint planning."
                ]
            }
        ],
        education: [
            {
                institution: "University of Michigan",
                degree: "B.Sc. in Information Technology",
                logo: "https://example.com/umich_logo.png",
                years: "2012 - 2016"
            }
        ],
        awards: [
            "Innovation in Software Development 2019",
            "Employee of the Month 2018"
        ]
    },
    {
        id: 7,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e2469026704d",
        name: "Sarah Brown",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$7,800 / month",
                start: "Starts in 3 weeks"
            },
            partTime: {
                rate: "$4,200 / month",
                start: "Available Immediately"
            }
        },
        expertIn: ["Python", "Flask", "PostgreSQL", "Vue.js", "Docker"],
        workExperience: [
            {
                position: "Full Stack Developer",
                companyName: "Webify Solutions",
                companyLogo: "https://example.com/webify_logo.png",
                years: "2019 - Present",
                responsibilities: [
                    "Developed web applications for data analytics, reducing processing time by 20%.",
                    "Implemented Docker containers, streamlining the development environment.",
                    "Collaborated on RESTful API design to ensure robust data management."
                ]
            },
            {
                position: "Backend Developer",
                companyName: "CodeWorks",
                companyLogo: "https://example.com/codeworks_logo.png",
                years: "2017 - 2019",
                responsibilities: [
                    "Created database schemas for optimized data retrieval.",
                    "Built data migration tools, reducing migration time by 50%.",
                    "Worked in an agile environment, focusing on continuous improvement."
                ]
            }
        ],
        education: [
            {
                institution: "Princeton University",
                degree: "B.Sc. in Computer Science",
                logo: "https://example.com/princeton_logo.png",
                years: "2013 - 2017"
            }
        ],
        awards: [
            "Hackathon Winner 2020",
            "Developer of the Year 2019"
        ]
    },
    {
        id: 8,
        avatar: "https://i.pravatar.cc/150?u=a04258164f4e29026704d",
        name: "Tom Anderson",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$6,700 / month",
                start: "Available in 1 month"
            },
            partTime: {
                rate: "$3,900 / month",
                start: "Available in 2 weeks"
            }
        },
        expertIn: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
        workExperience: [
            {
                position: "Software Developer",
                companyName: "AppMasters",
                companyLogo: "https://example.com/appmasters_logo.png",
                years: "2021 - Present",
                responsibilities: [
                    "Developed scalable backend APIs using Node.js, improving data retrieval speed.",
                    "Collaborated with frontend teams to create dynamic UIs with React.",
                    "Contributed to microservices architecture design and implementation."
                ]
            },
            {
                position: "Web Developer",
                companyName: "DevHouse",
                companyLogo: "https://example.com/devhouse_logo.png",
                years: "2018 - 2021",
                responsibilities: [
                    "Built responsive front-end applications using JavaScript and HTML/CSS.",
                    "Optimized code performance, reducing page load times by 25%.",
                    "Maintained code quality through regular peer reviews and testing."
                ]
            }
        ],
        education: [
            {
                institution: "University of Southern California",
                degree: "B.Sc. in Software Engineering",
                logo: "https://example.com/usc_logo.png",
                years: "2014 - 2018"
            }
        ],
        awards: [
            "Best Project of the Year 2019",
            "Top Performer 2020"
        ]
    },
    {
        id: 9,
        avatar: "https://i.pravatar.cc/150?u=a042581f4e76529026704d",
        name: "Laura Martinez",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$7,000 / month",
                start: "Available Immediately"
            },
            partTime: {
                rate: "$3,800 / month",
                start: "Starts in 1 week"
            }
        },
        expertIn: ["PHP", "Laravel", "MySQL", "JavaScript", "AWS"],
        workExperience: [
            {
                position: "Backend Developer",
                companyName: "CloudNet",
                companyLogo: "https://example.com/cloudnet_logo.png",
                years: "2018 - Present",
                responsibilities: [
                    "Managed data processing applications, handling over 200k transactions daily.",
                    "Migrated legacy systems to Laravel, improving maintainability by 60%.",
                    "Optimized MySQL queries, reducing response times by 30%."
                ]
            },
            {
                position: "Junior Developer",
                companyName: "BrightCode",
                companyLogo: "https://example.com/brightcode_logo.png",
                years: "2016 - 2018",
                responsibilities: [
                    "Supported senior developers in backend tasks, gaining expertise in PHP and MySQL.",
                    "Participated in code reviews to enhance code quality and team collaboration.",
                    "Implemented automation scripts, reducing manual data processing by 50%."
                ]
            }
        ],
        education: [
            {
                institution: "New York University",
                degree: "M.Sc. in Information Systems",
                logo: "https://example.com/nyu_logo.png",
                years: "2014 - 2016"
            }
        ],
        awards: [
            "Coding Excellence Award 2018",
            "Most Valuable Developer 2019"
        ]
    },
    {
        id: 10,
        avatar: "https://i.pravatar.cc/150?u=a042581fgf4e29026704d",
        name: "Emily Davis",
        experience: 4,
        worktype: ["Full-time", "Part-time"],
        commitment: {
            fullTime: {
                rate: "$8,000 / month",
                start: "Starts in 1 week",
            },
            partTime: {
                rate: "$4,500 / month",
                start: "Available in 2 days",
            },
        },
        expertIn: ["React", "Node.js", "GraphQL", "MongoDB", "TypeScript"],
        workExperience: [
            {
                position: "Lead Frontend Developer",
                companyName: "Tech Innovations",
                companyLogo: "https://example.com/tech_innovations_logo.png",
                years: "2020 - Present",
                responsibilities: [
                    "Spearheaded the development of user-facing features for a large-scale web application.",
                    "Optimized application performance, reducing load time by 25%.",
                    "Mentored junior developers, enhancing team productivity.",
                ],
            },
            {
                position: "Software Engineer",
                companyName: "Creative Solutions",
                companyLogo: "https://example.com/creative_solutions_logo.png",
                years: "2018 - 2020",
                responsibilities: [
                    "Developed RESTful APIs and integrated them with frontend components.",
                    "Collaborated with designers to implement responsive UI/UX.",
                    "Conducted A/B testing to improve user engagement.",
                ],
            },
        ],
        education: [
            {
                institution: "California State University",
                degree: "B.Sc. in Computer Science",
                logo: "https://example.com/csu_logo.png",
                years: "2014 - 2018",
            },
        ],
        awards: [
            "Outstanding Achievement in Web Development 2022",
            "Best Team Leader Award 2023",
        ],
    },
];
