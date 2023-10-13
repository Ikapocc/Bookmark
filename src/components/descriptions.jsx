export default function Descriptions({title, description, classname}) {
    return(
        <section className={`container mx-auto ${classname}`}>
            <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
            <p className="text-lg text-gray-400">{description}</p>
        </section>
    )
}