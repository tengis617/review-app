import React from 'react'

import { Header, Card, Button, Row, Col } from '../ui'

export default () => (
  <div className="max-w-md container mx-auto">
    <Card>
      <div>
        <Header size="4xl">Basic Information</Header>
      </div>
      <div className="max-w-sm mx-auto">
        <div>
          <Label text="company name" forInput="companyName" />
          <Input id="companyName" type="text" placeholder="company name" />
        </div>
        <div>
          <Label text="address" forInput="address" />
          <Input id="address" type="text" placeholder="address" />
        </div>
        <div>
          <Label text="tags" forInput="tags" />
          <Input id="tags" type="text" placeholder="tags" />
        </div>
        <div>
          <Label text="short description" forInput="description" />
          <Input id="description" type="text" placeholder="description" />
        </div>
      </div>
    </Card>
  </div>
)

const Input = ({ id, type, placeholder}) => (
  <input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id={id} type={type} placeholder={placeholder} />
)

const Label = ({text, forInput }) => (
  <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for={forInput}>
    {text}
  </label>
)