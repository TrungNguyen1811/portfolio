"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const about = {
  title: "About me",
  description: "",
  info: [
    {
      fieldName: "Name",
      filedValue: "Trung Nguyen",
    },
    {
      fieldName: "Phone",
      filedValue: "(+84) 76 252 6689",
    },
    {
      fieldName: "Email",
      filedValue: "trung4atlam@gmail.com",
    },
    {
      fieldName: "Facebook",
      filedValue: "/trungnguyen1811",
    },
    {
      fieldName: "Experience",
      filedValue: "6+ month :D",
    },
    {
      fieldName: "Freelance",
      filedValue: "Available",
    },
    {
      fieldName: "Nationality",
      filedValue: "Viet Nam",
    },
    {
      fieldName: "Languages",
      filedValue: "VietNamese, English",
    },
  ],
};

const experience = {
  title: "My experience",
  description: "",
  items: [
    {
      company: "Fpt Software",
      position: "Full Stack Developer",
      duration: "Jan 2023 - Aril 2023",
    },
    {
      company: "Freelance",
      position: "Copy Writing",
      duration: "Jan 2023 - Dec 2023",
    },
  ],
};

const education = {
  title: "Education",
  description: "",
  major: "Software Engineer",
  university: "Fpt University",
  gpa: "3.1/4.0",
  duration: "Sep 2020 - June 2024",
};

const certificate = {
  icon: "",
  title: "My certificate",
  description: "",
  items: [
    {
      institution: "By Google",
      duration: "Nov 27, 2023",
      degree: "Google Project Management",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/4Z4LL9LXNUBA",
    },
    {
      institution: "By University of Michigan",
      duration: "Nov 26, 2023",
      degree: "User Experience Research and Design",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/HZMXS5WLQX56",
    },
    {
      institution: "By  University of Minnesota",
      duration: "Jul 24, 2022",
      degree: "Software Development Lifecycle",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/YZA9WUKJ3RYK",
    },
    {
      institution: "By University of Maryland",
      duration: "Jul 14, 2023",
      degree: "Entrepreneurship: Launching an Innovative Business",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/GFHG9GZRWFJP",
    },
    {
      institution: "By CertNexus",
      duration: "Nov 14, 2022",
      degree: "CertNexus Certified Ethical Emerging Technologist",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/XFMCSZE76C59",
    },
    {
      institution: "By University of California",
      duration: "Feb 15, 2023",
      degree: "Academic English: Writing",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WPEHBZYFA54A",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <SiTailwindcss />,
      name: "taildindcss",
    },
    {
      icon: <FaReact />,
      name: "reactJs",
    },
    {
      icon: <SiNextdotjs />,
      name: "nextJs",
    },
    {
      icon: <DiNodejs />,
      name: "nodejs",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificate">Certificate</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 xl:gap-x-12 max-w-[720px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.filedValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#593b2a] h-[184px] py-6 px-10 flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="rounded-full w-[6px] h-[6px] bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <div className="h-[400px]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    <div className="bg-[#593b2a] h-[200px] py-6 px-10 flex-col justify-center items-center lg:items-start gap-1">
                      <span className="text-accent">
                        {education.university}
                      </span>
                      <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                        {education.major}
                      </h3>
                      <p className="text-white/60">GPA: {education.gpa}</p>
                      <p className="text-white/60">{education.duration}</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="certificate" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{certificate.title}</h3>
                {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {certificate.description}
                </p> */}
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {certificate.items.map((item, index) => {
                      return (
                        <Link key={index} href={item.link}>
                          <li className="bg-[#593b2a] h-[184px] py-6 px-10 flex-col justify-center items-center lg:items-start gap-1">
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-lg max-w-[260px] min-h-[60px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                            <div className="flex items-center gap-3 mt-auto">
                              <span className="rounded-full w-[6px] h-[6px] bg-accent"></span>
                              <p className="text-white/60 text-sm">
                                {item.institution}
                              </p>
                            </div>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#593b2a] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};
export default Resume;
