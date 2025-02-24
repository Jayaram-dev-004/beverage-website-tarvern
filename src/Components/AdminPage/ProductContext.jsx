import { createContext, useState } from "react";
import { productData } from "./productData"; 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [categories, setCategories] = useState(productData.categories);
  const [products, setProducts] = useState(productData.products);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const addCategory = (category) => {
    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }
  };

  const addProduct = (category, newProduct) => {
    setProducts((prevProducts) => ({
      ...prevProducts,
      [category]: [...(prevProducts[category] || []), newProduct]
    }));
  };

  return (
    <ProductContext.Provider
      value={{ categories, products, setProducts, addCategory, addProduct, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};