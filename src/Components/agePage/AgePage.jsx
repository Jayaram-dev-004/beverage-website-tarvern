import React, { useState, useEffect, useRef } from "react";

import logo from "../../assets/logo.png";
import bgImg from "../../assets/age_page/background.png";
import Button from "../Button/Button.jsx";
import "./AgePage.css";
import style from "../../style.module.css";

const AgePage = () => {
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

  return (
    <div
      ref={pageRef}
      className={`age-page-container ${isVisible ? "animate" : ""}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className={`logo-header ${isVisible ? style.fadeIn : ""} ${style.scale}`}>
        <img src={logo} alt="Logo" />
      </div>

      <div className="main-content">
        <div className="text-content">
          <p className={`text-para ${isVisible ? style.slideDown : ""}`}>
            Are You Of Legal Age To Enjoy Drink?
          </p>
          <h1 className={`text-header ${isVisible ? style.slideRight : ""}`}>
            You Must be <span className="text-header-span">25</span> To Savor
          </h1>
          <h1 className={`text-header inner ${isVisible ? style.slideUp : ""}`}>
            A Drink!
          </h1>
        </div>

        <div className={`boolean-content ${isVisible ? style.fadeIn : ""}`}>
          <Button text="Yes"  clsName={isVisible ? style.slideLeft : ""} />
          <Button text="No" clsName={isVisible ? style.slideRight : ""} />
        </div>
      </div>
    </div>
  );
};

export default AgePage;