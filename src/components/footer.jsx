import Image from 'next/image'
import bookMarkLogo from "../files/images/logo-bookmark.svg"
import facebook from "../files/images/icon-facebook.svg"
import twitter from "../files/images/icon-twitter.svg"

export default function Footer() {
    return(
        <section className='py-8'>
          <div className='flex container mx-auto gap-10 text-white cursor-pointer max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-16'>
            <Image src={bookMarkLogo} alt='Logo footer' aria-label='Footer of the page'/>
            <div className='flex items-center justify-between w-full max-md:flex-col max-md:gap-16'>
              <nav>
                <ul className='flex items-center gap-10 max-md:flex-col'>
                  <li className="hover:text-red-500">FEATURES</li>
                  <li className="hover:text-red-500">PRICING</li>
                  <li className="hover:text-red-500">CONTACT</li>
                </ul>
              </nav>

              <ul className='flex gap-10'>
                <li>
                  <Image src={facebook} alt='facebook-icon'/>
                </li>
                <li>
                  <Image src={twitter} alt='twitter-icon'/>
                </li>
              </ul>
            </div>
          </div>
        </section>
    )
}