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
            className="bg-[#f3f3f3] min-h-screen px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] pt-[80px] pb-[40px]"
        >
            <h1 className="text-3xl sm:text-4xl text-[#000] font-bold font-inter text-left pb-6">
                Contact
            </h1>

            <div className="bg-[#282828] p-6 sm:p-8 rounded-lg shadow-lg w-full flex flex-col gap-6">
                <div className="text-center">
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">You can reach me at:</p>

                    <div className="flex flex-col sm:flex-col justify-center items-center gap-4 mt-4">
                        <span className="text-[#F3F3F3] text-lg sm:text-xl">{email}</span>
                        <div className="flex flex-row gap-3">
                            <button
                                onClick={handleCopyEmail}
                                className="bg-[#3225C8] text-[#F3F3F3] font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
                            >
                                <FaEnvelope size={18} /> Copy
                            </button>
                            <a
                                href={`mailto:${email}`}
                                className="bg-[#3225C8] text-[#F3F3F3] font-bold px-4 py-2 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
                            >
                                <MdOpenInNew size={18} /> Open
                            </a>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <p className="text-xl sm:text-2xl text-[#F3F3F3] font-bold">Or connect with me on LinkedIn:</p>

                    <div className="flex justify-center mt-4">
                        <button
                            onClick={handleLinkedInRedirect}
                            className="bg-[#3225C8] text-[#F3F3F3] font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-blue-600 transition flex items-center gap-2"
                        >
                            <FaLinkedin size={18} /> Visit profile
                        </button>
                    </div>
                </div>
            </div>

            {alertMessage && (
                <motion.div
                    className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black py-2 px-4 rounded-lg shadow-lg flex items-center gap-2 z-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <span role="img" aria-label="party-popper">
                        🎉
                    </span>
                    <span>{alertMessage}</span>
                    <span role="img" aria-label="party-popper">
                        🎉
                    </span>
                </motion.div>
            )}
        </div>
    );
}
