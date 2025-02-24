import React, { useState, useEffect, useRef } from 'react';
import Header from '../../Components/Header/Header.jsx'
import './Home02.css'
import Button from '../Button/Button.jsx';
import bgImg from "../../assets/main_pages/background_page2.png";
import style from "../../style.module.css";

const   Home02 = () => {

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
            className={`Home02-container ${isVisible ? "animate" : ""}`}
            style={{ backgroundImage: `url(${bgImg})` }}>

            
            <Header Absolute={"absolute"}/>

            <div className="home02-text-container">
                
                <div className={`home02-text-content ${isVisible ? style.slideLeft : ''}`}>
                    <h1 className="home02-text-header">
                        Highly Concentrated<span className="text-span"> Knock Out !</span> Beer
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

export default Home02