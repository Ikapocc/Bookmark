// eslint-disable-next-line react/prop-types
export default function Button({title, classname}) {
    return(
        <button className={`px-9 py-3 font-semibold cursor-pointer rounded-lg border ${classname}`}>{title}</button>
    )
}