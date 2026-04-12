import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-mono-900 px-10 py-6">
            <div className="flex items-center justify-between text-mono-50">
                <span className="font-bold text-2xl">LOGO BRAND</span>
                <div className="inline-flex items-center gap-5">
                    <Link href={"/"} className="text-lg font-bold">About</Link>
                    <Link href={"/"} className="text-lg">Competition</Link>
                    <Link href={"/"} className="text-lg">Guideline</Link>
                    <Link href={"/"} className="text-lg">Timeline</Link>
                </div>
                <button className=" bg-mono-700 font-bold text-md py-3 px-5 rounded-lg hover:bg-mono-600 duration-300 ease-in-out cursor-pointer">Register Now</button>
            </div>
        </nav>
    )
};

export default Navbar