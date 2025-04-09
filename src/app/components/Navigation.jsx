import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { FaLinkedin } from 'react-icons/fa';


export default function Navigation() {
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        setHasAnimated(true);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { href: "#about", label: "About me" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <>
            <motion.nav
                className={`flex justify-between items-center px-6 sm:px-10 md:px-20 lg:px-[160px] xl:px-[240px] py-6 shadow-md fixed top-0 left-0 w-full z-20 transition-all duration-300 backdrop-blur-md`}
                initial={hasAnimated ? {} : { opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/" className="flex items-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center"
                    >
                        <img
                            src="images/logov2.png"
                            alt="ÅF Logo"
                            width={40}
                            height={40}
                            className="object-contain"
                        />
                    </motion.div>
                </Link>

                <div className="hidden md:flex gap-5">
                    {navItems.map(({ href, label }) => (
                        <motion.div
                            key={href}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href={href}
                                className="border border-[#282828] bg-transparent  rounded-lg px-4 py-2 text-center text-sm md:text-base transition-colors duration-300 hover:bg-[#282828] hover:text-[#f3f3f3]"
                            >
                                {label}
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <Link href="https://www.linkedin.com/in/akeflatholm" target="_blank" className="hidden md:flex items-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="flex items-center"
                    >
                        <FaLinkedin size={32}/>
                    </motion.div>
                </Link>

                <button
                    className="md:hidden z-30"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={28} className="text-[#F3F3F3]" /> : <Menu size={28} />}
                </button>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-50 z-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        <motion.aside
                            className="fixed top-0 left-0 h-full w-64 bg-[#F3F3F3] shadow-md z-20 p-6 flex flex-col gap-6"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <Link href="/" onClick={toggleMenu}>
                                <Image
                                    src="images/logov2.png"
                                    alt="ÅF Logo"
                                    width={36}
                                    height={36}
                                />
                            </Link>

                            {navItems.map(({ href, label }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    className="text-lg border text-center border-[#282828] rounded-lg px-4 py-2 hover:bg-[#282828] hover:text-[#f3f3f3] transition"
                                    onClick={toggleMenu}
                                >
                                    {label}
                                </Link>
                            ))}

                            <Link href="https://www.linkedin.com/in/akeflatholm" onClick={toggleMenu} target="_blank">
                                <FaLinkedin size={32}/>
                            </Link>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
