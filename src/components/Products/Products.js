import ListItem from "./ListItems/ListItem"

const items = [
  {
    id: 0,
    title: "Title of this Item 1",
    price: 450,
    discountedPrice: 340,
    thumbnail: "placeholder1.png"
  },
  {
    id: 1,
    title: "Title of this Item 2",
    price: 100,
    discountedPrice: 80,
    thumbnail: "placeholder1.png"
  }
]

const Products = () => {
  return (
    <div className={"product-wrapper"}>
      <div className={"form"}>
        <form>
          <h2>Item Card Details</h2>
          <div className={"input-field"}>
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="Enter Title" />
          </div>
        </form>

      </div>



      {/*<div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        <ListItem data={items[0]} />
        <ListItem data={items[1]} />
      </div>*/}
    </div>
  )
}

export default Products