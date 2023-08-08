import "./stockorder.css";
import ItemCard from "./itemcard";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon
import { useCartContext } from "./cartcontext";
import Cart from "./cart";


interface Item {
  id: string;
  name: string;
  photoUrl: string;
  price: number;
  quantity:number;
}

const items: Item[] = [
  {
    id: "1",
    name: "Anker nano 65W",
    photoUrl: "./src/assets/ankernano65w.jpeg",
    price: 29.99, // Replace with the actual price
    quantity:8,

  },
  {
    id: "2",
    name: "Power Flow 3 Cable",
    photoUrl: "./src/assets/powerflow3.jpeg",
    price: 29.99, // Replace with the actual price
    quantity:10,

  },
  // Add more items here...
];

function Stockorder() {
  const { addToCart } = useCartContext(); // Add this line to access addToCart function

  return (
    <div className="stock-order-container">
      <h1>Stock Order Page</h1>
      <div className="items-container">
        {items.map((item, index) => (
          <div key={index}>
            <ItemCard
              id={item.id}
              name={item.name}
              photoUrl={item.photoUrl}
            />
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {/* Display the cart */}
      <Cart />

      <Link to="/">
        <button className="back-to-home-button">
          <span className="home-icon">
            <HomeIcon />
          </span>
          Home
        </button>
      </Link>
    </div>
  );
}

export default Stockorder;