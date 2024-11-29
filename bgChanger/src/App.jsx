import { useState } from "react"



function App() {
  
  const [color, setColor] = useState("blue")

  return (
    <>

    <div classNameName="w-full h-screen duration-200"
      style={{backgroundColor: color }} >  
      {/* In this way we can add inline css  instead of color variable we can also add --> "#000" */}

      <div classNameName="fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2">

        <div classNameName="flex flex-wrap justify-center gap-3 shadow-xl bg-white
        px-3 py-2 rounded-xl">

          <button classNameName="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "red"}} onClick={ () => setColor("red")}>
            Red
          </button>

          <button classNameName="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "green"}}
          onClick={ () => setColor("green")}>
            Green
          </button>

          <button classNameName="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "blue"}} onClick={ () => setColor("blue")}>
            Blue
          </button>

          <button classNameName="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "black"}} onClick={ () => setColor("black")}>
            Black
          </button>

          <button classNameName="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "maroon"}} onClick={ () => setColor("maroon")}>
            Maroon
          </button>

          <button classNameName="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "pink"}} onClick={ () => setColor("pink")}>
            Pink
          </button>

          <button classNameName="outline-none px-4 py-1 rounded-full text-blue-200 shadow-lg" 
          style={{backgroundColor : "yellow"}} onClick={ () => setColor("yellow")}>
            Yellow
          </button>
        </div>
      </div>
    </div>
   
    </>
  )
}

export default App
