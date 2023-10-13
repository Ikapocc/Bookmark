"use client"
import Custom from '@/components/customButtom/custom'
import Descriptions from '@/components/descriptions'
import search from "../files/images/illustration-features-tab-1.svg"
import double from "../files/images/illustration-features-tab-2.svg"
import people from "../files/images/illustration-features-tab-3.svg"
import SButton from '@/components/sButton'
import { useState } from 'react'


export default function Toucheable() {

const [activeButton, setActiveButton] = useState("Simple Bookmarking")

  const handleButton = (head) => {
    setActiveButton(head)
  }

    return(
        <section>
          <Descriptions
          classname={"grid text-center gap-7 px-96 max-xl:px-72 max-lg:px-48 max-md:px-32 max-sm:px-16"}
          title={"Features"} 
          description={"Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."} />

          <div className='flex flex-col justify-center items-center my-2'>

            <div className='flex justify-center items-center gap-24 my-16 max-md:grid max-md:gap-10'>
              <SButton onClick={() => handleButton("Simple Bookmarking")} head={"Simple Bookmarking"} active={activeButton === "Simple Bookmarking"}></SButton>
              <SButton onClick={() => handleButton("Speedy Searching")} head={"Speedy Searching"} active={activeButton === "Speedy Searching"}></SButton>
              <SButton onClick={() => handleButton("Easy Sharing")} head={"Easy Sharing"} active={activeButton === "Easy Sharing"}></SButton>
            </div>

            <Custom image={search} title={"Intelligent search"} description={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."} active={activeButton === "Simple Bookmarking"} />
            <Custom image={double} title={"Share your bookmarks"} description={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."} active={activeButton === "Speedy Searching"} />
            <Custom image={people} title={"Download the extension"} description={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."} active={activeButton === "Easy Sharing"} />
          </div>
        </section>
    )
}