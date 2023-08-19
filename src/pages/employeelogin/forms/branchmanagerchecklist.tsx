import React, { useState } from "react";
import "./branchmanagerchecklist.css";
import { employeesData } from "../employeedata";

interface BranchManagerChecklistProps {
  selectedEmployee: {
    id: number;
    name: string;
    position: string;
    photoUrl: string;
    username: string;
    password: string;
    branch: string;
    nationality: string;
    idnumber: string;
    passportnumber: string;
    joiningdate: string;
    salary: string;
  };
}

const BranchManagerChecklist: React.FC<BranchManagerChecklistProps> = ({
  selectedEmployee,
}) => {
  // Component logic

  const selectedBranch = selectedEmployee.branch;

  const employeesInBranch = employeesData.filter(
    (employee) => employee.branch === selectedBranch
  );

  const [products, setProducts] = useState([
    { productName: "", reason: "", barcode: "" },
  ]);

  const addProductRow = () => {
    setProducts([...products, { productName: "", reason: "", barcode: "" }]);
  };

  const handleProductChange = (
    index: number,
    field: keyof (typeof products)[0],
    value: string
  ) => {
    const newProducts = [...products];
    newProducts[index][field] = value;
    setProducts(newProducts);
  };
  const deleteProductRow = (indexToDelete: number) => {
    setProducts((prevProducts) =>
      prevProducts.filter((_, index) => index !== indexToDelete)
    );
  };

  const [, setFormState] = useState({
    displayOfProducts: "",
    productsCondition: "",
    branchCleanliness: "",
    personalCleanliness: "",
    // ... additional states
  });

  const handleOptionChange = (field: string, value: string) => {
    setFormState((prevState) => ({ ...prevState, [field]: value }));
  };

  return (
    <form>
      <h3>Branch Manager Checklist Form Weekly</h3>

      <table className="evaluation-table">
        <thead>
          <tr>
            <th></th>
            <th>Satisfying</th>
            <th>Unsatisfying</th>
            <th>Comments & action if any</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Display of products</td>
            <td>
              <input
                type="radio"
                name="displayOfProducts"
                value="satisfying"
                onChange={(e) =>
                  handleOptionChange(e.target.name, e.target.value)
                }
              />{" "}
            </td>
            <td>
              <input
                type="radio"
                name="displayOfProducts"
                value="unsatisfying"
                onChange={(e) =>
                  handleOptionChange(e.target.name, e.target.value)
                }
              />
            </td>
            <td>
              <input type="text" placeholder="Comments..." />
            </td>
          </tr>
          <tr>
            <td>Products Condition</td>
            <td>
              <input type="radio" name="productsCondition" value="satisfying" />
            </td>
            <td>
              <input
                type="radio"
                name="productsCondition"
                value="unsatisfying"
              />
            </td>
            <td>
              <input type="text" placeholder="Comments..." />
            </td>
          </tr>
          <tr>
            <td>Branch Cleanliness</td>
            <td>
              <input type="radio" name="branchcleanliness" value="satisfying" />
            </td>
            <td>
              <input
                type="radio"
                name="branchcleanliness"
                value="unsatisfying"
              />
            </td>
            <td>
              <input type="text" placeholder="Comments..." />
            </td>
          </tr>
          <tr>
            <td>Personal Hygiene</td>
            <td>
              <input
                type="radio"
                name="personalcleanliness"
                value="satisfying"
              />
            </td>
            <td>
              <input
                type="radio"
                name="productscondition"
                value="unsatisfying"
              />
            </td>
            <td>
              <input type="text" placeholder="Comments..." />
            </td>
          </tr>
          {/* ... Additional evaluation fields ... */}
        </tbody>
      </table>

      <div className="suspended-products-section">
        <h4>Suspended products and their reasons:</h4>
        <table>
          <thead>
            <tr>
              <th>Suspended Products</th>
              <th>Barcode</th>
              <th>Reason and Action Taken</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    value={product.productName}
                    placeholder={`Product ${index + 1}`}
                    onChange={(e) =>
                      handleProductChange(index, "productName", e.target.value)
                    }
                  />
                </td>
                <td>
                  <textarea
                    value={product.barcode}
                    placeholder={`barcode ${index + 1}`}
                    onChange={(e) =>
                      handleProductChange(index, "barcode", e.target.value)
                    }
                  ></textarea>
                </td>
                <td>
                  <textarea
                    value={product.reason}
                    placeholder={`Reason ${index + 1}`}
                    onChange={(e) =>
                      handleProductChange(index, "reason", e.target.value)
                    }
                  ></textarea>
                </td>
                <td>
                  <button type="button" onClick={() => deleteProductRow(index)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" onClick={addProductRow}>
          Add Product
        </button>
      </div>

      <div className="employee-notes-section">
        <h4>Notes on Employees:</h4>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Note and Reason</th>
            </tr>
          </thead>
          <tbody>
            {employeesInBranch.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>
                  <textarea placeholder="Note and reason"></textarea>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <label>Branch challenges and employee needs:</label>
        <textarea></textarea>
      </div>

      <div>
        <label>Suggestions by the branch Supervisor:</label>
        <textarea></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default BranchManagerChecklist;
