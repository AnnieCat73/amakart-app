import AddToCartIcon from "../../../assets/icons/add_cart.svg"
import { useState } from "react"

const ListItem = ({ data }) => {
  /*const data = {
    discountedPrice: 340,
    price: 450,
    title: "title of the Item",
    thumbnail: "placeholder1.png"
  } Use data as props in app.js <ListItem />*/
  const [counter, setCounter] = useState(0);

  const increaseCounterByOne = () => {
    setCounter(counter + 1);
  }

  const decreaseCounterByOne = () => {
    if (counter <= 0) { //so not get -1 etc
      return
    } else {
      setCounter(counter - 1);
    }

  }




  return (
    <div className={"item-card"}>
      <img className={"img-fluid"} src={`/${data.thumbnail}`} alt={data.title} />
      <div className={"item-card__information"}>
        <span className={"pricing"}>${data.discountedPrice}</span>
        <small>
          <strike style={{ marginLeft: "8px" }}>${data.price}</strike>
        </small>
      </div>
      <div className={"title"}>
        <h3 style={{ marginLeft: "8px" }}>{data.title}</h3>
      </div>
      {/*<small className={"cart-message"}>{message}</small>*/}

      {/*}<button className="cart-add" onClick={handleClick}>
        <span>Add to Card</span>
        <img src={AddToCartIcon} alt="Cart Icon" />
      </button>*/}
      <div className={"cart-addon"}>
        <button onClick={decreaseCounterByOne}><span>-</span></button>
        <span className={"counter"}>{counter}</span>
        <button onClick={increaseCounterByOne}><span>+</span></button>
      </div>
    </div>
  )
}

export default ListItem;