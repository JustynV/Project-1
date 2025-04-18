export default function BigButton({ text, onClick}) {
    return (<button className="btn btn-primary bg-blue-500 p-4 rounded-xl text-xl hover:bg-blue-700 transition-colors duration-100 m-5" onClick = {onClick}>{text}</button>)
}