import styles from "./ViewList.module.css";
import Rating from "./Rating";
function ViewList({ list, allItemsTotalPrice, allItemsTotalPriceAfterDiscount, totalSavings } ) {
  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price/q</th>
            <th>Quantity</th>
            <th>Discount(%)</th>
            <th>Total Price</th>
            <th>Price after discount</th>
            <th>Savings($)</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>            
              <td>{item.discount}%</td>   
              <td>{typeof item.totalPrice == 'number' ? item.totalPrice.toFixed(2): item.totalPrice}</td>
              <td>{typeof item.discountedPrice == 'number' ? item.discountedPrice.toFixed(2) : item.discountedPrice}</td>
              <td>{typeof item.savings == 'number' ? item.savings.toFixed(2) : item.savings}</td>

              <td>
                <Rating rating={item.rating} />
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td></td>
            <td>${typeof allItemsTotalPrice=='number' ? allItemsTotalPrice.toFixed(2) : allItemsTotalPrice}</td>
            <td>${typeof allItemsTotalPriceAfterDiscount == 'number' ? allItemsTotalPriceAfterDiscount.toFixed(2) : allItemsTotalPriceAfterDiscount}</td>
            <td>${typeof totalSavings == 'number' ? totalSavings.toFixed(2) : totalSavings}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ViewList;
