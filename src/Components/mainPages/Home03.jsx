import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import './Home03.css'
import Button from '../Button/Button.jsx';
import bgImg from "../../assets/main_pages/background_page3.png";
import style from "../../style.module.css";
const Home03 = () => {

    const [isVisible, setIsVisible] = useState(false);
    const pageRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setIsVisible(true);
          }
        },
        { threshold: 0.5 } 
      );
  
      if (pageRef.current) {
        observer.observe(pageRef.current);
      }
  
      return () => {
        if (pageRef.current) {
          observer.unobserve(pageRef.current);
        }
      };
    }, []);

    return(
        <>
       
        <div 
            ref={pageRef}
            className={`Home03-container ${isVisible ? "animate" : ""}`}
            style={{ backgroundImage: `url(${bgImg})` }}>

            
            <Header Absolute={'absolute'}/>

            <div className="Home03-text-container">
                
                <div className={`Home03-text-content ${isVisible ? style.slideRight : ''}`}>
                    <h1 className="Home03-text-header">
                    Your Craft Expereince<span className="text-span"> Feel </span> The Taste !
                    </h1>
                </div>

                <div>
                    <Button text="Shop Now" clsName={isVisible ? style.scale : ''}/>
                </div>
            </div>

        </div>
        </>
    )
}

export default Home03