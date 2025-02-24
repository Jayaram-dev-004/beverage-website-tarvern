import {useState, React} from 'react';
import { useNavigate } from 'react-router-dom';
import './BeverageLocator.css';
import backgroundImage from '../../assets/location/background.png'; 
import searchIcon from '../../assets/location/search-icon.png';
import characterImage from '../../assets/location/cartoon.png';
import Header from '../../Components/Header/Header.jsx'
import './BeverageLocator.css'


const BeverageLocator = () => {

  const [name, setName] = useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      findProducts();
    }
  }

  const navigate = useNavigate()
  const productAreaList = ['chennai', 'mumbai', 'kolkata', 'delhi', 'goa']

  const findProducts = () =>{
      if(productAreaList.includes((name.toLowerCase()))) {
        navigate(`/products/${name.charAt(0).toUpperCase() + name.slice(1)}`);
        console.log("Product avaiable")
      }
      else{
        alert(`Sorry the services are available at only ${productAreaList}`)
      }
  }


  return (
    <div className="locator-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      {/* Header */}
      <Header display = {true}/>
      
      {/* Title */}
      <header className="locator-header-container">
        <h1 className={`locater-header`}>Thirsty Yet ?</h1>
      </header>

      {/* Main contain */}
      <div className="locator-content-container">
        <h2 className='locator-content-header'>Find The <span className="highlight">Location</span> Near's You !</h2>
        <p className='locator-content-para'>Select products to filter results or simply click the “Find” button to locate all alcohol near you.</p>
        
        {/* Search bar */}
        <div className="locator-container-search-bar">
          <input type="text" 
            placeholder="RR Nagar, New Delhi..." 
            value = {name}
            onChange={handleChange}  
            onKeyDown={handleKeyDown}
          />
            <div className="search-icon">
                <img src={searchIcon} alt="Search" className="search-icon" />
            </div>
        </div>

        {/* Button */}
        <button 
          className="find-button" 
          onClick = {findProducts}          
        >FIND  
        </button>
      
      </div>
      
      {/* Cartoon character */}
      <img src={characterImage} alt="Decorative Character" className="character" onClick = {findProducts} />
    </div>
  );
};

export default BeverageLocator