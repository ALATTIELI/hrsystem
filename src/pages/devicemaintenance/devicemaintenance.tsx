import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import "./devicemaintenance.css";
import HomeIcon from "@mui/icons-material/Home"; // Import HomeIcon

// import ReactDOMServer from "react-dom/server";
// import PrintPreview from "./printpreview";

function devicemaintenance() {
  const [formData, setFormData] = useState({
    customerName: "",
    phoneNumber: "",
    device: "",
    price: "",
    serialNumber: "",
    repairType: "Repair the device",
    dateReceived: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
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

  function handleNumericInput(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const value = event.target.value;
    if (!/^[0-9]*$/.test(value)) {
      // If the value contains non-numeric characters, reset to the previous value or empty string.
      event.target.value = value.replace(/[^0-9]/g, "");
    }
  }

  // const handlePrint = () => {
  //   const printWindow = window.open("", "_blank");
  //   if (printWindow) {
  //     printWindow.document.write("<html><head><title>Printout</title></head><body>");
  //     printWindow.document.write("<div style='display: none'>"); // Hide the content in the app view
  //     printWindow.document.write("<Printout formData={formData} />"); // Render the Printout component with the form data
  //     printWindow.document.write("</div>");
  //     printWindow.document.write("<script>setTimeout(() => window.print(), 500);</script>"); // Delay the printing to ensure the content is loaded
  //     printWindow.document.write("</body></html>");
  //     printWindow.document.close();
  //   } else {
  //     console.error("Could not open print window");
  //   }
  // };

  // const handlePrintPreview = () => {
  //   const printPreviewWindow = window.open("", "_blank");
  //   if (printPreviewWindow) {
  //     const printPreviewContent = ReactDOMServer.renderToString(
  //       <PrintPreview formData={formData} />
  //     );

  //     printPreviewWindow.document.open();
  //     printPreviewWindow.document.write(
  //       `<html><head><title>Print Preview</title></head><body>${printPreviewContent}</body></html>`
  //     );
  //     printPreviewWindow.document.close();
  //   } else {
  //     console.error("Could not open print preview window");
  //   }
  // };

  return (
    <div className="device-maintenance-container">
      <h1>Device Maintenance</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="^[0-9]*$"
            onInput={handleNumericInput} // Add this line to handle numeric input
            required
          />
          <small className="form-text text-muted">
            Only numbers are allowed.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="device">Device:</label>
          <input
            type="text"
            id="device"
            name="device"
            value={formData.device}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            pattern="^[0-9]*$"
            onInput={handleNumericInput} // Add this line to handle numeric input
            required
          />
          <small className="form-text text-muted">
            Only numbers are allowed.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="serialNumber">Serial Number:</label>
          <input
            type="text"
            id="serialNumber"
            name="serialNumber"
            value={formData.serialNumber}
            onChange={handleChange}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="repairType">Repair Type:</label>
          <select
            className="drop-down"
            id="repairType"
            name="repairType"
            value={formData.repairType}
            onChange={handleChange}
            required
          >
            <option value="Repair the device">Repair the device</option>
            <option value="Software">Software</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="textarea"
            id="description"
            name="description"
            required
          />
        </div>
        <button type="submit">Submit</button>
        {/* <button type="button" onClick={handlePrint}> */}
        {/* Print */}
        {/* </button> */}
      </form>

      {/* Print Preview button
      <button onClick={handlePrintPreview}>Print Preview</button> */}

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

export default devicemaintenance;
