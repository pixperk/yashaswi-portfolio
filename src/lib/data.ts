export const projects = [
  { 
    id: 1, 
    title: 'PingPanda', 
    description: 'A real-time SaaS monitoring app that delivers alerts directly to your Discord.',
    image: '/pingPanda.png?height=100&width=100', 
    github: 'https://github.com/pixperk/ping-panda', 
    live: 'https://ping-panda-theta.vercel.app',
    techStack: 'Next.js, Hono (Backend Framework), Tailwind CSS, ShadCN, PostgreSQL, Prisma ORM, React Query, Stripe Integration'
  },
  {
    id: 2,
    title: "Quill",
    description: "A SaaS platform enabling users to chat with AI using the context of their uploaded PDFs. Built with a focus on performance, usability, and clean design.",
    image: "/quill.png?height=100&width=100",
    github: "https://github.com/pixperk/quill",
    live: "https://quill-two-ochre.vercel.app/",
    techStack: "Next.js, tRPC, Tailwind CSS, shadcn-ui, Prisma ORM, Pinecone, LangChain, Stripe, Zod, Kinde, TypeScript"
  },
  
  {
    id: 3,
    title: "EcoCart",
    description: "A collaborative eco-friendly shopping app designed to create AI-powered shopping lists, track environmental impact, and make sustainable choices easier.",
    image: "/ecoCart.png?height=100&width=100",
    github: "https://github.com/pixperk/eco-cart",
    live: "https://eco-cart-liart.vercel.app/",
    techStack: "Next.js (Frontend & Backend), Prisma ORM, PostgreSQL, Tailwind CSS, shadcn-ui",
  },
  {
    id: 4,
    title: 'Bud Auction',
    description: 'A dynamic auction platform where users can place bids, track auctions in real-time, and receive notifications for bid updates. Features include bid validation, real-time updates, and user-friendly design.',
    image: '/budauction.png?height=100&width=100',
    github: 'https://github.com/pixperk/bud-auction',
    live: 'https://bud-auction.vercel.app/',
    techStack: 'Next.js, TypeScript, Drizzle, PostgreSQL, Tailwind CSS, Knock Workflow, Vercel'
  }
  ,

  {
    id: 5,
    title: 'ChatSwift',
    description: 'A full stack real-time chat app focused on speed and usability with Upstash Redis.',
    image: '/chatswift.png?height=100&width=100',
    github: 'https://github.com/pixperk/Next-Chat-Swift',
    live: 'https://next-chat-swift.vercel.app/',
    techStack: 'Next.js 14, Upstash Redis, React, TypeScript, Tailwind CSS'
  }
];


export const skills = [
  // Languages
  { name: 'TypeScript', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Node.js', category: 'Languages' },
  { name: 'Rust', category: 'Languages' },
  { name: 'C/C++', category: 'Languages' },
  { name: 'Java', category: 'Languages' },

  // Frameworks & Libraries
  { name: 'React', category: 'Frameworks & Libraries' },
  { name: 'Next.js', category: 'Frameworks & Libraries' },
  { name: 'Express.js', category: 'Frameworks & Libraries' },
  { name: 'Hono.js', category: 'Frameworks & Libraries' },
  { name: 'Actix', category: 'Frameworks & Libraries' },
  { name: 'Axum', category: 'Frameworks & Libraries' },
  { name: 'Tailwind CSS', category: 'Frameworks & Libraries' },
  { name: 'Redux', category: 'Frameworks & Libraries' },
  { name: 'tRPC', category: 'Frameworks & Libraries' },

  // Technologies & Tools
  { name: 'PostgreSQL', category: 'Technologies & Tools' },
  { name: 'Docker', category: 'Technologies & Tools' },
  { name: 'Prisma ORM', category: 'Technologies & Tools' },
  { name: 'Drizzle ORM', category: 'Technologies & Tools' },
  { name: 'MongoDB', category: 'Technologies & Tools' },
  { name: 'Redis', category: 'Technologies & Tools' },
  { name: 'Kafka', category: 'Technologies & Tools' },
  { name: 'Tanstack-Query', category: 'Technologies & Tools' },
  { name: 'GraphQL', category: 'Technologies & Tools' },
];


export const experiences = [
 
]

export const education = [
  {
    id: 1,
    degree: 'Bachelor of Technology in Computer Science & Engineering',
    institution: 'Manipal Institute of Technology',
    period: 'July 2023 - July 2027',
    description: 'Focused on software engineering and web technologies. Expected to graduate with honors.',
  },
]

export const blogs = [
  {
    id: 1,
    title: 'What is Serverless Architecture',
    excerpt: 'If you just want to write code and do not want to worry about infrastructure and scaling - use serverless architecture.',
    link: 'https://x.com/PixPerk_/status/1845452581058822238',
  },
  {
    id: 2,
    title: `Understanding JavaScript's Prototype Inheritance`,
    excerpt: `Understanding JavaScript's Prototype Inheritance: An Interactive Guide 🧵`,
    link: 'https://x.com/PixPerk_/status/1818360375437295827',
  },
]
