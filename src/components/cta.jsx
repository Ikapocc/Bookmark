import Button from '@/components/button'

export default function CTA() {
    return(
        <section className='items-center bg-blue-700 text-white gap-16 mt-28'>
          <div className='container mx-auto flex flex-col justify-center items-center bg-blue-700 text-white gap-16 pt-20 pb-16 max-md:gap-10'>
            <p className='text-sm font-semibold tracking-widest	'>35,000+ ALREADY JOINED</p>
            <h2 className='text-3xl text-center font-semibold max-md:text-2xl max-md:px-4'>Stay up-to-date with what we’re doing</h2>
            <form className='flex gap-4 max-md:grid'>
              <input type='email' className='rounded-lg px-5 text-black max-md:py-3' placeholder='Your email here'></input>
              <Button title={"Contact Us"} classname={"bg-red-500 text-white border-none"} />
            </form>
          </div>
        </section>
    )
}