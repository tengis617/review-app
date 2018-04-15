import React from 'react'
import Label from './Label'

const InputField = ({input, type, label, id}) => (
  <div>
    <Label text={label} />
    <input {...input} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" type={type} placeholder={label} />
  </div>
)

export default InputField