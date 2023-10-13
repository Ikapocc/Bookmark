import Image from "next/image";
import Button from "./button";

export default function Browsers({title, version, image, classname}) {
    return(
        <>
            <div className={`flex flex-col text-center items-center ${classname}`}>
                <Image className="mb-10" src={image} alt="Browser" />
                <div className="grid gap-2 mb-16">
                    <h3 className="text-xl font-bold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-400">{version}</p>
                </div>
                <Button title={"Add & Install Extension"} classname={"bg-blue-600 text-white hover:bg-white hover:text-blue-500 hover:border-blue-500"} />
            </div>
        </>
    )
}