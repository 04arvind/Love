"use client";

import { useState, useRef, useEffect } from "react";
import { FaMusic, FaPause } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const messages = [
    "No song could ever match your voice. For me, you are the most beautiful music in the world.",
    "Your voice beats every melody I know.",
    "Oops! No track found… Your voice already stole the spotlight."
];

export default function MusicPlayer() {
    const [playing, setPlaying] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [currentMessage, setCurrentMessage] = useState("");
    const audioRef = useRef(null);

    const toggle = () => {
        // Show random message
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        setCurrentMessage(randomMsg);
        setShowPopup(true);

        // Hide popup after 5 seconds
        setTimeout(() => setShowPopup(false), 5000);

        // Try to play music if available (feature preserved but de-emphasized)
        if (audioRef.current) {
            if (playing) {
                audioRef.current.pause();
            } else {
                audioRef.current.play().catch(() => {
                    // Ignore auto-play or missing file errors
                    console.log("No music file found, but the message is the real feature! 😉");
                });
            }
            setPlaying(!playing);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col gap-2">
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-rose-200 max-w-xs text-center text-rose-800 text-sm font-medium mb-2 mr-2"
                    >
                        {currentMessage}
                    </motion.div>
                )}
            </AnimatePresence>

            <audio ref={audioRef} loop>
                <source src="/music/bgm.mp3" type="audio/mpeg" />
            </audio>

            <button
                onClick={toggle}
                className="bg-white/30 backdrop-blur-md p-3 rounded-full shadow-lg hover:scale-110 transition text-rose-600 border border-rose-200"
            >
                {playing ? <FaPause /> : <FaMusic />}
            </button>
        </div>
    );
}
