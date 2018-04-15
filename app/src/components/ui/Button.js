import React from 'react'


const Button = ({ text, type, handleClick }) => (
  <button 
    type={type ? type : "button" } 
    className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded"
    onClick={handleClick}
    >
  {text}
  </button>
)

export default Button