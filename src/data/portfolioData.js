export const profile = {
  name: "Suryanarayana S",
  title: "B.Tech Information Technology Student",
  heroDescription:
    "Aspiring Full Stack Developer passionate about building responsive web applications, developer tools, and AI-powered solutions. Continuously learning modern technologies and creating projects that solve real-world problems.",
  about:
    "Hi, I'm Suryanarayana, an aspiring Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. I enjoy transforming ideas into practical software solutions while continuously expanding my technical skills through hands-on projects. My experience includes Java, C++, Python, JavaScript, React, Node.js, Express.js, and MongoDB, along with exploring AI-powered applications and developer tools. My goal is to create impactful software, gain real-world experience, and grow into a skilled full stack developer.",
};

export const statusMeta = {
  completed: { label: "Completed", cssClass: "status-completed" },
  "in-development": { label: "In Development", cssClass: "status-progress" },
  concept: { label: "Concept", cssClass: "status-concept" },
};

export const projects = [
  {
    id: "easycode-dev",
    title: "EasyCode Dev",
    link: "https://github.com/SURYANARAYANA-01/EasyCode",
    status: "completed",
    description:
      "A Visual Studio Code extension that generates programming examples and templates for multiple programming languages. It helps students, educators, and developers quickly create code examples and reduce repetitive coding tasks.",
    tagsLabel: "Tech Stack",
    tags: ["TypeScript", "VS Code Extension API"],
  },
  {
    id: "leave-ledger",
    title: "LeaveLedger",
    link: "https://leave-ledger-nine.vercel.app/",
    status: "completed",
    description:
      "A full-stack employee leave management system that streamlines the process of requesting, approving, and tracking leave within an organization. Employees can submit leave requests and monitor their status, while administrators manage approvals, leave balances, and records through a centralized dashboard, reducing manual effort and improving transparency.",
    tagsLabel: "Category",
    tags: ["HR Management", "Productivity"],
  },
  {
    id: "urbanwear",
    title: "Urban Wear",
    link: "https://github.com/SURYANARAYANA-01/UrbanWear",
    status: "completed",
    description:
      "Urban Wear is a modern e-commerce website for men's fashion, offering a seamless shopping experience with a clean, responsive interface. Users can browse stylish clothing collections, explore product details, filter items by category, and enjoy an intuitive shopping journey designed for speed and accessibility.",
    tagsLabel: "Category",
    tags: ["Shoping & Fashion"],
  },
  {
    id: "journey-alarm",
    title: "Journey Alarm",
    link: "https://github.com/SURYANARAYANA-01/Journey_Alarm",
    status: "in-development",
    description:
      "An AI-powered travel companion designed to help commuters avoid missing their destination. Users can save frequent routes, start journeys with a single tap, and receive smart alerts before arrival, providing a reliable and stress-free travel experience.",
    tagsLabel: "Category",
    tags: ["Productivity & Travel"],
  },
  {
    id: "hidden-chapter",
    title: "Hidden Chapter",
    status: "concept",
    description:
      "A digital farewell time capsule that captures what friends secretly think about each other before they part ways. Participants answer meaningful questions and leave messages for the future, which remain hidden until a reunion, creating a memorable and interactive experience.",
    tagsLabel: "Category",
    tags: ["Social & Memory Preservation"],
  },
];

export const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["Java", "C++", "Python", "JavaScript"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "React"],
  },
  {
    category: "Backend",
    skills: ["Express.js", "Node.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MongoDB"],
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "GitHub", "Visual Studio Code", "VS Code Extension Development"],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech) — Information Technology",
  College: "SSM College of Engineering",
  graduation: "Expected Graduation: 2027",
  description: "Currently pursuing a Bachelor of Technology in Information Technology with a strong interest in software development, web development, developer tools, and AI applications. Actively building practical projects, exploring emerging technologies, and strengthening problem-solving skills through hands-on development and continuous learning.",
};

export const interests = [
  "Software Development",
  "Web Development",
  "Artificial Intelligence Applications",
  "Developer Tools",
  "Productivity Solutions",
];

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];