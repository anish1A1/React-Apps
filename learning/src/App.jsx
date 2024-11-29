// import Button from "./component/button";
import Card from "./Cardbox/card";
import Cardhooks from './hooks/Cardhooks'
import Avatar from "./component/Avatar";
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
    <div classNameName="App">
      <div>

        {/* <Button /> */}
        <Card title = {"James"} description={"Hey I'm Noob"}/>
        <Card title={"No One"} description={"Some Content"} />
        <Card title={"Arjun"} description = {"Another gay Nice to meet You!"}/>
        <Card title={"Arjun"} description = {description1}/>
        <Card {...cardData.data1}/>
        <Card {...cardData.data2} />


      </div>
    </div>
    <Cardhooks />
    <Avatar size={100}
    
    person={{
      name : 'Arjun',
      imageID :'persons'
    }}
    />

    </>
  );
}

export default App;