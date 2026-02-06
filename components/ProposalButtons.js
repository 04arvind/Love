"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { runConfetti } from "./ConfettiEffect";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

export default function ProposalButtons() {
    const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
    const [accepted, setAccepted] = useState(false);
    const [hoverCount, setHoverCount] = useState(0);

    const moveButton = () => {
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300;
        setNoButtonPosition({ x: randomX, y: randomY });
        setHoverCount(prev => prev + 1);
    };

    const handleYes = () => {
        setAccepted(true);
        runConfetti();
    };

    if (accepted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl max-w-2xl mx-4 border-2 border-rose-200"
            >
                <h2 className="text-5xl md:text-7xl font-display text-rose-600 mb-6 drop-shadow-sm">
                    Yay! I Love You! 💖
                </h2>
                <p className="text-2xl text-rose-800 font-light mb-8 leading-relaxed">
                    Thank you for saying yes! You've made me the happiest person alive.
                    <br />
                    Choosing you feels calm. Choosing you feels right.
                </p>

                <p className="text-lg text-rose-500 mb-8 animate-bounce">
                    (P.S. Check the bottom left corner for a special letter 💌)
                </p>
                <div className="flex justify-center gap-4">
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="text-6xl text-rose-500"
                    >
                        🥰
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                        className="text-6xl text-rose-500"
                    >
                        💏
                    </motion.div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="flex flex-col items-center gap-12">
            <h1 className="text-5xl md:text-7xl font-display text-rose-600 text-center drop-shadow-sm px-4">
                Will you be my Valentine? 💘
            </h1>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-8 relative">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleYes}
                    className="bg-rose-500 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-xl hover:bg-rose-600 hover:shadow-rose-400/50 transition z-10"
                >
                    YES! 🥰
                </motion.button>

                <motion.button
                    animate={noButtonPosition}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onHoverStart={moveButton}
                    onClick={moveButton}
                    className="bg-white text-rose-400 border-2 border-rose-200 px-12 py-5 rounded-full text-2xl font-bold shadow-md transform hover:bg-rose-50"
                >
                    {hoverCount > 5 ? "Just Click Yes! 😤" : "No 😢"}
                </motion.button>
            </div>

            {hoverCount > 2 && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-rose-400 italic text-lg mt-4"
                >
                    You can't catch me! 😜
                </motion.p>
            )}
        </div>
    );
}
