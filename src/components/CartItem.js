const cartItem = (props) => {
  return (
    <div className="cart-item">
      <div className="cart-item__summary">
        <div className="cart-item__name">{props.name}</div>
        <div className="cart-item__description">
          <div className="cart-item__price">${props.price.toFixed(2)}</div>
          <div className="cart-item__amount">X {props.amount}</div>
        </div>
      </div>
      <div className="cart-item__actions">
        <button className="cart-item__btn" onClick={props.onAdd}>
          +
        </button>
        <button className="cart-item__btn" onClick={props.onRemove}>
          -
        </button>
      </div>
    </div>
  );
};

export default cartItem;
