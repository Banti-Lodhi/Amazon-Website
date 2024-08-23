import Price from "./Price";
import "./Product.css";
function Product({ title, idx }) {
  let oldPrice = ["11,999", "10,999", "9,999", "8,999"];
  let newPrice = ["10,999", "8,999", "7,999", "5,999"];
  let description = [
    ["8,000 DPI", "Programmble buttons"], 
    ["intuitive surface", "8,000 DPI"],
    ["designed for iPad Pro", "intuitive surface"],
    ["wireless", "optical orientation"]
  ];
      return (
  <div className="Product">
    <h4>{title}</h4>
    <p>{description[idx][0]}</p>
    <p>{description[idx][1]}</p>
    <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
  </div>
  );
  
  }
export default Product;
