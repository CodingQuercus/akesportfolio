"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <div
            className="flex flex-col h-screen px-6 sm:px-12 md:px-[80px] lg:px-[160px] xl:px-[240px] bg-cover bg-center"
            style={{
                background: "linear-gradient(45deg, #3487EA, #00ACFA, #00CAE5, #00E2B8, #90F289, #F9F871)",
            }}
        >
            <div className="flex flex-col items-center justify-center flex-grow text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-shadow-lg text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[128px] text-[#282828] font-extrabold leading-tight font-sans transform"
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
                            className="px-5 py-2 sm:px-6 sm:py-3 border border-[#282828] bg-[#282828] text-[#F3F3F3] rounded-lg shadow-md text-sm sm:text-base cursor-pointer"
                        >
                            Projects
                        </motion.button>
                    </Link>
                    <Link href="#contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-5 py-2 sm:px-6 sm:py-3 border bg-[#F3f3f3] border-[#F3F3F3] text-[#282828] rounded-lg shadow-md text-sm sm:text-base cursor-pointer"
                        >
                            Contact
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
