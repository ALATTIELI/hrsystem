import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { ShopProvider, useShopContext } from "./shopprovider";
import "./borrowitems.css";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon

// Define the Shop type
interface Shop {
  id: number;
  name: string;
  availableQuantity: number;
  items: Item[];
}

interface Item {
  sku: string;
  barcode: string;
}

function Borrowitems() {
  const [formData, setFormData] = useState({
    sku: "",
    barcode: "",
    quantity: "",
  });

  const { shops } = useShopContext();

  const [inquiryResult, setInquiryResult] = useState<Shop[] | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleInquire = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Check if at least one of the fields is filled
    if (!formData.sku && !formData.barcode) {
      alert("Please fill either the SKU or the Barcode.");
      return;
    }

    // Find shops where the item with the specified SKU or Barcode is available
    const searchTerm = formData.sku || formData.barcode;
    const availableShops = shops.filter((shop: Shop) => {
      return shop.items.some(
        (item) => item.sku === searchTerm || item.barcode === searchTerm
      );
    });

    if (availableShops.length > 0) {
      // Item is available in one or more shops
      setInquiryResult(availableShops);
    } else {
      // Item is out of stock in all shops
      setInquiryResult(null);
    }
  };

  return (
    <div className="borrow-items-container">
      <h1>Borrow Items Page</h1>
      <form onSubmit={handleInquire}>
        {/* ... Form fields (SKU, Barcode, and Inquire button) ... */}
        
        <div className="form-group">
          <label htmlFor="barcode">Barcode / Sku:</label>
          <input
            type="text"
            id="barcode"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
          />
        </div><div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.barcode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Inquire</button>
      </form>

      {/* Display the result */}
      {inquiryResult ? (
        <div className="inquiry-result">
          <h2 className="title">Available Shops:</h2>
          {inquiryResult.map((shop) => (
            <div key={shop.id} className="shop-box">
              <div className="shop-info">
                <h3>{shop.name}</h3>
                <p>Available Quantity: {shop.availableQuantity}</p>
              </div>
              <div className="request-section">
                <input
                  type="number"
                  placeholder="Quantity"
                  className="quantity-input"
                />
                <button className="request-button">Request</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="inquiry-result">
          <h2>Item is out of stock.</h2>
        </div>
      )}

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

function App() {
  return (
    <ShopProvider>
      {/* ... Other components and routes ... */}
      <Borrowitems />
    </ShopProvider>
  );
}

export default App;
