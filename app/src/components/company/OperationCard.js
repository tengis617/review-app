import React from 'react'

const OperationCard = ({ services, address, openingHours }) => (
  <div className="px-4 py-3">
    <div className="flex">
      <div className=" text-green">
        Open Now
      </div>
      <div className="uppercase text-grey-darker text-md">
        <i className='fa far fa-clock' /> 9 AM - 6 PM
      </div>
    </div>
    <Address address={address} />
  </div>
)

const Address = ({ address }) => (
  <div className="flex-row text-left">
    <div>
      <i className='fa far fa-clock' />address
      </div>
    <div className="text-grey-darker">
      {address}
    </div>
  </div>
)


export default OperationCard