"use client";

import { memories, shayaris } from "@/data/content";
import TimelineCard from "./TimelineCard";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Timeline() {
    return (
        <div className="max-w-6xl mx-auto px-4 py-20 relative">
            {/* Mobile vertical line */}
            <div className="absolute left-4 md:hidden top-0 bottom-0 w-1 bg-rose-200" />

            {memories.map((memory, index) => (
                <TimelineCard key={memory.id} memory={memory} index={index} />
            ))}

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-20 text-center space-y-8"
            >
                <div className="bg-rose-100/50 p-8 rounded-3xl max-w-2xl mx-auto shadow-inner">
                    <h3 className="text-2xl font-display text-rose-700 mb-4">Some lines for you</h3>
                    <p className="text-xl italic text-rose-900 leading-relaxed font-serif whitespace-pre-line">
                        "{shayaris[3].text}"
                    </p>
                    <p className="text-right text-rose-600 mt-2 text-sm">- {shayaris[3].author}</p>
                </div>

                <Link href="/compliments" className="inline-block mt-12">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-rose-500 text-white px-8 py-4 rounded-full text-xl shadow-lg flex items-center gap-2 hover:bg-rose-600 transition"
                    >
                        Send Some Love <FaArrowRight />
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    );
}
