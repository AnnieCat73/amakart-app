import AddToCartIcon from "../assets/icons/cart.png"

const ListItem = () => {
  return (
    <div className={"item-card"}>
      <img className={"img-fluid"}src="logo192.png" alt="Some title" />
      <div className={"item-card__information"}>
        <span className={"pricing"}>$340</span>
        <small>
          <strike>$450</strike>
        </small>
      </div>
      <div className={"title"}>
        <h3>Title of the Item</h3>
      </div>
      <button className="cart-add">
        <span>Add to Card</span>
        <img style={{height: "1rem"}}src={AddToCartIcon} alt="Cart Icon" />
      </button>
    </div>
  )
}

export default ListItem;