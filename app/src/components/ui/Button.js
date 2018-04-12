import React from 'react'


const Button = ({ text }) => (
  <button className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded">
  {text}
  </button>
)

export default Button