import '../Cardbox/card.css'


function Cardhooks(){

    let counts = 12

    const removecounts = () =>{
        console.log("value removed", {counts})
        counts = counts -1
    }
    const addcounts = () => {
        console.log("value Added", {counts})
        counts = counts + 1
    }

    return (
        <>
            <div classNameName='hookk rounded'>
                <h2 classNameName='mb-4'>Cardhooks</h2>
                
            <div classNameName='counterss'>
                Counters : {counts}
            </div>
            <div classNameName='counterss2'>
                <button onClick={addcounts} value={counts} >{counts}</button>
                <br />
                <button onClick={removecounts} value={counts} >{counts}</button>
            </div>
            <p>total: {counts}</p>
            </div>
        </>
    )
}

export default Cardhooks