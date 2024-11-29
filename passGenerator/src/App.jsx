

import { useState, useCallback, useEffect, useRef } from "react"

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setnumbers] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  // useCallback add the value in the cache 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm"

    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed) str += "~!@#$%^&*()_+{}[]*/`"

    for(let i=1; i<=length; i++){       // i is initialized as 1 and runs as long as i is less than or equal to length.
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }  
    //Each iteration is supposed to pick a random character from str and append it to the pass.

    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  // setPassword is added for memory optimazation only if removed then also code will work


  //to copy the password 
  const copyPassToClipboard = useCallback(() => {

    //this will select the text andput in clipboard
    window.navigator.clipboard.writeText(password)

    passwordRef.current?.select();     //this is for ui only the text is selected ui is show by adding background in the input field
    //value can also be 0 so we use ? after current


  }, [password])

  useEffect(() => {
    passwordGenerator()

  }, [length, numberAllowed, charAllowed, passwordGenerator])
  

  return (
    <>
    
    <div classNameName="w-full max-w-md mx-auto shadow-md rounded-lg px-4
    my-8 text-orange-500" >
      <h1 classNameName='text-center text-blue-200 '>Password Generator</h1>
      <div classNameName="flex shadow rounded-lg overflow-hidden mb-4 ">
        
        <input type="text" value={password} classNameName="outline-none w-full py-1 px-3" 
        placeholder="Password" readOnly  
        ref = {passwordRef} />
        
        <button classNameName="outline-none text-white bg-blue-700 px-3 py-0.5 shrink-0
         " onClick={copyPassToClipboard}>
          Copy
          </button>
      </div>

      <div classNameName="flex text-sm gap-x-3">
        <div classNameName="flex items-center gap-x-1 ">
          <input type="range"
          min={6}
          max={100}
          value={length}   classNameName="cursor-pointer" 
          onChange={(e) => {setLength(e.target.value)}} />

          {/* When the user moves the slider, the onChange event fires, and setLength(e.target.value) updates the length state with the new slider value (e.target.value). */}
          <label >Length: {length} </label>


        </div>

        <div classNameName="flex items-center gap-x-1">
          <input type="checkbox" defaultChecked= {numberAllowed}
          id="numberInput" 
          onChange={() => {
            setnumbers((prev) => !prev);

            // this will reverse the previous value
          }} />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div classNameName="flex items-center gap-x-1 m-3">
          <input type="checkbox" classNameName=""
          defaultChecked={charAllowed}
          id="charInput" onChange={() => {
            setCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Characters</label>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
