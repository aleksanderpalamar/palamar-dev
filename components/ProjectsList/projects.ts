type Props = {
  status?: string;  
  id: string;
  title: string;
  description: string;
  href: string;
  githubUrl: string;
  badge?: [
    {
      id: string;
      label: string;
    }
  ];
  image?: string;
};

export const projects = [
  {
    id: "TaskFlow",
    status: "In Progress",
    title: "TaskFlow",
    description: "Collaborate, manage project, and reach new productivity levels. From highly, regarded projects to mind-blowing initiatives, we accomplish it all with TaskFlow.",
    href: "https://github.com/aleksanderpalamar/taskflow",
    githubUrl: "https://github.com/aleksanderpalamar/taskflow",
    badge: [
      {
        id: "next",
        label: "Next.js",
      },
      {
        id: "prisma",
        label: "Prisma",
      },
      {
        id: "tailwind",
        label: "Tailwind",
      },
      {
        id: "mysql",
        label: "MySQL",
      },
      {
        id: "stripe",
        label: "Stripe",
      }
    ]
  },
  {
    id: "xteam",
    status: "In Production",
    title: "XTeam Chat Application",
    description:
      "xTeam Chat is an exciting Fullstack application built with Next.js 13, Socket.io, Prisma, Tailwind, and MySQL. This application enables teams to collaborate efficiently, providing a real-time chat experience. Harness the power of modern technology to enhance your team's communication",
    href: "https://github.com/aleksanderpalamar/team-chat-application",
    githubUrl: "https://github.com/aleksanderpalamar/team-chat-application",
    badge: [
      {
        id: "next",
        label: "Next.js",
      },
      {
        id: "socket",
        label: "Socket.io",
      },
      {
        id: "prisma",
        label: "Prisma",
      },
      {
        id: "tailwind",
        label: "Tailwind",
      },
      {
        id: "mysql",
        label: "MySQL",
      },
    ],
    image: "https://cdn.discordapp.com/attachments/811800332006457356/1154455746575081502/image.png?ex=655644b2&is=6543cfb2&hm=b6e9942bed4f3e15859fb8d718ac0fccd3c65746984352fb61928442e3fb0333&"
  },
  {
    id: "Notes",
    status: "In Production",
    title: "Notes",
    description:
      "Notes is the connected workspace fou your ideas, documents, and plans, faster work and better collaboration.",
    githubUrl: "https://github.com/aleksanderpalamar/notes",
    href: "https://appnotes.vercel.app/",
    badge: [
      {
        id: "next",
        label: "Next.js",        
      },
      {
        id: "tailwind",
        label: "Tailwind",
      },
      {
        id: "convex",
        label: "Convex",
      },
      {
        id: "clerk",
        label: "Clerk",
      },
      {
        id: "typescript",
        label: "TypeScript",
      }
    ],
    image: "https://cdn.discordapp.com/attachments/811800332006457356/1170063799542370446/image.png?ex=6557add4&is=654538d4&hm=3af6d8953c934d78cb921f7c9e781879273cd43cf68b0e48d388b35f0164e1ef&",
  },
  {
    id: "palamar ui",
    status: "In Production",
    title: "Palamar UI Library",
    description:
      "" +
      "Palamar UI Library is a collection of React components that can be used in any React application. It includes a variety of components such as buttons, inputs, and more. ",
    githubUrl: "https://github.com/aleksanderpalamar/palamar-ui",
    href: "https://github.com/aleksanderpalamar/palamar-ui",
  },
  {
    id: "api-contact",
    status: "In Production",
    title: "API Contact",
    description:
      "API Contact is a simple contact management application that allows users to create, read, update, and delete contacts.",
    githubUrl: "https://github.com/aleksanderpalamar/api-contact",
    href: "https://github.com/aleksanderpalamar/api-contact",
    badge: [
      {
        id: "node",
        label: "Node.js",
      },
      {
        id: "typescript",
        label: "TypeScript",
      },
      {
        id: "nodemailer",
        label: "Nodemailer",
      }
    ],
  },  
] as Props[];

