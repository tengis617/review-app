import React from 'react'

export default ({ children, size }) => (
  <div className={`font-semibold text-${size} p-4`}>
    {children}
  </div>
)