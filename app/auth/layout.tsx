import { PropsWithChildren } from "react";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: "Login - Himatic Competition Developer Festival",
    description: "Himatic Competition Developer Festival menghubungkan mahasiswa Indonesia lewat kompetisi UI/UX dan Competitive Programming. Ikuti tantangan, dapatkan mentorship, hadiah, serta peluang magang dan pengakuan industri.",
}

const LayoutAuth = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen flex bg-mono-900">
            {/* Left: image / content (hidden on small screens) */}
            <aside className="hidden lg:flex w-1/2 items-center bg-mono-800 p-16 flex-col justify-center gap-6">
                <h1 className="text-4xl font-extrabold text-white">Himatic Competition</h1>
                <p className="text-mono-300 max-w-md">Ikuti kompetisi UI/UX dan Competitive Programming, dapatkan kesempatan magang, mentorship, dan hadiah menarik.</p>
            </aside>

            {/* Right: auth form area */}
            <main className="flex-1 flex items-center justify-center p-8">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </main>
        </div>
    );
}

export default LayoutAuth