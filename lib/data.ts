export const profile = {
  name: "Anshika Anand",
  roles: [
    "Software Engineer",
    "Salesforce Developer",
    "Java Backend Developer",
    "AI Enthusiast",
    "Cybersecurity Enthusiast",
  ],
  tagline:
    "I build scalable software and secure systems — from Salesforce automations to backend services to AI models that solve real problems.",
  email: "anshikaanand02@gmail.com",
  phone: "7033369235",
  linkedin: "https://linkedin.com/in/itsanshii/",
  github: "https://github.com/Itsanshi",
  oldSite: "https://anshikaanand.netlify.app/",
  resumeFile: "/Anshika_Anand_Resume.pdf",
  location: "Bhubaneswar, India",
};

export const about = {
  heading: "A little about me",
  paragraphs: [
    "I'm currently a System Engineer at Tata Consultancy Services, where I build and customize Salesforce applications — Apex, Lightning Web Components, Flows — for real business workflows.",
    "Before that, I spent time deep in Java backend systems, building microservices with Spring Boot and Hibernate, and configuring network security for enterprise cloud environments.",
    "Outside of client work, I'm drawn to problems at the edges — training computer vision models to read animal behavior, and studying the cybersecurity side of the systems I build.",
  ],
  stats: [
    { label: "CGPA", value: "9.26/10" },
    { label: "Years across roles", value: "2+" },
    { label: "Security setups shipped", value: "10+" },
  ],
};

export const experience = [
  {
    company: "Tata Consultancy Services",
    role: "System Engineer — Salesforce Developer",
    period: "Feb 2025 — Present",
    current: true,
    summary:
      "Building and customizing Salesforce features for enterprise clients, from custom automation to production deployments.",
    points: [
      "Developed and customized Salesforce features using Apex, Lightning Web Components (LWC), SOQL, and Flows based on business requirements.",
      "Configured custom objects, validation rules, page layouts, and automation to streamline business processes.",
      "Collaborated with cross-functional teams in Agile to implement enhancements, resolve bugs, and support deployments.",
    ],
    tech: ["Apex", "LWC", "SOQL", "Flows", "Salesforce"],
  },
  {
    company: "EPAM Systems",
    role: "Junior Software Engineer Intern",
    period: "Jan 2025 — Jun 2025",
    current: false,
    summary:
      "Built backend microservices in Java and Spring Boot, focused on clean architecture and test coverage.",
    points: [
      "Developed backend systems in Java applying OOP principles and design patterns, improving code reusability by 25% across modules.",
      "Engineered microservices with Spring Boot and Hibernate, integrating MySQL and building RESTful APIs.",
      "Practiced clean code standards and collaborated in Agile Scrum with regular peer code reviews.",
    ],
    tech: ["Java", "Spring Boot", "Hibernate", "MySQL", "REST APIs", "JUnit"],
  },
  {
    company: "EY GDS",
    role: "Cybersecurity Trainee",
    period: "Jun 2024 — Aug 2024",
    current: false,
    summary:
      "Strengthened network and cloud security posture through access control, segmentation, and encryption.",
    points: [
      "Strengthened network and cloud security by configuring access controls, identity management, and network segmentation.",
      "Designed and implemented 10+ security setups including firewalls, VPNs, and encryption protocols for data in transit and at rest.",
      "Integrated compliance frameworks into cloud deployments to support audit readiness.",
    ],
    tech: ["Network Security", "Firewalls", "VPNs", "Cloud Security"],
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Java", "Python", "JavaScript", "Apex", "HTML/CSS"],
  },
  {
    title: "Backend Development",
    items: ["Spring", "Spring Boot", "Hibernate", "REST APIs", "Microservices"],
  },
  {
    title: "Salesforce",
    items: ["Apex", "Lightning Web Components", "SOQL", "Flows", "Automation"],
  },
  {
    title: "Cloud & Security",
    items: ["AWS", "Azure", "Firewalls", "VPNs", "Cloud Security"],
  },
  {
    title: "Databases",
    items: ["MySQL", "DynamoDB"],
  },
  {
    title: "Developer Tools",
    items: ["Git", "GitHub", "Linux", "Maven", "OpenCV"],
  },
];

export const projects = [
  {
    title: "Estrus Detection in Cattle",
    period: "Feb 2025 — Apr 2025",
    description:
      "An AI-powered computer vision system that detects estrus (heat) behavior in cattle in real time, built to help farmers act faster and more accurately than manual observation.",
    highlights: [
      "Real-time detection using YOLOv11, reaching over 85% accuracy in field trials.",
      "Built a labeled dataset pipeline and pose analyzer to catch behavioral cues like mounting and tail raising.",
      "Improved model performance by 30% through iterative tuning of the pose analyzer.",
    ],
    tech: ["YOLOv11", "OpenCV", "PyTorch", "NumPy", "Pandas"],
    github: "#",
    demo: null,
  },
  {
    title: "DTC Optimus",
    subtitle: "Automated Bus Scheduling & Route Management",
    period: "Aug 2024 — Sep 2024",
    description:
      "A route optimization and live-tracking platform built for Delhi Transport Corporation during Smart India Hackathon 2024, cutting manual scheduling work and routing errors.",
    highlights: [
      "Led frontend development for the route management system, cutting manual scheduling time by 25%.",
      "Built a GIS-based live transit feature using Ola Maps SDKs for real-time route monitoring.",
      "Reduced scheduling errors by 30%, improving operational efficiency for DTC.",
    ],
    tech: ["Next.js", "Node.js", "Python", "GIS", "Ola Maps"],
    github: "#",
    demo: null,
  },
];

export const achievements = [
  {
    title: "HackNITR",
    result: "Top 5 of 100 teams",
    description: "A 36-hour hackathon where our team ranked in the top 5 out of 100 competing teams.",
  },
  {
    title: "Smart India Hackathon",
    result: "Top 10 of 104 teams",
    description: "Qualified the Institute Round, ranking among the top 10 out of 104 teams nationally.",
  },
];

export const education = {
  school: "Siksha 'O' Anusandhan, Bhubaneswar, Odisha",
  degree: "B.Tech, Computer Science and Engineering",
  period: "Sep 2021 — Sep 2025",
  cgpa: "9.26 / 10",
};
