"use client"

import open from "../files/images/icon-hamburger.svg"
import closed from "../files/images/icon-close.svg"
import facebook from "../files/images/icon-facebook.svg"
import twitter from "../files/images/icon-twitter.svg"
import Image from "next/image"
import { useState } from "react"
import Button from "./button"

export default function Hamburger({data}) {
    const [isClicked, setIsClicked] = useState(false)
    return(
        <>
            <nav className={`hidden max-md:grid ${isClicked ? "after:content-['*'] after:fixed after:inset-0 after:bg-gray-900 opacity-80" : ""}`}>
                {isClicked ? <button className="z-10" onClick={() => setIsClicked(!isClicked)}><Image src={closed} alt="hamburger closed"></Image></button> : <button className="z-10" onClick={() => setIsClicked(!isClicked)}><Image src={open} alt="hamburger open"></Image></button>}
                <ul className={isClicked ? "fixed flex flex-col text-xl text-center mx-auto z-10 top-20 inset-x-7 text-white cursor-pointer justify-between h-4/5" : "hidden"}>
                    <div className="grid gap-12 py-8 font-medium">
                        {data.map((items, idx) => (
                            <li key={idx}>{items}</li>
                        ))}

                        <Button title={"LOGIN"} />
                    </div>

                    <ul className='flex gap-10 justify-center'>
                        <li>
                            <Image src={facebook} alt='facebook-icon'/>
                        </li>
                        <li>
                            <Image src={twitter} alt='twitter-icon'/>
                        </li>
                    </ul>
                </ul>
            </nav>
        </>
    )
}