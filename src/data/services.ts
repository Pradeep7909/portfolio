import { IServiceItem } from "@/types";

const services: IServiceItem[] = [
  {
    id: 1,
    title: "Mobile App Development",
    icons: [
      "/skills/swift.png",
      "/skills/firebase.svg",
      "/skills/react.svg",
      "/skills/dart.svg",
      "/skills/flutter.svg",
    ],
    shortDescription: "I build cross-platform and native mobile applications.",
    description:
        "I develop high-quality mobile apps for both iOS and Android using React Native, Swift, and Flutter. With Firebase integration for authentication, storage, and real-time features, I ensure smooth performance, intuitive UI, and scalable solutions tailored to your business needs.",
  },
  {
    id: 2,
    title: "Web Development",
    icons: [
      "/skills/html.svg",
      "/skills/react.svg",
      "/skills/nextjs.png",
      "/skills/angular.png",
      "/skills/css.svg",
    ],
    shortDescription: "I create modern, responsive, and SEO-friendly websites.",
    description:
        "I craft responsive, user-friendly websites and web apps using React, Next.js, and Angular. From dynamic dashboards to e-commerce solutions, I deliver fast, optimized, and visually appealing experiences that help brands grow their online presence effectively.",
  },
  {
    id: 3,
    title: "Backend Development",
    icons: [
      "/skills/nodejs.svg",
      "/skills/express.svg",
      "/skills/mongodb.svg",
      "/skills/firebase.svg",
      "/skills/postgresql.svg",
    ],
    shortDescription: "I design and develop scalable backend systems.",
    description:
        "I build robust backend systems and APIs using Node.js, Express, MongoDB, and Firebase. I focus on security, scalability, and performance to ensure seamless data flow between the frontend and backend, supporting real-time apps, authentication, and e-commerce platforms.",
  },
  {
    id: 4,
    title: "Product Development & Strategy",
    icons: [
      "/skills/git.svg",
      "/images/collaboration.png",
      "/images/logical-thinking.png",
      "/images/analytical-skills.png",
      "/skills/firebase.svg",
    ],
    shortDescription: "I help shape products from idea to deployment.",
    description:
        "I work with teams to transform ideas into fully functional products. My experience spans mobile, web, and backend development, combined with product thinking, collaboration, and problem-solving. I ensure each product aligns with user needs and business goals.",
  },
];

export default services;
