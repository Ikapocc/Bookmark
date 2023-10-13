"use client"

import open from "../files/images/icon-hamburger.svg"
import closed from "../files/images/icon-close.svg"
import Image from "next/image"
import { useState } from "react"

export default function Hamburger({classname, data}) {
    const [isClicked, setIsClicked] = useState(false)
    return(
        <div className="hidden max-md:grid">
            {isClicked ? <button onClick={() => setIsClicked(!isClicked)}><Image src={closed} alt="hamburger closed"></Image></button> : <button onClick={() => setIsClicked(!isClicked)}><Image src={open} alt="hamburger open"></Image></button>}
            <ul>
                {data.map((items, idx) => (
                    <li key={idx}>{items}</li>
                ))}
            </ul>
        </div>
    )
}