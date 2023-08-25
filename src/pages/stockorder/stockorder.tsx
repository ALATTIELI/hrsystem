// interface RootState {
//   cart: {
//     items: any[]; // The type can be refined further based on your cart item type
//   };
//   // ... any other slices of state go here
// }

import { productsData } from "./productdata";
import "./stockorder.css";
import ItemCard from "./itemcard";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"; // Import ShoppingCartIcon
import { useState } from "react"; // Import useState
import { addToCart, getCartItemCount } from "./cartslice";
import { RootState } from "./cartslice";

function Stockorder() {
  const [searchTerm, setSearchTerm] = useState("");

  const itemCount = useSelector((state: RootState) =>
    getCartItemCount(state.cart)
  );

  const dispatch = useDispatch();

  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const handleQuantityChange = (id: string, value: number) => {
    setQuantities((prev) => ({ ...prev, [id]: value }));
  };
  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Categories list derived from productsData
  const categories = [...new Set(productsData.map((item) => item.category))];

  // Filtered products based on selected category
  const displayedProducts = productsData
  .filter(product => 
    !selectedCategory || product.category === selectedCategory
  )
  .filter(product => 
    !searchTerm ||
    product.productname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.barcode?.toLowerCase().includes(searchTerm.toLowerCase()) || // Assuming each product has a barcode property
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="stock-order-container">
      <div className="top-section">
        <Link to="/">
          <button className="back-to-home-button">
            <span className="home-icon">
              <HomeIcon />
            </span>
            Home
          </button>
        </Link>
        <h1>Stock Order Page</h1>
        <Link to="/cart">
          <div className="cart-container-stock">
            <ShoppingCartIcon className="cart-icon" />
            <div className="cart-count">{itemCount}</div>
          </div>
        </Link>
      </div>

      <input
        type="text"
        placeholder="Search by name, barcode, or SKU..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      <div className="main-content">
        <div className="category-filter">
          <button onClick={() => setSelectedCategory(null)}>All</button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="items-container">
          {displayedProducts.map((item, index) => (
            <div key={index}>
              <ItemCard
                id={item.id}
                name={item.productname}
                photoUrl={item.photoUrl}
              />
              <div className="quantity-input-container">
                <label>Quantity: </label>
                <input
                  type="number"
                  value={quantities[item.id] || 1}
                  onChange={(e) =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                  min="1"
                />
              </div>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      ...item,
                      name: item.productname,
                      quantity: quantities[item.id] || 1,
                    })
                  )
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stockorder;
