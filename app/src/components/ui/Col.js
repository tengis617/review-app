import React from "react";

export default ({ size, children }) => (
  <div className={`w-${size}`}>
    {children}
  </div>
)