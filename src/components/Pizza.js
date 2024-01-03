import React from "react";

function Pizza({ pizzaData, selectPizza }) {

  const { topping, size, vegetarian } = pizzaData

  function clickAction(e){
    selectPizza(pizzaData)
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={clickAction}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
