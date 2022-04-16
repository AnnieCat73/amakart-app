import AddToCartIcon from "../assets/icons/cart.png"

const ListItem = () => {
  return (
    <div>
      <img src="logo192.png" alt="Some title" />
      <div>
        <span>340</span>
        <small>
          <strike>450</strike>
        </small>
      </div>
      <div>
        <h3>Title of the Item</h3>
      </div>
      <button>
        <span>Add to Card</span>
        <img style={{height: "1rem"}}src={AddToCartIcon} alt="Cart Icon" />
      </button>
    </div>
  )
}

export default ListItem;