"use client"
import { motion } from "framer-motion"
import React, { useState } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/ui/WorkSliderBtns"

const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Opps! dance studio",
        description: "Crafted an interactive and responsive frontend with React.js, Tailwind CSS, and NextUI for managing dance studio bookings and schedules.",
        stack: [
            { name: "Html 5" },
            { name: "Scss" },
            { name: "React.js" },
            { name: "NextUI" },
            { name: "Tailwind.css" },
        ],
        image: '/assets/work/ODS_fe.png',
        live: '',
        github: 'https://github.com/nhatminhhatesyou/oops-dance_fe',
    },
    {
        num: "02",
        category: "backend",
        title: "Opps! dance studio",
        description: "Designed and implemented the backend system with Django and MySQL to manage user roles, bookings, and payments. Developed RESTful APIs for admins, instructors, and students, integrated Celery for background tasks like booking approvals and email notifications.",
        stack: [
            { name: "MySQL" },
            { name: "DJango" },
            { name: "Celery" },
        ],
        image: '/assets/work/ODS_fe.png',
        live: '',
        github: 'https://github.com/nhatminhhatesyou/oops-dance_be',
    },
    {
        num: "03",
        category: "game",
        title: "Somi's Adventure",
        description: "A mini-game built with a custom C++ game framework. Features game logic with Singleton pattern and OOP, plus 2D animations for dynamic backgrounds and character sprites.",
        stack: [
            { name: "C++" },
            { name: "OOP" },
            { name: "Singleton Pattern" },
            { name: "2D Animation" },
            { name: "Sprite Sheets" }
        ],
        image: '/assets/work/somi_adventure.png',
        live: '',
        github: 'https://github.com/nhatminhhatesyou/somi_adventure/',
    },
    {
        num: "04",
        category: "course",
        title: "Big Data",
        description: "Built a real-time pipeline using Kafka producers and Spark Streaming to ingest, process, and store review data, then visualized with Elasticsearch and Kibana dashboards.",
        stack: [
            { name: "Kafka" },
            { name: "Spark Streaming" },
            { name: "Hadoop (HDFS)" },
            { name: "Cassandra" },
            { name: "Elasticsearch" },
            { name: "Kibana" },
            { name: "Docker" }
        ],
        image: '/assets/work/big_data.png',
        live: '',
        github: 'https://github.com/just-NPT/big_data_btl/',
    },
    {
        num: "05",
        category: "course",
        title: "Practical Data Modelling",
        description: "Developed a full data science workflow using Python and Jupyter Notebook for classification and clustering tasks. Included data cleaning, feature exploration, building models, and evaluating performance.",
        stack: [
            { name: "Python" },
            { name: "Jupyter Notebook" },
            { name: "scikit-learn" },
            { name: "Pandas" },
            { name: "Matplotlib" }
        ],
        image: '/assets/work/rmit.png',
        live: '',
        github: 'https://github.com/nhatminhhatesyou/practicle_DS_A2',
    },
    {
        num: "06",
        category: "course",
        title: "Recommender System",
        description: "Implemented five recommendation algorithms in Python to predict user-item ratings: user average, item average, User KNN, Item KNN, and a hybrid User-Item KNN. Compared their performance, optimized hyperparameters, and presented critical analysis on accuracy and efficiency.",
        stack: [
            { name: "Python" },
            { name: "Jupyter Notebook" },
            { name: "NumPy" },
            { name: "Pandas" },
            { name: "Matplotlib" }
        ],
        image: "/assets/work/rmit.png",
        live: "",
        github: "https://github.com/nhatminhhatesyou/practicle_DS_A3",
    },
]

const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) => {
        //get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.5, duration: 0.4, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-3"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num*/}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>
                            {/* project title */}
                            <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
                                "{project.title}"
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li key={index} className="text-xl text-accent">
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                {/* <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link> */}
                                {/* github project button */}
                                <Link href={project.github} target="_blank">
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
                            className="xl:h-[520px] mb-12 gap-2"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => {
                                return (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[480px] relative group flex justify-center items-center ">
                                            {/* overlay */}
                                            <div
                                                className="absolute top-0 bottom-0 w-full h-full z-10"
                                            >

                                            </div>
                                            {/* image */}
                                            <div className="relative h-full w-full">
                                                <Image
                                                    src={project.image}
                                                    fill
                                                    className="object-cover rounded-2xl"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            {/* slider buttons */}
                            <WorkSliderBtns
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]  z-20 w-full justify-between "
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section >
    )
}

export default Work