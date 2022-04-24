import ListItem from "./ListItems/ListItem"
import { useState } from "react";

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
  const [title, setTitle] = useState("")
  const handleTitle = (e) => {
    //console.log(e.target.value)
    setTitle(e.target.value)
  }
  return (
    <div className={"product-wrapper"}>
      <div className={"form"}>
        <form>
          <h2>Item Card Details</h2>
          <div className={"input-field"}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitle}
            />
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