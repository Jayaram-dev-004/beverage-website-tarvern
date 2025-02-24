import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import Button from '../Button/Button.jsx';
import './Home01.css';
import style from'../../style.module.css';
import page1_img from '../../assets/main_pages/page1_img.png';
import Home03 from './Home03.jsx';
import BestIngredients from '../BestIngredients/BestIngredients.jsx';
import Footer from '../../Components/Footer/Contact.jsx'
import BeverageLocator from '../BeverageLocator/BeverageLocator.jsx';

const Home01 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const homeRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 } 
        );

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }

    return () => {
      if (homeRef.current) {
        observer.unobserve(homeRef.current);
      }
    };
  }, []);

  return (
    <>
    <div ref={homeRef} className={`home01-container ${isVisible ? 'animate' : ''}`}>   
        
        {/* Logo */}
        <div className={`logo-header-home01 ${isVisible ? style.scale : ''} ${isVisible ? style.fadeIn : ''}`}>
            <img src={logo} alt="Logo" />
        </div>
        
        {/* Main Content */}
        <div className="home01-content">
            {/* Text & Image Section */}
            <div className="home01-main-content">
                <div className={`text-content ${isVisible ? style.fadeIn : ''}`}>
                    <h1 className="text-header-home01">
                        A Taste Of <span className="text-span">Ingredients</span> King Of Beer!
                    </h1>
                </div>
                <div className="img-container">
                    <img src={page1_img} alt="Drink" className={`animated-img ${isVisible ? style.scale : ''}`} />
                    <div className="btn-container">
                        <Button text="Shop Now" clsName={isVisible ? style.scale : ''}/>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <BestIngredients/>
    <Home03/>
    <BeverageLocator/>
    <Footer/>

    </>
  ); 
}

export default Home01;