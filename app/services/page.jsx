"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        num: '01',
        title: "Web Development",
        description: "I exel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
        href: ""
    },
    {
        num: '02',
        title: "Data Engineer",
        description: "I exel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
        href: ""
    },
    {
        num: '03',
        title: "AI Engineer",
        description: "I exel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
        href: ""
    },
    {
        num: '04',
        title: "Game Developer",
        description: "I exel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.",
        href: ""
    },

]

const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-3">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.5, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="flex flex-1 flex-col justify-center gap-6 group"
                            >
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline group-hover-outline transition-all duration-500">
                                        {service.num}
                                    </div>
                                    <Link
                                        href={service.href}
                                        className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                    >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2
                                    className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500"
                                >
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full" >

                                </div>

                            </div>

                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services