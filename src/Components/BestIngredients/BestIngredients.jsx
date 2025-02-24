import React, { useState, useEffect, useRef } from 'react';
import Point1 from '../../assets//best_ingredient/point2.png';
import Point2 from '../../assets/best_ingredient/point1.png';
import BestIngImg from '../../assets/best_ingredient/image_1.png';
import Button from '../Button/Button';
import './BestIngredients.css'
import styles from '../../style.module.css';

const BestIngredients = () => {
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
        <div ref={pageRef} className={`bestIng-container`}>

            {/* Left component */}
            <div className={`bestIng-left-container`}>

                {/* Outer */}
                <div className={`left-outer-container`}>
                    <div className={`left-inner-header-container ${isVisible ? styles.slideUp : ''}`}> 
                        <h1 className='left-inner-header'>Best Ingredients</h1>
                    </div>
                    <div className={`left-inner-content-container`}> 
                        <div className={`left-inner-item item1 ${isVisible ? styles.slideRight : ''}`}>
                            <div className={`inner-item-header`}>
                                <img src={Point1} alt="Best Quality" className='point'/>
                                <h3 className='inner-item-header'>Best Quality</h3>
                            </div>
                            <div className={`inner-item-text`}>
                                <p className='inner-item-para'>Crafted with pure water, premium grains, and handpicked botanicals, our alcohol delivers rich flavor and smooth perfection.</p>
                            </div>
                        </div>
                        <div className={`left-inner-item item2 ${isVisible ? styles.slideLeft : ''}`}>
                            <div className={`inner-item-header`}>
                                <img src={Point2} alt="Premium" className='point'/>
                                <h3 className='inner-item-header'>Premium</h3>
                            </div>
                            <div className={`inner-item-text`}>
                                <p className='inner-item-para'>Ipsum dolor sit amet consectetur adipisicing elit. Deserunt nulla, incidunt atque pariatur eaque enim aperiam voluptatum reprehenderit ipsum voluptate!</p>
                            </div>
                        </div>
                        <div className={`left-inner-item item3 ${isVisible ? styles.slideRight : ''}`}>
                            <div className={`inner-item-header`}>
                                <img src={Point1} alt="Malts Quality" className='point'/>
                                <h3 className='inner-item-header'>Malts Quality</h3>
                            </div>
                            <div className={`inner-item-text`}>
                                <p className='inner-item-para'>Dolor sit amet consectetur adipisicing elit. Quas soluta facilis sint adipisci dignissimos similique consectetur! Neque molestiae recusandae quia?</p>
                            </div>
                        </div>
                    </div>
                    <div className={`left-inner-btn ${isVisible ? styles.slideDown : ''}`}> 
                        <Button text={'Shop Now'}/>
                    </div>
                </div>
            </div>

            {/* Right component */}
            <div className={`bestIng-right-container ${isVisible ? styles.fadeIn : ''}`}>
                <img src={BestIngImg} alt="Best Ingredients" className='bestIng-img'/>
            </div>
        </div>
    );
};

export default BestIngredients;