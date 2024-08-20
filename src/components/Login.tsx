import { useState } from "react"



export default function Login(){
    const [input, setInput] = useState({
        username: "",
        password: ""
    });

    const handleSubmitEvent = (e) => {
        e.preventDefault();
        // TODO: add authentication logic here
        console.log(input);
        if(input.username !== "" && input.password !== ""){
            // dispatch action from hooks
        }
        alert("please provide a valid input");
    }

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))
    }
    return (
        <form>
            hello there
        </form>
    )
}