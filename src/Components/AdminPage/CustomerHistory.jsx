import { useContext, useState } from "react";
import { AdminContext } from "./AdminContext";  
import { Link } from "react-router-dom";
import "./CustomerHistory.css";

function CustomerHistory() {
  const context = useContext(AdminContext);

  if (!context) {
    console.error("AdminContext is undefined! Make sure AdminProvider is wrapping the component.");
    return <div>Error: AdminContext is not available.</div>;
  }

  const { customerHistory } = context;
  const [activeTab, setActiveTab] = useState("Purchased");

  return (
    <>
    <nav className="admin-container-header">
        <Link to="/admin/available-products">Available Products</Link>
        <Link to="/admin/customer-history">Customer History</Link>
    </nav>
    <div className="customer-history-container">
      <h2>Customer History</h2>
      <div className="tabs">
        {["Purchased", "RecentOrders", "CurrentOrders"].map((tab) => (
          <button
            key={tab}
            className={` ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace(/([A-Z])/g, " $1").trim()}
          </button>
        ))}
      </div>
      <table className="history-table">
        <thead>
          <tr >
            <th>Order ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {customerHistory[activeTab]?.length > 0 ? (
            customerHistory[activeTab].map((order, index) => (
              <tr key={index} >
                <td>{order.id}</td>
                <td>{order.product}</td>
                <td>{order.quantity}</td>
                <td>{order.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default CustomerHistory;