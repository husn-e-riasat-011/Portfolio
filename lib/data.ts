import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Patientary from "../public/patientary.png";
import Semtech from "../public/Semtech.png";
import whizlabs from "../public/Whizlabs.png";
import wishtender from "../public/wishtender.png";

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
    location: "Lahore, Pak",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Front-End Developer",
    location: "Heapware, Johar-Town Lahore ",
    description:
      "I worked as a front-end developer for 6 months in 1 job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Full-Stack Developer",
    location: "IdeoVersity, Arfa Karim",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Patientary",
    description:
      "Patientary MRI: Your Trusted Partner for Comprehensive MRI Services and Advanced Diagnostic Imaging.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: Patientary,
    lnk: "https://patientory.com/",
  },
  // {
  //   title: "Semtech",
  //   description:
  //     "Semtech: Innovating Advanced Semiconductor Solutions for a Connected World.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: Semtech,
  //   lnk: "https://www.sierrawireless.com/",
  // },
  {
    title: "Whizlabs",
    description:
      "Whizlabs: Empowering Your Success with Leading Online Certification Training and Practice Exams.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: whizlabs,
    lnk: "https://www.whizlabs.com/",
  },
  {
    title: "WishTender",
    description:
      "WishTender is your gateway to heartfelt connections, where wishes meet reality in a tapestry of shared dreams and meaningful moments.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wishtender,
    lnk: "https://www.wishtender.com/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git Hub",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Framer Motion",
] as const;
