import { useState } from "react"



export default function Login(){
    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: add authentication logic here
        console.log(input);
    }
    return (
        <form>
        </form>
    )
}