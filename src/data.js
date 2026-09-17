import aboutMeIcon from "./assets/about-me-icon.png";
import technicalSkillsIcon from "./assets/technical-skills-icon.png";
import experienceIcon from "./assets/experience-icon.png";
import educationCertificationsIcon from "./assets/education-certifications-icon.png";

export const RESUME_SECTIONS = [
  {
    image: aboutMeIcon,
    id: "about",
    title: "About Me",
    description: "Professional summary and career profile.",
  },
  {
    image: technicalSkillsIcon,
    id: "skills",
    title: "Technical Skills",
    description: "Languages, platforms, tools, and practices.",
  },
  {
    image: experienceIcon,
    id: "experience",
    title: "Experience",
    description: "Eight-plus years of software engineering experience.",
  },
  {
    image: educationCertificationsIcon,
    id: "education",
    title: "Education & Certifications",
    description: "Academic background and professional certifications.",
  },
];

export const RESUME_CONTENT = {
  about: {
    title: "Professional Summary",
    paragraphs: [
      "Senior Software Engineer with 8+ years of experience architecting, building, and operating enterprise web and cloud-native applications across the full software development lifecycle, spanning financial services, Insurtech, and edtech environments.",
      "Deep expertise in C#, .NET Core/.NET Framework, ASP.NET Core, Entity Framework Core, and Angular/TypeScript, with hands-on delivery on Microsoft Azure and AWS. Proven track record owning complex, business-critical features end-to-end from ambiguous requirements and technical design through implementation, testing, deployment, observability, and production support while making sound architectural trade-offs around performance, scalability, security, and maintainability.",
      "Recognized for diagnosing complex cross-system issues, driving measurable performance and reliability improvements, and raising engineering quality through rigorous code review and mentorship. Effective collaborator with distributed Product, QA, Design, and Engineering teams in fast-paced Agile/Scrum environments; an early adopter of AI-assisted development workflows including GitHub Copilot, Claude Code, and Cursor.",
    ],
  },
  skills: {
    title: "Skills & Competencies",
    groups: [
      [
        "Languages",
        "C#, TypeScript, JavaScript (ES6+), SQL, HTML5, CSS3, VB.NET, Python",
      ],
      [
        "Backend & .NET",
        ".NET Core, .NET Framework, ASP.NET Core, ASP.NET MVC/Web API, Entity Framework/Core, LINQ, RESTful APIs, Microservices, Razor, Blazor, Clean Architecture, CQRS, Domain-Driven Design, SOLID Principles, Design Patterns",
      ],
      [
        "Frontend",
        "Angular (2–17), React, Node.js, RxJS, NgRx, Angular Material, Bootstrap, Tailwind CSS, jQuery, responsive and component-driven UI design",
      ],
      [
        "Databases",
        "Microsoft SQL Server, PostgreSQL, Oracle, T-SQL, query optimization, database design and normalization; familiarity with MongoDB and Redis",
      ],
      [
        "Cloud & Infrastructure",
        "Microsoft Azure (App Service, Functions, Azure SQL, Service Bus, Key Vault, Application Insights), AWS (EC2, S3, Lambda, RDS), Docker, ARM/Bicep, Terraform",
      ],
      [
        "DevOps & Tooling",
        "Azure DevOps, CI/CD pipeline design, Git, GitHub, TFS, release management, environment configuration, build and deployment automation",
      ],
      [
        "APIs & Integration",
        "RESTful Web Services, SOAP, GraphQL, JSON, XML, OAuth2/JWT, Swagger/OpenAPI, third-party and payment gateway integration, message queues",
      ],
      [
        "Testing & Quality",
        "Unit and integration testing (xUnit, NUnit, MSTest), Selenium, Postman, SoapUI, TDD practices, accessibility testing (WCAG/AODA), code coverage",
      ],
      [
        "Security & Reliability",
        "OWASP Top 10 awareness, secure coding, application performance monitoring, logging and observability (Application Insights, Serilog), incident root-cause analysis",
      ],
      [
        "AI-Assisted Development",
        "GitHub Copilot, Claude Code, and Cursor for codebase analysis, technical design, debugging, refactoring, test generation, and documentation",
      ],
      [
        "Engineering & Leadership",
        "Agile/Scrum, system architecture and technical design, code review, performance optimization, technical documentation, cross-functional collaboration, mentorship, team leadership, stakeholder communication",
      ],
    ],
  },
  experience: {
    title: "Professional Experience",
    roles: [
      {
        title: "Software Engineer (Contract)",
        company: "KnowledgeHook Inc.",
        dates: "May 2024 – Present",
        bullets: [
          "Own complex full-stack features end-to-end from requirements and technical design through development, testing, deployment, and production support using C#, ASP.NET Core, Entity Framework Core, Angular, TypeScript, REST APIs, and SQL Server.",
          "Design and enhance RESTful APIs, backend services, relational data models, and Entity Framework Core queries, balancing performance, scalability, maintainability, security, and backward compatibility.",
          "Architect solutions spanning Angular applications, .NET services, APIs, SQL Server databases, scheduled/background jobs, and notification workflows.",
          "Investigate cross-system performance issues using APM tooling, structured logging, SQL analysis, and EF Core diagnostics, improving response times and reducing production incidents.",
          "Author Technical Design Documents covering architecture, database changes, API contracts, background processing, security, observability, edge cases, testing, and rollout strategy.",
          "Partner with Product Owners, QA, Design, and engineering stakeholders to clarify requirements, evaluate trade-offs, decompose initiatives, and surface risk early.",
          "Conduct peer code reviews and shape standards around maintainability, performance, testing, accessibility, and secure development.",
          "Champion GitHub Copilot, Claude Code, and Cursor for analysis, design, debugging, refactoring, test generation, and documentation, validating output through testing and peer review.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Twenty7Tec",
        dates: "January 2023 – May 2024",
        bullets: [
          "Designed, developed, automated, and debugged backend services and application components for a UK-based Insurtech platform.",
          "Led architectural discussions and technical decisions, evaluating trade-offs and evolving architecture for current and future roadmap needs.",
          "Owned application enhancements end-to-end, improving performance, maintainability, reliability, and user experience.",
          "Diagnosed complex cross-cutting issues and improved code quality, system reliability, and development processes.",
          "Conducted peer reviews focused on correctness, maintainability, performance, testability, and engineering standards.",
          "Collaborated with Product Owners, QA, designers, and engineers in an Agile environment to deliver production-ready features.",
          "Mentored junior engineers through reviews, technical guidance, and pairing on complex problems.",
        ],
      },
      {
        title: "Technical Instructor (Part-Time Contract)",
        company: "HiCounselor",
        dates: "April 2022 – February 2023",
        bullets: [
          "Produced technical video curriculum covering .NET Framework and Angular 13.",
          "Delivered interactive live sessions combining lectures, discussions, live coding, and hands-on project-based learning.",
          "Assessed student progress using varied evaluation methods and provided constructive, actionable feedback.",
          "Adapted teaching methods to diverse learning styles and supported aspiring software engineers in building practical, job-ready skills.",
        ],
      },
      {
        title: "Software Engineer (Contract)",
        company: "DXC Technology",
        dates: "March 2022 – December 2022",
        bullets: [
          "Designed, developed, and maintained enterprise web applications using Angular, TypeScript, .NET Core, .NET Framework, REST APIs, and relational databases.",
          "Designed and built RESTful Web APIs for internal workflows and third-party integrations.",
          "Diagnosed frontend, backend, API, and database issues, using SQL optimization and application debugging to improve performance and reliability.",
          "Delivered L3 application support, identifying root causes and implementing durable production fixes.",
          "Resolved AODA/accessibility issues across web and mobile applications.",
          "Developed and maintained unit tests and broader testing practices to prevent regression.",
          "Participated across the Agile/Scrum lifecycle including planning, development, testing, reviews, deployment, and troubleshooting.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Zenith Bank Plc",
        dates: "February 2020 – March 2022",
        bullets: [
          "Designed, developed, tested, deployed, and maintained business-critical applications and services using C#, .NET Core, .NET Framework, REST APIs, and relational databases.",
          "Designed and implemented secure RESTful API integrations with third-party payment platforms.",
          "Collaborated cross-functionally through requirements analysis, technical design, implementation, testing, and production delivery.",
          "Performed application profiling, code tuning, and database optimization to improve responsiveness and reliability.",
          "Developed unit tests and testing methodologies to reduce regressions across frequent releases.",
          "Conducted peer reviews and mentored junior engineers through technical guidance and hands-on problem-solving.",
        ],
      },
      {
        title: "Software Engineer",
        company: "Fidelity Bank Plc",
        dates: "December 2016 – February 2020",
        bullets: [
          "Developed, maintained, and enhanced core banking and internal enterprise applications using ASP.NET, C#, REST APIs, and SQL Server.",
          "Designed, developed, tested, and deployed features across the full software development lifecycle.",
          "Provided L3 production support, debugging application and database issues, performing SQL analysis, and implementing stability fixes.",
          "Investigated recurring defects and implemented corrective changes that improved reliability, maintainability, and user experience.",
          "Designed and developed RESTful API integrations with internal and third-party systems.",
          "Collaborated with engineering teams, business users, and external stakeholders through requirements, design, development, testing, and deployment.",
          "Created and maintained technical documentation for software components, integrations, and system changes.",
        ],
      },
    ],
  },
  education: {
    title: "Education & Certifications",
    items: [
      "Master of Science, Information Technology | National Open University of Nigeria – 2019",
      "Bachelor of Science, Computer Science | University of Benin – 2014",
      "Microsoft Certified: Azure Developer Associate – 2023",
      "ITIL 3 (Information Technology Infrastructure Library) – 2019",
    ],
  },
};
