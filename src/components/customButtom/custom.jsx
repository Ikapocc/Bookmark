import Image from "next/image";
import Descriptions from "../descriptions";
import Button from "../button";

export default function Custom({title, description, image, active}) {

    return(
        <section className="grid justify-center items-center container">
            <div className={`flex gap-36 items-center ${active ? "max-md:grid max-md:text-center" : "hidden"}`}>
                <Image src={image} alt="Image" width={675}></Image>
                <div className="flex flex-col items-start gap-6">
                    <Descriptions classname={"max-md:px-16"} title={title} description={description}/>
                    <Button title={"More Info"} classname={"bg-blue-600 text-white max-md:hidden"} />
                </div>
            </div>
        </section>
    )
}