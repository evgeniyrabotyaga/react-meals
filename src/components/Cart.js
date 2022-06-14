import Modal from "./Modal";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = (
    <ul className="cart-modal__list">
      {cartCtx.items.map((item) => (
        <CartItem
          name={item.name}
          amount={item.amount}
          id={item.id}
          key={item.id}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onCloseCart}>
      {cartItems}
      <div className="cart-modal__total">
        <span className="cart-modal__amount-label">Total Amount</span>
        <span className="cart-modal__amount">{totalAmount}</span>
      </div>
      <div className="cart-modal__actions">
        <button
          onClick={props.onCloseCart}
          className="cart-modal__btn cart-modal__btn--close"
        >
          Close
        </button>
        {hasItems && (
          <button className="cart-modal__btn cart-modal__btn--order">
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
