"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorHearts() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            // Throttle creation slightly or just add one every move
            if (Math.random() > 0.8) {
                const id = Date.now();
                setHearts((prev) => [...prev.slice(-15), { id, x: e.clientX, y: e.clientY }]);

                setTimeout(() => {
                    setHearts((prev) => prev.filter((h) => h.id !== id));
                }, 1000);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-50">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{ opacity: 1, scale: 0.5, x: heart.x, y: heart.y }}
                        animate={{ opacity: 0, scale: 1.5, y: heart.y - 20 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        className="absolute text-rose-400"
                        style={{ left: 0, top: 0 }} // Positioning handled by motion x/y
                    >
                        ♥
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
}
