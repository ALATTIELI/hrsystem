import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./warrantyitems.css";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon

function Warrantyitems() {
  const [formData, setFormData] = useState({
    employeeName: "",
    invoiceNumber: "",
    phoneNumber: "",
    dateReceived: "",
    description: "",
  });

  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here (e.g., sending data to the server)
    console.log("Form data submitted:", formData);
  };

  return (
    <div className="warranty-items-container">
      <h1>Warranty Items Page</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="form-group">
            <label htmlFor="dateReceived">Date Received:</label>
            <input
              type="date"
              id="dateReceived"
              name="dateReceived"
              value={formData.dateReceived}
              onChange={handleChange}
              required
            />
          </div>
          <label htmlFor="employeeName">Employee Name:</label>
          <input
            type="text"
            id="employeeName"
            name="employeeName"
            value={formData.employeeName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="invoiceNumber">Invoice Number (Reference): </label>
          <input
            type="text"
            id="invoiceNumber"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber"> Costumer Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Reason for Repair:</label>
          <textarea
            className="textarea"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
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

export default Warrantyitems;
