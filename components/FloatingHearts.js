"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingHearts() {
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const generateHearts = () => {
            const newHearts = Array.from({ length: 15 }).map((_, i) => ({
                id: i,
                x: Math.random() * 100, // Random percentage
                delay: Math.random() * 5,
                duration: 10 + Math.random() * 20,
                size: 10 + Math.random() * 30,
            }));
            setHearts(newHearts);
        };

        generateHearts();
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    initial={{ y: "110vh", x: `${heart.x}vw`, opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        opacity: [0, 0.4, 0],
                        rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                        duration: heart.duration,
                        repeat: Infinity,
                        delay: heart.delay,
                        ease: "linear",
                    }}
                    className="absolute text-rose-200/40"
                    style={{ fontSize: heart.size }}
                >
                    ❤️
                </motion.div>
            ))}
        </div>
    );
}
