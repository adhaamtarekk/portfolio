import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  // redux,
  tailwind,
  nodejs,
  mongodb,
  // git,
  // figma,
  docker,
  // threejs,
  lirten,
  deloitte,
  yodawy,
  verbalizee,
  morgal,
  java,
  springboot,
  mysql,
  angular,
  // kafka,
  laravel
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Full-Stack Engineer", icon: web },
  { title: "Frontend Engineer (React / Angular)", icon: web },
  { title: "Backend Engineer (Java / Laravel / APIs)", icon: backend },
  { title: "Mobile Developer (React Natvie / Flutter)", icon: mobile },
];

const technologies = [
  { name: "Java", icon: java },
  { name: "Spring Boot", icon: springboot },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React.js", icon: reactjs },
  { name: "AngularJS", icon: angular },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node.js", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "MySQL", icon: mysql },
  { name: "Docker", icon: docker },
  // { name: "Git", icon: git },
  // { name: "Kafka", icon: kafka },
  { name: "laravel", icon: laravel },
];

const experiences = [
  {
    title: "Full Stack Engineer Analyst",
    company_name: "Deloitte Innovation Hub",
    icon: deloitte,
    iconBg: "#383E56",
    date: "May 2025 - Present",
    points: [
      "Developed and maintained enterprise full-stack applications for internal platforms across multiple business units.",
      "Built scalable RESTful APIs using Java (Spring Boot) and integrated MySQL databases with optimized queries and transaction management.",
      "Implemented responsive user interfaces using React.js and AngularJS, translating Figma designs into reusable, production-ready UI components.",
      "Collaborated with cross-functional teams in agile sprints, contributing to feature planning, implementation, and iterative delivery.",
      "Improved maintainability through modular architecture, reusable components, and clean code practices (code reviews and structured testing).",
    ],
  },
  {
    title: "Full Stack Software Engineer",
    company_name: "Yodawy",
    icon: yodawy,
    iconBg: "#383E56",
    date: "Mar 2024 - Apr 2025",
    points: [
      "Developed and maintained order management and orchestration systems using Laravel, Livewire, and Java Vert.x.",
      "Designed backend services and business logic layers to support transactional workflows and healthcare data processing.",
      "Integrated external healthcare/insurance systems and third-party APIs to enable secure and reliable data exchange.",
      "Built and enhanced front-end features for the AXA insurance mobile application using React.js, collaborating with stakeholders to deliver production-ready UI.",
      "Improved performance and stability through query optimization, refactoring, and modular service structuring.",
    ],
  },
  {
    title: "Front-end Mobile Developer Intern",
    company_name: "Lirten Solutions",
    icon: lirten,
    iconBg: "#383E56",
    date: "Sep 2021 - Sep 2022",
    points: [
      "Developed the front-end interface for the “Stract” mobile application using Flutter.",
      "Implemented user-facing features to support discovery and engagement flows.",
      "Collaborated with cross-functional teams to integrate front-end components with backend systems via REST APIs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Adham consistently delivers high-quality work, communicates clearly, and takes strong ownership of features end-to-end.",
    name: "Reference Available",
    designation: "Team Lead",
    company: "Upon request",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Verbalize",
    description:
      "A web-based platform that enables users to express their feelings through visually and verbally composed posts.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: verbalizee,
    live_demo: "https://verbalizee.netlify.app/",
    source_code_link: "https://github.com/adhaamtarekk/Verbalize",
  },
  {
    name: "Morgal International",
    description:
      "A company website showcasing an electromechanical product catalog and providing a seamless browsing experience for customers.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: morgal,
    live_demo: "https://morgalinternational.com/",
    source_code_link: "https://github.com/adhaamtarekk/Morgal-International",
  },
];

export { services, technologies, experiences, testimonials, projects };
