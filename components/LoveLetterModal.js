"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaTimes } from "react-icons/fa";

import { loveLetter } from "@/data/content";

export default function LoveLetterModal() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 left-4 z-50 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg text-rose-500 border border-rose-200 hover:bg-rose-50"
            >
                <FaEnvelope className="w-6 h-6" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            className="bg-[#fff1f2] w-full max-w-lg p-8 rounded-2xl shadow-2xl relative rotate-1"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 text-rose-400 hover:text-rose-600 transition"
                            >
                                <FaTimes size={24} />
                            </button>

                            <div className="border-2 border-rose-200 border-dashed p-6 rounded-xl bg-white/50">
                                <h3 className="font-display text-4xl text-rose-600 mb-6 font-bold">{loveLetter.title}</h3>
                                <div className="prose prose-rose font-display text-2xl text-rose-800 leading-relaxed">
                                    {loveLetter.body.map((paragraph, index) => (
                                        <p key={index} className="mb-4">
                                            {paragraph}
                                        </p>
                                    ))}
                                    <p className="mt-8 text-right font-bold text-3xl">
                                        {loveLetter.signOff}<br />
                                        {loveLetter.sender}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}
