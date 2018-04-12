import React from 'react'


const OperationCard = ({ services, address, price, openingHours }) => (
  <div>
    {services}
    address: {address}
    price: {price}
    opening hours: {openingHours}
  </div>
)

export default OperationCard