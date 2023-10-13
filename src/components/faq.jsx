import AccordionComp from '@/components/accordeon'
import Button from '@/components/button'
import Descriptions from '@/components/descriptions'


export default function FAQ() {
    return(
        <>
            <section className='container mx-auto flex justify-center items-center flex-col gap-8 max-md:flex max-md:flex-col max-md:gap-6'>
                <Descriptions
                    classname={"grid text-center px-96 gap-6 max-xl:px-72 max-lg:px-48 max-md:px-32 max-sm:px-16"}
                    title={"Frequently Asked Questions"}
                    description={"Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."}
                />

                <div className='grid gap-10 max-md:px-6'>
                    <AccordionComp title={"What is Bookmark?"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."} />
                    <AccordionComp title={"How can I request a new browser?"} description={"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."} />
                    <AccordionComp title={"Is there a mobile app?"} description={"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."} />
                    <AccordionComp title={"What about other Chromium browsers?"} description={"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."} />
                </div>

                <Button title={"More Info"} classname={"bg-blue-600 text-white"} />
            </section>
        </>
    )
}