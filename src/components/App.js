import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const budget = 100

  const [sushi, setSushi] = useState([])
  const [money, setMoney] = useState(budget)

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then((setSushi))
  }, [])

  function eatSushi(sush) {

    if (!sush.eaten && (sush.price <= money)) {

    setMoney(money - sush.price)

    setSushi(sushi.map(roll => 
      
      roll.id !== sush.id
      ? roll
      : {...roll,eaten:true}
      
      ))
    }
    else {return null}
  }


  return (
    <div className="app">
      <SushiContainer sushi={sushi} eatSushi={eatSushi}/>
      <Table plates={sushi.filter(sushi => sushi.eaten)} money={money}/>
    </div>
  );
}

export default App;
