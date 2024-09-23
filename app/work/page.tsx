"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Front-end",
    title: "BConnect Website",
    description:
      "Building a web-based platform to socialize, exchange, buy and sell books for the book-loving community.",
    stack: [
      { name: "Html" },
      { name: "Postcss" },
      { name: "Less" },
      { name: "Tailwindcss" },
      { name: "Shadcn-ui" },
      { name: "React" },
      { name: "Typescript,..." },
    ],
    image: "/asset/photo-portfolio.png",
    live: "https://b-connect.vercel.app/",
    github: "https://github.com/TrungNguyen1811/b-connect",
  },
  {
    num: "02",
    category: "Front-end",
    title: "BRental Website",
    description:
      "a web application that allows users to register, rent and return books online easily and conveniently.",
    stack: [
      { name: "Html" },
      { name: "Postcss" },
      { name: "Less" },
      { name: "Tailwindcss" },
      { name: "Shadcn-ui, Platejs, Material-ui, Chartjs" },
      { name: "React" },
      { name: "Typescript,..." },
    ],
    image: "/asset/photo-portfolio.png",
    live: "https://book-rent-liart.vercel.app/",
    github: "https://github.com/blackmouse572/book-rent",
  },
  {
    num: "03",
    category: "Front-end",
    title: "NextJs Dashboard",
    description:
      "a web application that allows users to register, rent and return books online easily and conveniently.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Tailwindcss" },
      { name: "NextJs" },
      { name: "Typescript" },
      { name: "PostgresSQL,..." },
    ],
    image: "/asset/photo-portfolio.png",
    live: "https://next-js-dashboard-dsut.vercel.app/",
    github: "https://github.com/TrungNguyen1811/NextJsDashboard",
  },
  {
    num: "04",
    category: "Front-end",
    title: "Portfolio",
    description: "Portfolio.",
    stack: [
      { name: "Html" },
      { name: "Css" },
      { name: "Tailwindcss" },
      { name: "Framer-motion" },
      { name: "Swiper" },
      { name: "Shadcn-ui" },
      { name: "NextJs" },
      { name: "Typescript,..." },
    ],
    image: "/asset/photo-portfolio.png",
    live: "https://portfolio-ntd.vercel.app/",
    github: "https://github.com/TrungNguyen1811/portfolio",
  },
];
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h3 className="text-[24px] font-semibold leading-none text-white/60 transition-all duration-500 capitalize">
                {project.category} project
              </h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pick-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          className="object-cover"
                          alt=""
                          fill
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="h-12 w-12"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default Work;
