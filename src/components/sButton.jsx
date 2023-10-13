export default function SButton({head, onClick, active}) {
    return(
        <button onClick={onClick} className={`border-b-4 ${active ? "border-red-500" : "hover:text-red-500"} font-semibold py-4 px-6`} >{head}</button>
    )
}