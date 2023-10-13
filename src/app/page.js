import Toucheable from '@/components/TouchableInfo'
import BookMark from '@/components/bookmark'
import CTA from '@/components/cta'
import Download from '@/components/download'
import FAQ from '@/components/faq'
import Footer from '@/components/footer'
import Header from '@/components/header'


export default function Home() {

  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <BookMark />
        <Toucheable />
        <Download />
        <FAQ />
        <CTA />
      </main>

      <footer className='bg-blue-600'>
        <Footer />
      </footer>
    </>
  )
}
