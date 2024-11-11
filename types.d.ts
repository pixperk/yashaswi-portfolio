// types.d.ts

export type Project = {
    id: number;
    title: string;
    description: string;
    techStack : string;
    image: string;
    github: string;
    live: string;
  } 
  
  export type Skill = {
    name: string;
    level: number;
  } 
  
  export type Experience = {
    id: number;
    title: string;
    company: string;
    period: string;
    description: string;
  } 
  
  export type Education = {
    id: number;
    degree: string;
    institution: string;
    period: string;
    description: string;
  } 
  
  export type Blog = {
    id: number;
    title: string;
    excerpt: string;
    link: string;
  } 
  
  