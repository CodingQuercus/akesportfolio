"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#F3F3F3] text-[#282828]">
      <Navigation />
      <Hero />
      <About />
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

