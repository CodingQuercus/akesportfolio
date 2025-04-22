"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import {TbTools} from "react-icons/tb"
import { FaEnvelope, FaProjectDiagram } from "react-icons/fa";

export default function Hero() {
    return (
        <div className="flex flex-col h-screen px-6 sm:px-12 md:px-[80px] lg:px-[160px] xl:px-[240px] bg-cover bg-center" >
            <div className="flex flex-col items-center justify-center flex-grow text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-shadow-lg text-6xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] text-[#282828] font-extrabold leading-tight font-sans transform"
                >
                    Åke Flatholm
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-shadow-md sm:text-xl md:text-2xl lg:text-3xl text-[#282828] font-normal leading-normal font-sans mt-4 sm:mt-6"
                >
                    M.Sc. Student in Interaction Technology and Design
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-wrap justify-center gap-4 mt-8 sm:mt-20"
                >
                    <Link href="#projects">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-row justify-center items-center gap-2 px-5 py-2 w-[140px] border border-[#282828] bg-[#282828] text-[#F3F3F3] rounded-lg shadow-md cursor-pointer text-center"
                        >
                            <FaProjectDiagram size={18} />
                            Projects
                        </motion.button>
                    </Link>
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-row justify-center items-center gap-2 px-5 py-2 w-[140px] border border-[#282828] bg-[#f3f3f3] text-[#282828] rounded-lg shadow-md cursor-pointer text-center"
                        >
                            <FaEnvelope size={18} />
                            Contact
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
