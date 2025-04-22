"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    return (
        <footer className="bg-[#282828] border-t px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] py-8 flex flex-col gap-6">
            <div>
                <h3 className="text-[#F3F3F3] font-semibold text-lg sm:text-xl">
                    Have a project in mind?
                </h3>
                <p className="text-[#F3F3F3] text-base mt-1">
                    <a
                        href="mailto:akeflatholm@gmail.com"
                        className="hover:underline transition"
                    >
                        akeflatholm@gmail.com
                    </a>
                </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-between md:items-center gap-4 sm:gap-0">
                <div className="flex flex-row gap-6 text-sm sm:text-base">
                    <motion.a
                        href="https://github.com/CodingQuercus"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-[#F3F3F3] hover:underline transition"
                    >
                        <FaGithub /> GitHub
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/akeflatholm"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-[#F3F3F3] hover:underline transition"
                    >
                        <FaLinkedin /> LinkedIn
                    </motion.a>
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-2 text-[#F3F3F3] hover:underline transition"
                    >
                        <FaEnvelope /> Contact
                    </motion.a>
                </div>

                <div className="text-[#F3F3F3] text-sm sm:text-base sm:text-center">
                    Built with <strong>Next.js</strong> by <strong>Åke Flatholm</strong> © 2025
                </div>
            </div>
        </footer>
    );
};

export default Footer;
