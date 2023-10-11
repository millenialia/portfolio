import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "REST-API",
    description:
      "My first back-end project for contacts storage.",
    functional: "user sign up/sign in/logout, update users subscription plan and avatar, create/update/delete contacts, filtering and more.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Joi", "Multer"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Movie-search",
    description:
      "An online database of information related to movies.",
    functional: "popular movies, search by name/category, watch list, detailed overviews, pagination and recently viewed.",
    tags: ["React", "Styled Components", "Router DOM", "Redux Toolkit"],
    imageUrl: rmtdevImg,
  },
  {
    title: "TicTacToe",
    description:
      "Wildly known game tic-tac-toe.",
    functional: "first try in using Typescript and Next.js.",
    tags: ["Next.js", "Typescript"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Phonebook",
    description:
      "Web application for creating and storing contacts",
    functional: "user sign up/sign in/logout, create/update/delete contacts available after login.",
    tags: ["React", "Module CSS", "Router DOM", "Redux Toolkit"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Bookshelf",
    description:
      "Web book-store.",
    functional: "popular books, filter by category, authorization, shopping list, modals, burger menu.",
    tags: ["HTML", "CSS", "Vanilla JS", "Firebase"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "MINIMO",
    description:
      "Hotel with restaurant website",
    functional: "informative website about the hotel, its rooms, prices, and the restaurant on the premises.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Git",
  "Node.js",
  "Express",
  "MongoDB",
  "Rest API",
  "Figma",
  "TypeScript",
  "Next.js",
] as const;