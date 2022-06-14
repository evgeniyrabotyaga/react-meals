import React from "react";

const InputAmount = React.forwardRef((props, ref) => {
  return (
    <form onSubmit={props.onSubmit} className="input-form">
      <div>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input}></input>
      </div>
      <button className="input-form__btn" type="submit">
        +Add
      </button>
    </form>
  );
});

export default InputAmount;
