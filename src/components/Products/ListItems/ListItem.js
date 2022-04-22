import AddToCartIcon from "../../../assets/icons/add_cart.svg"

const ListItem = ({ data }) => {
  /*const data = {
    discountedPrice: 340,
    price: 450,
    title: "title of the Item",
    thumbnail: "placeholder1.png"
  } Use data as props in app.js <ListItem />*/
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
      <button className="cart-add">
        <span>Add to Card</span>
        <img src={AddToCartIcon} alt="Cart Icon" />
      </button>
    </div>
  )
}

export default ListItem;