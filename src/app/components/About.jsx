"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div
            id="about"
            className="bg-[#f3f3f3] min-h-screen px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] pt-24 pb-[20px]"
        >
            <h1 className="text-3xl sm:text-4xl text-[#282828] font-bold font-inter text-left pb-2">
                About me
            </h1>
            <div className="flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2 flex flex-col text-left md:text-left">
                    <p className="text-base sm:text-lg text-[#282828] font-normal leading-relaxed">
                        Hey! I’m Åke, a fourth-year student in the MSc programme in Interaction
                        Technology and Design at Umeå University. This spring, I’m finishing my final
                        courses before starting my master’s thesis in the fall.
                        <br />
                        <br />
                        Over the past few years, I’ve developed a passion for UI/UX and front-end
                        development. I aim to create intuitive, user-friendly digital experiences
                        that put people first.
                        <br />
                        <br />
                        When I’m not designing or coding, you’ll probably find me exercising or
                        playing music.
                    </p>

                    <h3 className="font-bold text-center pt-10 md:text-left">Download or view my CV</h3>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                    <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="cv/Ake_Flatholm_CV.pdf"
                            download
                            className="px-5 py-2 w-[120px] sm:w-[140px] border border-[#282828] bg-[#282828] text-[#F3F3F3] rounded-lg shadow-md cursor-pointer text-center"
                        >
                            Download
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="cv/Ake_Flatholm_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-5 py-2 w-[120px] sm:w-[140px] border border-[#282828] text-[#282828] rounded-lg shadow-md cursor-pointer text-center"
                        >
                            View
                        </motion.a>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center items-center">
                    <img
                        src="images/portfolio-image.png"
                        alt="Image of Åke"
                        width={400}
                        height={400}
                        className="rounded-2xl w-full max-w-[300px] sm:max-w-[400px] h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
