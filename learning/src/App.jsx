// import Button from "./component/button";
import Card from "./Cardbox/card";
import Cardhooks from './hooks/Cardhooks'

function App() {
  // declearing variables
  const description1 = "I am also known as battery.";
  const cardData = {
    data1: {
      title: "John",
      description: "A Person",
    },
    data2: {
      title: "Jane",
      description: "A big Person",
    },
  };
  //end

  return (
    <>
    <div className="App">
      <div>

        {/* <Button /> */}
        <Card title = {"James"} description={"Hey I'm gay"}/>
        <Card title={"No One"} description={"Some Content"} />
        <Card title={"Arjun"} description = {"Another gay Nice to meet You!"}/>
        <Card title={"Arjun"} description = {description1}/>
        <Card {...cardData.data1}/>
        <Card {...cardData.data2} />


      </div>
    </div>
    <Cardhooks />
    </>
  );
}

export default App;