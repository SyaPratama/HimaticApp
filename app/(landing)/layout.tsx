import { PropsWithChildren } from "react";
import Navbar from "@/components/template/(landing)/navbar";
import { Metadata } from "next"; 

export const metadata: Metadata = {
    title: "Beranda - Himatic Competition Developer Festival",
    description: "Himatic Competition Developer Festival menghubungkan mahasiswa Indonesia lewat kompetisi UI/UX dan Competitive Programming. Ikuti tantangan, dapatkan mentorship, hadiah, serta peluang magang dan pengakuan industri.",
}

const LayoutLanding = ({ children }: PropsWithChildren) => {
    return (
        <div>
            <Navbar/>
            <main>{children}</main>
        </div>
    );
}

export default LayoutLanding