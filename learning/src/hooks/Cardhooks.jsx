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
            <div className='hookk rounded'>
                <h2 className='mb-4'>Cardhooks</h2>
                
            <div className='counterss'>
                Counters : {counts}
            </div>
            <div className='counterss2'>
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