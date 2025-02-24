import React, { useState, useContext } from "react";
import { ProductContext } from "./ProductContext";
import "./Sidebar.css";

const Sidebar = () => {
  const { categories, addCategory, setSelectedCategory, selectedCategory } = useContext(ProductContext);
  const [newCategory, setNewCategory] = useState("");
  const [adding, setAdding] = useState(false);

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      addCategory(newCategory);
      setNewCategory("");
      setAdding(false);
    }
  };

  return (
    <div className="sidebar">
      <h3>Product Categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active-category" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
      {adding ? (
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleAddCategory()}
          placeholder="Enter category name"
        />
      ) : (
        <button className="add-button" onClick={() => setAdding(true)}>+</button>
      )}
    </div>
  );
};

export default Sidebar;