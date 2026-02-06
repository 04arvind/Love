"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { compliments } from "@/data/content";
import TypewriterText from "./TypewriterText";
import { FaHeart } from "react-icons/fa";

export default function ComplimentBox() {
    const [index, setIndex] = useState(0);
    const [showHearts, setShowHearts] = useState(false);
    const [key, setKey] = useState(0); // Force re-render of typewriter

    const handleNext = () => {
        setShowHearts(false);
        let nextIndex = Math.floor(Math.random() * compliments.length);
        // Avoid repeating same compliment immediately
        if (nextIndex === index) nextIndex = (nextIndex + 1) % compliments.length;

        setIndex(nextIndex);
        setKey((prev) => prev + 1);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4">
            <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl w-full text-center min-h-[300px] flex flex-col justify-center relative border border-rose-100">
                <TypewriterText
                    text={compliments[index]}
                    key={key}
                    onComplete={() => setShowHearts(true)}
                />

                <AnimatePresence>
                    {showHearts && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute -top-4 -right-4 text-4xl"
                        >
                            💖
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                className="mt-12 bg-rose-500 text-white px-8 py-4 rounded-full text-xl font-medium shadow-lg hover:bg-rose-600 transition flex items-center gap-2"
            >
                Tap for a Compliment <FaHeart className="w-5 h-5 animate-pulse" />
            </motion.button>
        </div>
    );
}
