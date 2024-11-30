import Form from "./Forms/Form";
import Mainbtn from "./learnTS/Mainbtn";
import MovingDot from "./stateStructure/MovingDot";

export default function App() {
  return (
    <div className="text-3xl font-bold underline">
      Hello world!

      <Form />
      <div className="m-5 p-5 bg-gray-600 border-dark-600 ring-1 ring-gray-500">
        <MovingDot />
      </div>

        <div className="">
          <Mainbtn />
        </div>
    </div>
  )
}