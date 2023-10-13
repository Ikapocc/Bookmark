import Browsers from '@/components/browsers'
import Descriptions from '@/components/descriptions'
import Chrome from "../files/images/logo-chrome.svg"
import Firefox from "../files/images/logo-firefox.svg"
import Opera from "../files/images/logo-opera.svg"

export default function Download() {
    return(
        <section>
          <Descriptions 
            classname={"grid text-center px-96 gap-6 pt-24 max-xl:px-72 max-lg:px-48 max-md:px-32 max-sm:px-16"}
            title={"Download the extension"}
            description={"We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."}
          />
          <div className='flex justify-center gap-20 pt-28 pb-44 max-md:grid'>
            <Browsers image={Chrome} title={"Add to Chrome"}  version={"Minimum version 62"}/>
            <Browsers classname={"relative top-10"} image={Firefox} title={"Add to Firefox"}  version={"Minimum version 55"}/>
            <Browsers classname={"relative top-20"} image={Opera} title={"Add to Opera"}  version={"Minimum version 46"}/>
          </div>
        </section>
    )
}