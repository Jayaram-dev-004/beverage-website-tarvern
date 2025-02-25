import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AgePage from './Components/agePage/AgePage.jsx'
import Home01 from './Components/mainPages/Home01.jsx'
import './App.css'
import Home02 from './Components/mainPages/Home02.jsx'
import Home03 from './Components/mainPages/Home03.jsx'
import BestIngredients from './Components/BestIngredients/BestIngredients.jsx'
import Trending from './Components/Trending/Trending.jsx'
import PremiumSpirits from './Components/PremiumSpirits/PremiumSpirits.jsx'
import Product from './Components/Product/Product.jsx'
import BeverageLocator from './Components/BeverageLocator/BeverageLocator.jsx'
import Contact from './Components/Footer/Contact.jsx'
import AdminPage from "./Components/AdminPage/AdminPage.jsx";
import AvailableProducts from './Components/AdminPage/AvailableProducts.jsx'
import CustomerHistory from './Components/AdminPage/CustomerHistory.jsx'
import Sidebar from './Components/AdminPage/Sidebar.jsx'
import { AdminProvider } from "./Components/AdminPage/AdminContext.jsx";
import { ProductProvider } from "./Components/AdminPage/ProductContext.jsx";  
import SignIn from "./Components/Authorization/SignIn.jsx";
import Login from "./Components/Authorization/Login.jsx";
import NotFound from "./Components/NotFound.jsx";

function App() {
  return (
    <AdminProvider>
      <ProductProvider>
        <Router>
          <Routes>
            <Route path="/" element={<AgePage />} />
            <Route path="/beverage-website-tarvern" element = {<AgePage/>} />
            <Route path="/Home01" element={<Home01 />} />
            <Route path="/Home02" element={<Home02 />} />
            <Route path="/Home03" element={<Home03 />} />
            <Route path="/BestIngredients" element={<BestIngredients />} />
            <Route path="/Trending" element={<Trending />} />
            <Route path="/PremiumSpirits" element={<PremiumSpirits />} />
            <Route path="/Products/:category" element={<Product />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/BeverageLocator" element={<BeverageLocator />} />
            <Route path="/Contact" element={<Contact />} />

            {/* Admin */}

            <Route path="/admin" element={<Login />} />
            <Route path="/admin/signup" element={<SignIn />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/adminpage" element={<AdminPage />} />
            <Route path="/admin/available-products" element={<AvailableProducts />} />
            <Route path="/admin/customer-history" element={<CustomerHistory />} />
            <Route path="/admin/sidebar" element={<Sidebar />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ProductProvider>
    </AdminProvider>
  );
}

export default App;