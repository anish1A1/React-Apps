import { useState } from "react";
import SubmitForm from "./SubmitForm";

export default function Form() {
    
    const [answer, setAnswer] = useState("");
    const [error, setError] = useState(null);
    const [status, setStatus] = useState("typing");

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await SubmitForm(answer);
            setStatus('success');
        }        
        catch (err){
            setStatus('typing');
            setError(err);
            setAnswer("");
        }
    }

    function handleTextChange(e) {
        setAnswer(e.target.value);
    }

    if (status === 'success')  {
        return <h1> correct!! --v-- </h1>
    }
    return(
        <>
        
            <h3>City Quiz.</h3>

            <p className="text-sm font-normal">
            In which city is there a billboard that turns air into drinkable water?
            </p>

            <form onSubmit={handleSubmit}>
            <textarea value={answer} name="texts" disabled= {status === 'submitting'}
            onChange={handleTextChange}
            />
            <br />
            <button disabled={
                answer.length === 0 || status === 'submitting'
            }>Submit</button>

            { error !== null && 
            <p className="error" >
                {error.message}
                </p>}
            </form>
        </>
    );

}