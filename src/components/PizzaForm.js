import React, { useState, useEffect } from "react";

function PizzaForm({ selectedPizza, updateList }) {

  const originalPizzaData =selectedPizza

  const [ pizzaTopping, setPizzaTopping ] =useState('')
  const [ pizzaSize, setPizzaSize ] = useState('')
  const [ pizzaVegetarian, setPizzaVegetarian ] = useState(false)


  useEffect(() => {
    setPizzaTopping(originalPizzaData.topping)
    setPizzaSize(originalPizzaData.size)
    setPizzaVegetarian(originalPizzaData.vegetarian)
  },[originalPizzaData])

  function submitButtonClick(e){
    e.preventDefault();
    const newPizza = {
      topping: pizzaTopping,
      size: pizzaSize,
      vegetarian: pizzaVegetarian
    }
    console.log(newPizza)
    fetch(`http://localhost:3001/pizzas/${originalPizzaData.id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPizza)
    })
    .then(res => res.json())
    .then(data => updateList(data))
  }

  return (
    <form onSubmit={submitButtonClick}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={pizzaTopping}
            onChange={e => setPizzaTopping(e.target.value)}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" onChange={e => setPizzaSize(e.target.value)}>
            {selectedPizza.size==="Small"? <option value="Small" selected>Small</option> : <option value="Small">Small</option>}
            {selectedPizza.size==="Medium"? <option value="Medium" selected>Medium</option> : <option value="Medium">Medium</option>}
            {selectedPizza.size==="Large"? <option value="Large" selected>Large</option> :  <option value="Large">Large</option>}
          </select>
        </div>

        {selectedPizza.vegetarian===true? 
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="vegetarian"
                value="Vegetarian"
                checked
                onClick={() => setPizzaVegetarian(true)}
              />
              <label className="form-check-label">Vegetarian</label>
            </div> 
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="vegetarian"
                value="Not Vegetarian"
                onClick={() => setPizzaVegetarian(false)}
              />
              <label className="form-check-label">Not Vegetarian</label>
            </div> 
          </div>
          :
          <div className="col">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="vegetarian"
                value="Vegetarian"
                onClick={() => setPizzaVegetarian(true)}
              />
              <label className="form-check-label">Vegetarian</label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="vegetarian"
                value="Not Vegetarian"
                checked
                onClick={() => setPizzaVegetarian(false)}
              />
              <label className="form-check-label">Not Vegetarian</label>
            </div> 
          </div>
        }
          
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
          </div>
      </div>
    </form>
  );
}

export default PizzaForm;
