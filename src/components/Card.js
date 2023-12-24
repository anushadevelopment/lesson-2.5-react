import Button from "./Button";
import Input from "./Input";
import Rating from "./Rating";

import styles from "./Card.module.css";

function Card({
  name,
  handleMinus,
  count,
  handlePlus,
  price,
  discount,
  rating, 
  setRating,
  quantity, 
  handleChangeQuantity,
  handleChangeName,
  handleChangePrice,
  handleAddProduct,

}) {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.counter}>
        <Button label="-" onClick={handleMinus} />
        <span className={styles.count}>{count}</span>
        <Button label="+" onClick={handlePlus} />
      </div>
      <div>{`$ ${price} `}</div>
      <div className={styles.discount}>Discount : {discount}%</div>
      <div className={styles.form}>
        <Input value={name} label="Product Name" onChange={handleChangeName} />
        <Input value={price} label="Price" onChange={handleChangePrice} />
        <Input value={quantity} label="Quantity" onChange={handleChangeQuantity} />
        <Input value={rating} label="Rating" onChange={setRating}/>
        <div style={{ textAlign: "center" }}>
          <Rating rating={rating} />
        </div>
      </div>
      <Button label="Add Product" onClick={handleAddProduct} />
    </div>
  );
}
export default Card;
