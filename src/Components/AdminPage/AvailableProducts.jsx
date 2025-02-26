import { useContext, useState } from "react";
import { ProductContext } from "./ProductContext";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import logo from '../../assets/logo.png'
import "./AvailableProducts.css";

function AvailableProducts() {
  const { products, setProducts, selectedCategory } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [newProduct, setNewProduct] = useState({ name: "", description: "" });

  const addProduct = () => {
    if (!newProduct.name.trim() || !newProduct.description.trim()) {
      alert("Please enter both product name and description.");
      return;
    }

    if (!selectedCategory) {
      alert("Please select a category first.");
      return;
    }

    const newProductEntry = {
      id: `${selectedCategory}-${Date.now()}`,
      name: newProduct.name,
      description: newProduct.description,
    };

    setProducts((prevProducts) => ({
      ...prevProducts,
      [selectedCategory]: [...(prevProducts[selectedCategory] || []), newProductEntry],
    }));

    setNewProduct({ name: "", description: "" });
  };

  // Function to remove a product
  const removeProduct = (productId) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [selectedCategory]: prevProducts[selectedCategory].filter((product) => product.id !== productId),
    }));
  };

  // Get products of the selected category
  const filteredProducts = selectedCategory
    ? (products[selectedCategory] || []).filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <>
    <div className="available-products-container">
      <Sidebar />
      <div className="available-products-content">
        <div className="avaiable-product-header">
        <h2>Available Products</h2>
        <img src={logo} alt="logo" className="available-product-logo"/>
        </div>
        
        {/* Search Bar & Add Product */}
        <div className="search-add-container">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-bar"
          />
          <input
            type="text"
            placeholder="Product Name"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Product Description"
            value={newProduct.description}
            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            className="input-field"
          />
          <button onClick={addProduct} className="add-btn">Add</button>
        </div>

        {/* Product Cards */}
        <div className="products-list">
          {selectedCategory ? (
            filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <button onClick={() => removeProduct(product.id)} className="remove-btn">-</button>
                </div>
              ))
            ) : (
              <p className="conditional-renders">No products available.</p>
            )
          ) : (
            <p className="conditional-renders">Please select a category to view products.</p>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default AvailableProducts;