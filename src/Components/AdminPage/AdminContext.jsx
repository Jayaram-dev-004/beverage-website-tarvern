import { createContext, useState } from "react";
import { CustomerHistory } from "./customerData"; 

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [customerHistory, setCustomerHistory] = useState(CustomerHistory); 

  return (
    <AdminContext.Provider value={{ customerHistory, setCustomerHistory }}>
      {children}
    </AdminContext.Provider>
  );
};