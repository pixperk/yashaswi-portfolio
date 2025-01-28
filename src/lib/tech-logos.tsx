import type { IconType } from "react-icons";
import {
    SiApachekafka,
    SiCplusplus,
    SiDocker,
    SiExpress,
    SiGraphql,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiOracle,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiReactquery,
    SiRedis,
    SiRedux,
    SiRust,
    SiTailwindcss,
    SiTrpc,
    SiTypescript
} from "react-icons/si";

import { DiDatabase } from "react-icons/di";

// Map only the skills from the array to their corresponding icons
export const techLogos: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  "Node.js": SiNodedotjs,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  Express: SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Docker: SiDocker,
  Redis: SiRedis,
  GraphQL: SiGraphql,
  Redux: SiRedux,
  Rust : SiRust,
  "C/C++" : SiCplusplus,
  Java : SiOracle,
  "Express.js" : SiExpress,
  "Hono.js" : SiNodedotjs,
  Actix : SiRust,
  Axum : SiRust,
  tRPC : SiTrpc,
  "Prisma ORM" : SiPrisma,
  "Drizzle ORM" : DiDatabase,
  Kafka : SiApachekafka,
  "Tanstack-Query" : SiReactquery
}

// Skills array

