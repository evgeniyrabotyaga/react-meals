import CartButtonIcon from "./CartButtonIcon";
import CartContext from "../store/cart-context";
import { useContext, useEffect, useState } from "react";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const [btnBump, setBtnBump] = useState(false);
  const btnClass = `header__btn ${btnBump === true ? "bump" : ""}`;

  useEffect(() => {
    if (cartCtx.items.length === 0) return;
    setBtnBump(true);

    const timer = setTimeout(() => {
      setBtnBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  return (
    <button onClick={props.onClick} className={btnClass}>
      <span>
        <CartButtonIcon />
      </span>
      <span className="header__btn__text">Your Cart</span>
      <span className="header__btn__amount">{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
