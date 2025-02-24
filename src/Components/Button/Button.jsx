import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'

const Button = ({text,clsName}) => {
    const navigate = useNavigate();
  
    const confirmation = () => {

      if(text == 'Yes') 
        navigate("/Home01");
      else if(text == 'No')
                          alert("💙 We Love Your Energy, But… 💙Sorry, You're a Bit Too Young! 🚫 ")
      else if(text == "Shop Now")
        navigate("/PremiumSpirits")

      else if(text == "Find")
        navigate("/BeverageLocator")
      
      
  
    }
  return (
    <div>
        <button className={`btn ${clsName}`} onClick={confirmation}>
            <span className='btn-span'>{text}</span>
        </button>
    </div>
  )
}

export default Button
