import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, type, handleClick }) => (
  <button
    type={type ? type : "button"}
    className="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded"
    onClick={handleClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.element.isRequired,
  handleClick: PropTypes.func.isRequired,
  type: PropTypes.string
}
export default Button