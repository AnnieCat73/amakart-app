import ListItem from "./ListItems/ListItem"
import { useState } from "react";

/*const items = [
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
]*/

const Products = () => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [discountedPrice, setDisountedPrice] = useState(0);
  const [thumbnail, setThumbnail] = useState("");

  const [item, setItem] = useState({
    id: 0,
    title: "Title of this Item 1",
    price: 450,
    discountedPrice: 340,
    thumbnail: "placeholder1.png"
  })

  const handleTitle = (e) => {
    //console.log(e.target.value)
    setTitle(e.target.value)
  }

  const handlePrice = e => {
    setPrice(e.target.value);
  }

  const handleDiscountedPrice = e => {
    setDisountedPrice(e.target.value);
  }

  const handleThumbnail = e => {
    setThumbnail(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault();
    console.log({
      title: title,
      price,
      discountedPrice,
      thumbnail
    })
    setItem({
      title: title,
      price,
      discountedPrice,
      thumbnail
    })
  }
  return (
    <div className={"product-wrapper"}>
      <div className={"form"}>
        <form onSubmit={submitForm}>
          <h2>Item Card Details</h2>
          <div className={"input-field"}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              value={title}
              onChange={handleTitle}
              required
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              value={price}
              onChange={handlePrice}
              required
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="discount price">Discount Price</label>
            <input
              type="number"
              placeholder="Enter Discounted Price"
              value={discountedPrice}
              onChange={handleDiscountedPrice}
              required
            />
          </div>
          <div className={"input-field"}>
            <label htmlFor="thumbnail">Thumbnail</label>
            <input
              type="text"
              placeholder="Enter Thumbnail name"
              value={thumbnail}
              onChange={handleThumbnail}
              required
            />
          </div>
          <div>
            <button className={"submit-wrap"}></button>
          </div>
        </form>

      </div>
      <div>
        <ListItem data={item} />
      </div>


      {/*<div className={"product-list"}>
      <div className={"product-list--wrapper"}>
        <ListItem data={items[0]} />
        <ListItem data={items[1]} />
      </div>*/}
    </div >
  )
}

export default Products