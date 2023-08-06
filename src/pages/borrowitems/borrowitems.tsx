import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./borrowitems.css";

// Sample shop data
const shops = [
  { id: 1, name: "Shop A", availableQuantity: 5 },
  { id: 2, name: "Shop B", availableQuantity: 10 },
  { id: 3, name: "Shop C", availableQuantity: 3 },
  // Add more shops here...
];

function Borrowitems() {
  const [formData, setFormData] = useState({
    sku: "",
    barcode: "",
  });

  const [inquiryResult, setInquiryResult] = useState<
    { shopName: string; availableQuantity: number }[]
  >([]);

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

    // Placeholder for simulating the inquire functionality
    const itemExists = shops.some((shop) => shop.availableQuantity > 0);

    if (itemExists) {
      // Filter the shops based on SKU or Barcode
      const filteredShops = shops.filter((shop) => shop.availableQuantity > 0);

      // Map the data to the desired format
      const inquiryResultData = filteredShops.map((shop) => ({
        shopName: shop.name,
        availableQuantity: shop.availableQuantity,
      }));

      // Update the state with the mapped data
      setInquiryResult(inquiryResultData);
    } else {
      alert("Item not found in any shop.");
      setInquiryResult([]);
    }
  };

  return (
    <div className="borrow-items-container">
      <h1>Borrow Items Page</h1>
      <form onSubmit={handleInquire}>
        {/* ... Form fields (SKU, Barcode, and Inquire button) ... */}
        <div className="form-group">
          <label htmlFor="sku">SKU:</label>
          <input
            type="text"
            id="sku"
            name="sku"
            value={formData.sku}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="barcode">Barcode:</label>
          <input
            type="text"
            id="barcode"
            name="barcode"
            value={formData.barcode}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Inquire</button>
      </form>

      {/* Display shop information boxes */}
      {inquiryResult.length > 0 ? (
        <div className="shop-boxes">
          {inquiryResult.map((shop) => (
            <div className="shop-box" key={shop.shopName}>
              <h3>{shop.shopName}</h3>
              <p>Available Quantity: {shop.availableQuantity}</p>
            </div>
          ))}
        </div>
      ) : null}

      <Link to="/">
        <button className="back-to-home-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default Borrowitems;
