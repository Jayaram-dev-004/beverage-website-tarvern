import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import whiskey from '../../assets/premium_spirits/whiskey.png';
import rum from '../../assets/premium_spirits/rum.png';
import vodka from '../../assets/premium_spirits/vodka.png';
import wine from '../../assets/premium_spirits/wine.png';
import beer from '../../assets/premium_spirits/beer.png';
import cartoon1 from '../../assets/premium_spirits/cartoon1.png';
import cartoon2 from '../../assets/premium_spirits/cartoon2.png';
import jackDaniels from '../../assets/premium_spirits/comp1.png';
import bacardi from '../../assets/premium_spirits/comp2.png';
import heineken from '../../assets/premium_spirits/comp3.png';
import corona from '../../assets/premium_spirits/comp4.png';
import style from '../../style.module.css';
import './PremiumSpirits.css';

const PremiumSpirits = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pageRef = useRef(null);

  const navigate = useNavigate();

    const nagigateToHome = () => {
        navigate('/Home02')
    }
    const navigateToProduct = (category) => {
      navigate(`/products/${category}`);
    };

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
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={pageRef} className={`premium-spirits-container`}>
      
      {/* Header Section */}
      <div className={`premium-spirits-header`}>
        <div className={`premium-spirits-logo-container ${style.scale}`}>
          <img src={logo} alt="Logo" className={`premium-spirits-logo`} onClick={nagigateToHome} />
        </div>
        <div className={`premium-spirits-title-container ${style.slideUp}`}>
          <h1 className={`premium-spirits-title`}>Premium Spirits</h1>
          <p className={`premium-spirits-subtitle`}>Taste the Excellence!</p>
        </div>
      </div>

      {/* Cartoon */}
      <div className={`premium-spirits-cartoon ${isVisible ? style.fadeIn : ''}`}>
        <img src={cartoon1} alt="Cartoon 1" className={`premium-spirits-cartoon-img`} />
        <img src={cartoon2} alt="Cartoon 2" className={`premium-spirits-cartoon-img`} />
      </div>

      {/* Spirits Section with Proper Positions */}
      <div className={`premium-spirits-grid`}>
        <div className={`premium-spirits-row`}>
          <div className={`premium-spirits-box ${isVisible ? style.slideLeft : ''}`} onClick={() => navigateToProduct('Whiskey')}>
            <div className={`premium-spirits-img-container`}>
              <img src={whiskey} alt="Whiskey" className={`premium-spirits-img`} />
            </div>
            <p className={`premium-spirits-text`}>Whiskey</p>
          </div>

          <div className={`premium-spirits-box ${isVisible ? style.slideRight : ''}`} onClick={() => navigateToProduct('Rum')}>
            <div className={`premium-spirits-img-container ` }>
              <img src={rum} alt="Rum" className={`premium-spirits-img`} />
            </div>
            <p className={`premium-spirits-text`}>Rum</p>
          </div>
        </div>

        <div className={`premium-spirits-row center`}>
          <div className={`premium-spirits-box ${isVisible ? style.scale : ''}`} onClick={() => navigateToProduct('Vodka')}>
            <div className={`premium-spirits-img-container`}>
              <img src={vodka} alt="Vodka" className={`premium-spirits-img`} />
            </div>
            <p className={`premium-spirits-text`}>Vodka</p>
          </div>
        </div>

        <div className={`premium-spirits-row`}>
          <div className={`premium-spirits-box`}>
            <div className={`premium-spirits-img-container ${isVisible ? style.slideLeft : ''}`} onClick={() => navigateToProduct('Wine')}>
              <img src={wine} alt="Wine" className={`premium-spirits-img`} />
            </div>
            <p className={`premium-spirits-text`}>Wine</p>
          </div>

          <div className={`premium-spirits-box ${isVisible ? style.slideRight : ''}`} onClick={() => navigateToProduct('Beer')}>
            <div className={`premium-spirits-img-container`}>
              <img src={beer} alt="Beer" className={`premium-spirits-img`} />
            </div>
            <p className={`premium-spirits-text`}>Beer</p>
          </div>
        </div>
      </div>

      {/* Manufacturers */}
      <div className={`premium-spirits-manufacturers`}>
        <h2 className={`premium-spirits-manufacturers-title`}>Manufacturers</h2>
        <div className={`premium-spirits-manufacturers-logos`}>
          <img src={jackDaniels} alt="Jack Daniels" className={`premium-spirits-manufacturer-img`} />
          <img src={bacardi} alt="Bacardi" className={`premium-spirits-manufacturer-img`} />
          <img src={heineken} alt="Heineken" className={`premium-spirits-manufacturer-img`} />
          <img src={corona} alt="Corona" className={`premium-spirits-manufacturer-img`} />
        </div>
      </div>

    </div>
  );
};

export default PremiumSpirits;