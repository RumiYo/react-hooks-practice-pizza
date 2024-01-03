import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzaListData, selectPizza }) {


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {
          //render Pizza here
          pizzaListData.map(pizzaData => <Pizza pizzaData={pizzaData} key={pizzaData.id} selectPizza={selectPizza}/> )
        }
      </tbody>
    </table>
  );
}

export default PizzaList;
