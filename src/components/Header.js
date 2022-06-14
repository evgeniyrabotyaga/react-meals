import headerImage from "../assets/header-image.avif";
import HeaderButton from "./HeaderButton";
import HeaderSummary from "./HeaderSummary";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className="header__main-image">
        <img src={headerImage} alt="A table full of delicious food!"></img>
      </div>
      <HeaderSummary />
    </>
  );
};

export default Header;
