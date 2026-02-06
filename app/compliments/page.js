import ComplimentBox from "@/components/ComplimentBox";
import FloatingHearts from "@/components/FloatingHearts";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function ComplimentsPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-rose-50/30">
            <FloatingHearts />

            <div className="z-10 w-full flex flex-col items-center">
                <h1 className="text-4xl md:text-5xl font-display text-rose-600 mb-12 text-center">
                    Just a few things I love about you...
                </h1>

                <ComplimentBox />

                <div className="mt-20">
                    <Link href="/proposal" className="text-rose-400 hover:text-rose-600 transition flex items-center gap-2 font-medium">
                        I have one last thing to say <FaArrowRight />
                    </Link>
                </div>
            </div>
        </main>
    );
}
