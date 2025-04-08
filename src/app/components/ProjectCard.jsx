"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const ProjectCard = ({
    year,
    title,
    subtitle,
    desc1,
    desc2,
    desc3,
    imageUrl,
    contribution,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="bg-[#ffffff] rounded-2xl shadow-lg overflow-hidden transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 py-8 sm:p-10">
                <div className="flex flex-col justify-center items-start">
                    <h2 className="text-base sm:text-lg text-[#282828] mb-1">{year}</h2>
                    <h2 className="text-2xl sm:text-3xl font-bold text-[#282828] mb-1">{title}</h2>
                    <h3 className="text-sm sm:text-md font-light text-[#3487EA] mb-3">{subtitle}</h3>

                    <p className="text-base text-[#282828] mb-2">{desc1}</p>
                    <p className="text-base text-[#282828] mb-2">{desc2}</p>
                    <p className="text-base text-[#282828] mb-2">{desc3}</p>

                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-4 text-sm text-[#3487EA] hover:underline cursor-pointer"
                    >
                        {isExpanded ? "Show less" : "Show more"}
                    </button>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="overflow-hidden mt-4"
                            >
                                <p className="text-[#282828] text-sm sm:text-base">
                                    <strong>What was my focus in the project?</strong><br />
                                    {contribution}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={imageUrl}
                        alt={`${title} image`}
                        loading="lazy"
                        className="rounded-xl w-full max-w-sm sm:max-w-md object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

ProjectCard.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    desc1: PropTypes.string.isRequired,
    desc2: PropTypes.string.isRequired,
    desc3: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    contribution: PropTypes.string.isRequired,
};

export default ProjectCard;
