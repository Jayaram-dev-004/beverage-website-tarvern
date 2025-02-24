import React, { useState, useEffect, useRef } from 'react';
import drink1 from '../../assets/best_ingredient/drink1.png';
import drink2 from '../../assets/best_ingredient/drink2.png';
import drink3 from '../../assets/best_ingredient/drink3.png';
import cartoon1 from '../../assets/best_ingredient/cartoon1.png';
import cartoon2 from '../../assets/best_ingredient/cartoon2.png';
import Button from '../Button/Button.jsx';
import star from '../../assets/star.png';
import './Trending.css';
import styles from '../../style.module.css';

const Trending = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="trending-container">
      <div className="outer-container">
        
        {/* Header Section */}
        <div className="outer-header-container">
          <div className={`trending-header-container ${isVisible ? styles.fadeIn : ''}`}>
            <h1 className="trending-header">Trending Products</h1>
          </div>
          <div className={`btn-find-container ${isVisible ? styles.scaleUp : ''}`}>
            <Button clsName="btn-find" text = {"Find"} />
          </div>
        </div>

        {/* Product Cards Section */}
        <div className="main-container">
          <div className={`card ${isVisible ? styles.slideLeft : ''}`}>
            <div className="card-img">
              <img src={drink1} alt="Moet & Chandon Imperial Drink" />
            </div>
            <div className="card-txt">
              <div className="star">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="star rating" className="star" />
                ))}
              </div>
              <h6 className="card-name">Moet & Chandon Imperial</h6>
              <p className="card-price">$200.0</p>
            </div>
          </div>

          <div className={`card ${isVisible ? styles.scale : ''}`}>
            <div className="card-img">
              <img src={drink2} alt="Champagne Dom Perignon" />
            </div>
            <div className="card-txt">
              <div className="star">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="star rating" className="star" />
                ))}
              </div>
              <h6 className="card-name">Champagne Dom Perignon</h6>
              <p className="card-price">$900.0</p>
            </div>
          </div>

          <div className={`card ${isVisible ? styles.slideRight : ''}`}>
            <div className="card-img">
              <img src={drink3} alt="Masciarelli Drink" />
            </div>
            <div className="card-txt">
              <div className="star">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={star} alt="star rating" className="star" />
                ))}
              </div>
              <h6 className="card-name">Masciarelli</h6>
              <p className="card-price">$190.0</p>
            </div>
          </div>
        </div>

        {/* Cartoon Section */}
        <div className={`cartoon-container ${isVisible ? styles.fadeIn : ''}`}>
          <div className="cartoon">
            <img src={cartoon1} alt="Cartoon 1" />
          </div>
          <div className="cartoon">
            <img src={cartoon2} alt="Cartoon 2" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trending;