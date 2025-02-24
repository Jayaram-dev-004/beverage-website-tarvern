import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import AvailableProducts from "./AvailableProducts";
import { AdminProvider } from "./AdminContext";  
import { ProductProvider } from "./ProductContext";
import "./AdminPage.css";

export const AdminContext = createContext();

function AdminPage() {

  return (
    <AdminProvider>
      <ProductProvider>
        <div className="admin-container">
          <nav className="admin-container-header">
            <Link to="/admin/available-products">Available Products</Link>
            <Link to="/admin/customer-history">Customer History</Link>
          </nav>

          <div className="main-content">
           <AvailableProducts />
          </div>
        </div>
      </ProductProvider>
    </AdminProvider>
  );
}

export default AdminPage;