import ProposalButtons from "@/components/ProposalButtons";
import FloatingHearts from "@/components/FloatingHearts";

export default function ProposalPage() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-rose-50 via-rose-100 to-rose-200">
            <FloatingHearts />

            <div className="z-10 w-full flex justify-center">
                <ProposalButtons />
            </div>
        </main>
    );
}
