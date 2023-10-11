import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import mimino from "@/public/mimino.jpeg"
import phonebook from "@/public/phonebook.jpeg"
import tictactoe from "@/public/tictactoe.jpeg"
import moviesearch from "@/public/moviesearch.jpeg"
import bookshelf from "@/public/bookshelf.jpeg"
import restapi from "@/public/rest-api.jpeg"

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
    title: "Full-Stack Developer course",
    location: "Remote",
    description:
      "On course I covered topics like HTML, CSS, JS, React, Redux, Node.js and many more. Created several individual and group projects. On group projects I tried myself in Scrum Master role.",
    icon: React.createElement(LuGraduationCap),
    date: "Jan 23 - Present",
  },
  {
    title: "Operations manager",
    location: "Cracow, Poland",
    description:
    "I am working at Euroclear Bank. My day-to-day responsibilities include filling the database with analyzed data. Additionally, I participate in various business projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Apr 22 - Present",
  },
  {
    title: "Auditor",
    location: "Kyiv, Ukraine",
    description:
    "While working as an auditor, I was responsible for reviewing financial statements and preparing reports, as well as interacting with clients through communication and collaboration.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov 19 - Feb 21",
  },
  {
    title: "Corporate finance and Accounting",
    location: "Cracow, Poland",
    description:
      "During the studies I gained a good theoretical base in financial fields. However university gave me not only knowledge, but it taught me to think logically and to debug communication with mentors for achieving the best result.",
    icon: React.createElement(LuGraduationCap),
    date: "Sep 16 - Sep 19",
  },
] as const;

export const projectsData = [
  {
    title: "REST-API",
    description:
      "My first back-end project for contacts storage.",
    functional: "user sign up/sign in/logout, update users subscription plan and avatar, create/update/delete contacts, filtering and more.",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose", "Joi", "Multer"],
    imageUrl: restapi,
  },
  {
    title: "TicTacToe",
    description:
    "Wildly known game tic-tac-toe.",
    functional: "first try in using Typescript and Next.js.",
    tags: ["Next.js", "Typescript"],
    imageUrl: tictactoe,
  },
  {
    title: "Movie-search",
    description:
      "An online database of information related to movies.",
    functional: "popular movies, search by name/category, watch list, detailed overviews, pagination and recently viewed.",
    tags: ["React", "Styled Components", "Router DOM", "Redux Toolkit"],
    imageUrl: moviesearch,
  },
  {
    title: "Phonebook",
    description:
      "Web application for creating and storing contacts",
    functional: "user sign up/sign in/logout, create/update/delete contacts available after login.",
    tags: ["React", "Module CSS", "Router DOM", "Redux Toolkit"],
    imageUrl: phonebook,
  },
  {
    title: "Bookshelf",
    description:
      "Web book-store.",
    functional: "popular books, filter by category, authorization, shopping list, modals, burger menu.",
    tags: ["HTML", "CSS", "Vanilla JS", "Firebase"],
    imageUrl: bookshelf,
  },
  {
    title: "MIMINO",
    description:
      "Hotel with restaurant website",
    functional: "informative website about the hotel, its rooms, prices, and the restaurant on the premises.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    imageUrl: mimino,
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