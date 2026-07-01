/**
 * PORTFOLIO CONTENT
 * All copy on the site is sourced from this file, so updating content
 * never requires touching component markup.
 */

export const profile = {
  name: "Suryanarayana S",
  title: "B.Tech Information Technology Student",
  heroDescription:
    "Interested in software development, web development, developer tools, and AI applications. Building projects to learn, explore ideas, and develop practical technical skills.",
  about:
    "Hi, I'm Suryanarayana, an aspiring software developer with a strong interest in web development, developer tools, and AI-powered applications. I enjoy turning ideas into practical solutions and continuously expanding my skills through hands-on learning and development. My experience includes working with Java, C++, Python, JavaScript, React, and MongoDB, while exploring modern technologies and improving my problem-solving abilities. My goal is to build meaningful software, gain real-world experience, and grow as a developer.",
};

/**
 * Project status meta — drives both the badge label and the color token
 * used for that badge, so status is encoded once and reused everywhere.
 */
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

/** Sections used to build the navbar and scroll-spy in one place. */
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];
