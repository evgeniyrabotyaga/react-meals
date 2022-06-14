import React, { useRef, useState, useContext } from "react";
import InputAmount from "./InputAmount";
import CartContext from "../store/cart-context";

const MealsItem = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const cartCtx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    addToCartHandler(enteredAmountNumber);
  };

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className="meals__item">
      <div className="meals__object">
        <span className="meals__item-name">{props.name}</span>
        <span className="meals__item-description">{props.description}</span>
        <span className="meals__item-price">${props.price.toFixed(2)}</span>
      </div>
      <InputAmount
        ref={amountInputRef}
        label="Amount"
        onSubmit={submitHandler}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </li>
  );
};

export default MealsItem;
