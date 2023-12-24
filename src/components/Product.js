import { useState } from "react";
import Button from "./Button";
import styles from "./Product.module.css";
import Input from "./Input";
import Card from "./Card";
import ViewList from "./ViewList";
import Rating from "./Rating";

function Product() {
  // Data in React is for updating UI - State and Props
  // State is internal - Only the component can update it
  // Props is external - it comes from the Parent Component
  const [count, setCount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [name, setName] = useState("Banana");
  const [price, SetPrice] = useState("2.99");
  const [list, setList] = useState([]);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [allItemsTotalPrice, setAllItemsTotalPrice] = useState(0);
  const [allItemsTotalPriceAfterDiscount, setAllItemsTotalPriceAfterDiscount] =useState(0);
  const [totalSavings, setTotalSavings] = useState(0);

  

  const handlePlus = () => {
    setCount((prevCount) => {
      let count = prevCount + 1;
      setQuantity(count);
      if (count >= 5) {
        setDiscount(20);
      }
      return count;
    });
  };
  const handleMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;      
      if (count < 5) {
        setDiscount(0);
      }
      if (count < 0) return 0;
      setQuantity(count)
      return count;
    });
  };

  const handleChangeName = (value) => {
    setName(value);
  };

  const handleChangePrice = (value) => {
    SetPrice(value);
  };

  const handleAddProduct = () => {
    console.log("handleAddproduct");
    // ES6 enhance object literal
    const totalPrice=quantity*price;
    const discountedPrice = totalPrice - (totalPrice*discount)/100;
    const savings =  totalPrice - discountedPrice;
    console.log("discountedprice", discountedPrice)
    const newItem = { name, price, quantity, discount, totalPrice, discountedPrice, savings, rating }; // use this if the key and value is same
    const newList = [...list, newItem];
    console.log("newlist",newList);
    let allItemsTotalPrice = 0;
    newList.forEach(item =>{
    allItemsTotalPrice = allItemsTotalPrice + item.totalPrice;
});
    setAllItemsTotalPrice(allItemsTotalPrice);
    console.log("allItemsTotalPrice",allItemsTotalPrice);
    let allItemsTotalPriceAfterDiscount = 0;
    newList.forEach(item =>{
        allItemsTotalPriceAfterDiscount = allItemsTotalPriceAfterDiscount + item.discountedPrice;
});
    setAllItemsTotalPriceAfterDiscount(allItemsTotalPriceAfterDiscount);
    console.log("allItemsTotalPriceAfterDiscount",allItemsTotalPriceAfterDiscount);
    
    let totalSavings = 0;
    newList.forEach(item =>{
        totalSavings = totalSavings + item.savings;
});
    setTotalSavings(totalSavings);
    console.log("totalSavings",totalSavings);
    
    // const finalList = [...newList, allItemsTotalPrice];
    // console.log("finalList", finalList)
    setList((prevList) => {
 
        // const allItemsTotalPrice = 0
        // allItemsTotalPrice = newList.reduce((allItemsTotalPrice, newItem) => allItemsTotalPrice+newItem.price);
        // console.log("allItemsTotalPrice", allItemsTotalPrice);
      return [...prevList, newItem];
    });
  };
  const handleChangeQuantity = (value) => {
    setQuantity(value);
  }
//   const handleChangeRate = (value) => {
//     setRating(value)
//   }

  return (
    <div className={styles.container}>
      <Card
        name={name}
        count={count}
        handleMinus={handleMinus}
        handlePlus={handlePlus}
        price={price}
        discount={discount}
        rating={rating}
        setRating={setRating}
        quantity={quantity}
        handleChangeQuantity={handleChangeQuantity}
        handleChangeName={handleChangeName}
        handleChangePrice={handleChangePrice}
        handleAddProduct={handleAddProduct}

      />
      <ViewList list={list} allItemsTotalPrice={allItemsTotalPrice} allItemsTotalPriceAfterDiscount={allItemsTotalPriceAfterDiscount} totalSavings={totalSavings}/>
    </div>
  );
}

export default Product;
