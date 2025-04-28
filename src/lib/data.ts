export const projects = [
  { 
    id: 0, 
    title: 'Redis in Rust', 
    description: 'A high-performance Redis clone built from scratch in Rust, focusing on understanding Redis internals and Rust patterns.',
    image: 'https://raw.githubusercontent.com/pixperk/redis_in_rust/refs/heads/main/assets/banner.png', 
    github: 'https://github.com/pixperk/redis_in_rust', 
    live: 'https://github.com/pixperk/redis_in_rust',
    techStack: 'Rust, Tokio'
  },
  { 
    id: 1, 
    title: 'UptimeX', 
    description: 'A server monitoring SaaS that tracks HTTP, TCP, or DB servers and sends alerts when servers are down or back up. Also monitors SSL certificates with custom notification options.', 
    image: '/uptimex.png?height=100&width=100', 
    github: 'https://github.com/pixperk/uptimex-server', 
    live: 'https://uptimex.onrender.com',
    techStack: 'Next.js, Node.js, GraphQL, PostgreSQL, Sequelize, WebSockets (GraphQL Subscriptions), TypeScript, Tailwind CSS'
  },
  { 
    id: 2, 
    title: 'PingPanda', 
    description: 'A real-time SaaS monitoring app that delivers alerts directly to your Discord.',
    image: '/pingPanda.png?height=100&width=100', 
    github: 'https://github.com/pixperk/ping-panda', 
    live: 'https://ping-panda-theta.vercel.app',
    techStack: 'Next.js, Hono (Backend Framework), Tailwind CSS, ShadCN, PostgreSQL, Prisma ORM, React Query, Stripe Integration'
  },
  {
    id: 3,
    title: "Quill",
    description: "A SaaS platform enabling users to chat with AI using the context of their uploaded PDFs. Built with a focus on performance, usability, and clean design.",
    image: "/quill.png?height=100&width=100",
    github: "https://github.com/pixperk/quill",
    live: "https://quill-two-ochre.vercel.app/",
    techStack: "Next.js, tRPC, Tailwind CSS, shadcn-ui, Prisma ORM, Pinecone, LangChain, Stripe, Zod, Kinde, TypeScript"
  },
  {
    id: 4,
    title: "EcoCart",
    description: "A collaborative eco-friendly shopping app designed to create AI-powered shopping lists, track environmental impact, and make sustainable choices easier.",
    image: "/ecoCart.png?height=100&width=100",
    github: "https://github.com/pixperk/eco-cart",
    live: "https://eco-cart-liart.vercel.app/",
    techStack: "Next.js (Frontend & Backend), Prisma ORM, PostgreSQL, Tailwind CSS, shadcn-ui",
  },
  {
    id: 5,
    title: 'Bud Auction',
    description: 'A dynamic auction platform where users can place bids, track auctions in real-time, and receive notifications for bid updates. Features include bid validation, real-time updates, and user-friendly design.',
    image: '/budauction.png?height=100&width=100',
    github: 'https://github.com/pixperk/bud-auction',
    live: 'https://bud-auction.vercel.app/',
    techStack: 'Next.js, TypeScript, Drizzle, PostgreSQL, Tailwind CSS, Knock Workflow, Vercel'
  },
  {
    id: 6,
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
  { name: 'Go', category: 'Languages' },
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
    thumbnail : 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Feu8a4uc889ghppzloq6v.png',
    title: `Go Concurrency`,
    minutesRead: 21,
    excerpt: 'The Full Guide to Goroutines and Beyond',
    link: 'https://dev.to/pixperk/go-concurrency-the-full-guide-to-goroutines-and-beyond-2ajh',
  },
  {
    id: 2,
    thumbnail : 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fymilpoz9e8m8r3l7yjia.png',
    title: `Don't Cry about Pointers anymore`,
    minutesRead: 12,
    excerpt: 'Deep Dive with C, Go and Rust',
    link: 'https://dev.to/pixperk/dont-cry-about-pointers-anymore-deep-dive-with-c-go-and-rust-3jhk',
  },
  {
    id: 3,
    thumbnail : 'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F5rgzuo6bs45szhtlbwsi.png',
    title: `Learn gRPC COMPLETELY from Unary to Bi-directional RPCs`,
    minutesRead: 9,
    excerpt: `By building a mini Exam Service in GoLang`,
    link: 'https://dev.to/pixperk/learn-grpc-completely-from-unary-to-bi-directional-rpcs-2dnl',
  },
  
]