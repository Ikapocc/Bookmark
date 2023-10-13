import Image from "next/image"
import Button from "./button"
import bookMark from "../files/images/logo-bookmark.svg"
import Hamburger from "./hamburger"

export default function Header() {
    return(
        <header className="container mx-auto flex items-center justify-between">
            <Image src={bookMark} alt="bookmark Logo"></Image>
            <Hamburger data={["FEATURES", "PRICING", "CONTACT"]} />
            <nav className="flex items-center justify-center gap-16 max-md:hidden">
                <ul className="flex gap-16 text-xs cursor-pointer text-slate-500 font-bold">
                    <li className="hover:text-red-500">FEATURES</li>
                    <li className="hover:text-red-500">PRICING</li>
                    <li className="hover:text-red-500">CONTACT</li>
                </ul>

                <Button title={"LOGIN"} classname={"bg-red-600 text-white text-xs hover:bg-white hover:text-red-500 hover:border-red-500 border tracking-[.15em]"}/>
            </nav>
        </header>
    )
}