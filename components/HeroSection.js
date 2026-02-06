"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import FloatingHearts from "./FloatingHearts";

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden text-center px-4">
            <FloatingHearts />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="z-10 relative"
            >
                <motion.h1
                    className="font-display text-6xl md:text-8xl text-rose-600 mb-6 drop-shadow-sm"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    For My Valentine
                </motion.h1>

                <motion.p
                    className="text-lg md:text-2xl text-rose-800 font-light mb-12 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 1 }}
                >
                    A small corner of the internet, <br />
                    crafted with love, just for you. <br />
                    <span className="text-xl md:text-2xl mt-4 block italic opacity-90">Because some things are created only for the ones we love most.</span>
                </motion.p>

                <Link href="/story">
                    <motion.button
                        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(251, 113, 133, 0.5)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group bg-rose-500 text-white px-8 py-4 rounded-full text-xl font-medium shadow-xl flex items-center gap-3 transition-colors hover:bg-rose-600"
                    >
                        <span>Open My Heart</span>
                        <FaHeart className="w-5 h-5 animate-pulse" />
                    </motion.button>
                </Link>
            </motion.div>

            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white/40 to-transparent z-0 pointer-events-none" />
        </section>
    );
}
