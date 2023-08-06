import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./borrowitems.css";

function Borrowitems() {
  const [formData, setFormData] = useState({
    sku: "",
    barcode: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
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

    // Handle the inquire functionality here, e.g., fetching data based on SKU or Barcode
    console.log("Inquire data:", formData);
  };

  return (
    <div className="borrow-items-container">
      <h1>Borrow Items Page</h1>
      <form onSubmit={handleInquire}>
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
      <Link to="/">
        <button className="back-to-home-button">Back to Home</button>
      </Link>
    </div>
  );
}

export default Borrowitems;
