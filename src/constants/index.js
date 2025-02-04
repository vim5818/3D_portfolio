import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    aws,
    bosch,
    car,
    contact,
    docker,
    estate,
    fastapi,
    git,
    github,
    indiaflagicon,
    knorr,
    linkedin,
    mongodb,
    path2,
    pricewise,
    react,
    snapgram,
    summiz,
    threads,
    torc,
    tata
} from "../assets/icons";
import { Shadow } from "@react-three/drei";

export const skills = [
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Computing",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Containerization",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
        {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Technical Product Manager/Product Owner",
        company_name: "Torc Robotics",
        icon: torc,
        iconBg: "#ffffff",
        iconSize: '64px',
        shadowSize: 'large', 
        date: "Sept 2024 - March 2025",
        points: [
            "SAFe-certified Product Manager managing 3 cross-functional engineering teams (24+ members), delivering 10+ Virtual Driver Software as a Service feature by 2025 by aligning product vision with Agile execution and data-driven decision-making.",
            "Develop and own feature roadmaps in SmartSheets, achieving 80% on-time delivery through quarterly milestone planning, KPI metric tracking, and iterative engineering, product releases",
            "Own and manage product backlogs in JIRA, Confluence through RICE method for iterative planning cycle, prioritizing features based on business and market needs.",
            "Ensure end-to-end feature delivery with traceability to overall organization and product goals.",
            "Spearheading data-driven development for the product capabilities like Autonomous Intersection handling (with, w/o traffic lights), etc through EPIC, user stories, acceptance criteria, and Product Requirement Documents.",
            "Driving Executive Leadership (Directors, VPs) in bi-weekly sessions, improving transparency, prioritization and risk mitigation while driving 15% faster data driven decision-making"
        ],
    },
    {
        title: "Lead Engineer",
        company_name: "Robert Bosch GmbH",
        icon: bosch,
        iconSize: '100px',
        iconBg: "#ffffff",
        date: "August 2023 - August 2024",
        points: [
            "Project DATALOOP:(Project closed due to US Passenger Car American customer decision to withdraw development)",
            "Led the design and implementation of a metadata-enrichment (MDE) software product for a Software-Defined Vehicle Data Loop Platform, leveraging 3 microservices and Microsoft Azure Cloud ETL for enterprise deployment.",
            "Owned and managed the product backlog and feature roadmap, facilitating monthly Scrum-of-Scrums and quarterly discovery workshops to capture customer requirements, blockers, and quality needs, translating them into actionable features and NFRs.",
            "Delivered €1M in savings by automating data ingestion, reducing manual efforts, and improving developer productivity from 1 hour to <10 minutes, while increasing data insights by 40% through Qlik dashboards.",
            "Architected business logic and contributed to 30% hands-on implementation with a 4-developer team, transforming raw data into ground truth with metadata for AI/ML model training and production deployment.",
            "Conducted monthly reverse-mentoring sessions with executive leadership, providing technical insights and fostering alignment on product strategy.",
        ],
    },
    {
        title: "Lead Engineer",
        company_name: "Robert Bosch GmbH",
        icon: bosch,
        iconSize: '100px',
        iconBg: "#ffffff",
        date: "July 2022 - August 2023",
        points: [
            "Project Lidar: (Bosch Lidar Development was closed as Business decision)",
            "Responsible as Scrum Master and Lead Engineer, overseeing Program Increment (PI) and Sprint planning for an 8-member Lidar Verification team at the functional level.",
            "Achieved an 80% system and test coverage rate through the development and implementation of a comprehensive verification and validation of Lidar System.",
            "Performed Lidar System V&V through extensive testing and diagnostic system development.",
            "Managed Software release and testing using IBM DOORS, ensuring successful delivery of CAT3 software demonstrating system safety and maturity for road release.",
            "Implemented Python scripts and Jenkins automation in various test environments (Lab, vehicle, endurance run, etc.) for accelerated and improved validation.",
            "Analyzed Point cloud data for ML perception, produced reports for enhanced root cause analysis and SOTIF compliance, resulting in a 20% reduction in issue resolution time.",
            "Experience with C-suite management meetings with product demo drives."
        ],
    },
    {
        title: "Feature Owner",
        company_name: "Knorr-Bremse AG",
        icon: path2,
        iconBg: "#ffffff",
        date: "July 2021 - June 2022",
        points: [
            "Responsible for overall development of TSR, HBA function involving Requirements Management, Machine Learning algorithm V&V, Software development and delivery, Defect Management via PTC integrity.",
            "Implemented overall KPI evaluation strategy through recompute of real-world driving data using data injection into camera on HIL bench and auto ground truth labelling tool chain.",
            "Developed, automated evaluation pipeline with python, Jenkins to verify and validate the Traffic Sign Recognition, High Beam Assist functions and store tags in MongoDB for quick and easy data search.",
            "Testcase development in PTC Integrity for traceability to requirements.",
            "Collaborated with cross functional stakeholders like Tier-1 supplier (like Continental AG) and OEM Customers."
        ],
    },
    {
        title: "Senior Manager",
        company_name: "TATA Motors",
        icon: tata,
        iconBg: "#ffffff",
        date: "June 2018 - April 2019",
        points: [
            "Overall product development responsibility for selective catalyst reduction systems (SCR) Dosage Strategy, Testing and Emissions certification for EU6/BS6 from development to certification in 7 months.",
            "People Management of 6 teams members.",
        ],
    },
    {
        title: "Associate Engineer",
        company_name: "Robert Bosch India",
        icon: bosch,
        iconBg: "#ffffff",
        date: "June 2015 - May 2018",
        points: [
            "Responsible for Calibration, validation of engine performance and emissions. Functional development and testing of Dual Torque Mode for Commercial Vehicles",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/vignesh-mahalingam-849307a1/',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Occlusion handling in Object Detection',
        description: 'My Master Thesis and Internship work are a part of Sensors4Rail was presented in the Intelligent Transport Systems (ITS)-World Congress 2021 in Hamburg.',
        link: 'https://digitale-schiene-deutschland.de/en/news/2024/sensordataannotations',
    }
];