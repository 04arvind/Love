import Timeline from "@/components/Timeline";
import FloatingHearts from "@/components/FloatingHearts";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function StoryPage() {
    return (
        <main className="min-h-screen relative pb-20 overflow-x-hidden">
            <FloatingHearts />

            <div className="pt-10 px-6 max-w-7xl mx-auto">
                <Link href="/" className="inline-flex items-center text-rose-600 hover:text-rose-800 transition mb-8 group">
                    <FaArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back
                </Link>
                <h1 className="text-5xl md:text-7xl font-display text-center text-rose-600 mb-4 drop-shadow-sm">Why I Love You</h1>
                <p className="text-center text-rose-800 text-lg md:text-xl max-w-2xl mx-auto mb-12">
                    Here are just a few reasons why you mean everything to me.
                </p>
            </div>

            <Timeline />
        </main>
    );
}
