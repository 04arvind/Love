"use client";

import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function TimelineCard({ memory, index }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`flex flex-col md:flex-row items-center w-full mb-16 ${isEven ? "md:flex-row-reverse" : ""
                }`}
        >
            <div className="w-full md:w-5/12 p-4">
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300">
                    <span className="inline-block px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-3">
                        {memory.date}
                    </span>
                    <h3 className="font-display text-3xl text-rose-800 mb-3">{memory.title}</h3>
                    <p className="text-rose-900/80 leading-relaxed text-lg">
                        {memory.description}
                    </p>
                </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center w-2/12 relative">
                <div className="w-1 h-full bg-rose-200 absolute top-0 bottom-0 -z-10" />
                <div className="w-12 h-12 bg-rose-400 rounded-full flex items-center justify-center shadow-lg z-10 border-4 border-rose-50">
                    <FaHeart className="text-white w-5 h-5" />
                </div>
            </div>

            <div className="w-full md:w-5/12 p-4" /> {/* Spacer for opposite side */}
        </motion.div>
    );
}
