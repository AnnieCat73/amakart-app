import ListItem from "./components/ListItem";

const App = () => {
  return (
    <div>
     <ListItem data={{
       title: "Title of this Item 1",
       price: 450,
       discountedPrice: 340,
       thumbnail: "placeholder1.png"
     }}/>
     <ListItem data={{
       title: "Title of this Item 2",
       price: 100,
       discountedPrice: 80,
       thumbnail: "placeholder1.png"}}/>
     
    </div>
  );
}

export default App;
