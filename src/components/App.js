import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [ pizzaListData, setPizzaListData] = useState([]);
  const [ selectedPizza, setSelectedPizza ] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(data => setPizzaListData(data))
  },[])

  function selectPizza(clickedPizza){
    setSelectedPizza(clickedPizza);
  }

  function updateList(updatedPizza){
    console.log(updatedPizza)
    const updatedList = pizzaListData.map(item => {
      if(item.id===updatedPizza.id){
        return updatedPizza;
      }else{
        return item;
      }
    })
    setPizzaListData(updatedList);
  }

  return (
    <>
      <Header />
      <PizzaForm selectedPizza={selectedPizza} updateList={updateList}/>
      <PizzaList pizzaListData={pizzaListData} selectPizza={selectPizza} />
    </>
  );
}

export default App;
