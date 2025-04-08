"use client";

import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { MdOpenInNew } from 'react-icons/md';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
    const [alertMessage, setAlertMessage] = useState("");

    const email = "akeflatholm@gmail.com";
    const linkedinUrl = "https://www.linkedin.com/in/akeflatholm";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(email).then(() => {
            setAlertMessage("Email copied!");
            setTimeout(() => setAlertMessage(""), 2000);
        });
    };

    const handleLinkedInRedirect = () => {
        window.open(linkedinUrl, "_blank");
    };

    return (
        <div
            id="contact"
            className="bg-[#f3f3f3] min-h-screen px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] pt-24 pb-[20px] flex flex-col"
        >
            <h1 className="text-3xl sm:text-4xl text-[#282828] font-bold font-inter text-left pb-2">
                Contact
            </h1>
            <p className="text-left text-[#282828] text-base sm:text-base pb-2">
                Got a project in mind, a question to ask, or just want to say hi? Feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl sm:max-w-full">
                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200"
                >
                    <FaEnvelope
                        size={36}
                        className="text-[#282828] mb-4"
                    />
                    <h2 className="text-xl font-semibold mb-2 text-[#282828]">Email me</h2>
                    <p className="text-[#282828] text-sm mb-4">{email}</p>
                    <div className="flex gap-3">
                        <motion.button
                            onClick={handleCopyEmail}
                            className="bg-[#282828] text-[#F3F3F3] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaEnvelope size={16} /> Copy
                        </motion.button>
                        <motion.a
                            href={`mailto:${email}`}
                            className="bg-[#282828] text-[#F3F3F3] px-4 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <MdOpenInNew size={16} /> Open
                        </motion.a>
                    </div>
                </motion.div>

                <motion.div
                    className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center border border-gray-200"
                >
                    <FaLinkedin size={36} className="text-[#282828] mb-4" />
                    <h2 className="text-xl font-semibold mb-2 text-[#282828]">LinkedIn</h2>
                    <p className="text-[#282828] text-sm mb-4">Connect with me on LinkedIn</p>
                    <motion.button
                        onClick={handleLinkedInRedirect}
                        className="bg-[#282828] text-[#F3F3F3] px-5 py-2 rounded-lg flex items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                    >
                        <FaLinkedin size={16} /> Visit
                    </motion.button>
                </motion.div>
            </div>

            {alertMessage && (
                <motion.div
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    🎉 <span>{alertMessage}</span> 🎉
                </motion.div>
            )}
        </div>
    );
}
