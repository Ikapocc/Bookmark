import Image from 'next/image'
import fs_computer from "../files/images/illustration-hero.svg"
import Button from '@/components/button'

export default function BookMark() {
    return(
        <section className='container mx-auto flex flex-col py-24 md:flex-row'>
          <div className='flex flex-col justify-center gap-9 max-md:order-2 max-md:text-center md:pe-32'>
              <h1 className='text-5xl font-semibold text-gray-800'>A Simple Bookmark Manager</h1>
              <p className='text-lg text-gray-400 max-md:px-36 max-sm:px-20'>A clean and simple interface to organize your favourite websites. Open a new 
                browser tab and see your sites load instantly. Try it for free.</p>

              <div className='flex gap-4 max-md:justify-center'>
                <Button title={"Get it on Chrome"} classname={"bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500"} />
                <Button title={"Get it on FireFox"} classname={"text-slate-600 hover:border-slate-600"} />
              </div>
          </div>

            <Image src={fs_computer} alt='illustration hero' width={675}></Image>
        </section>
    )
}