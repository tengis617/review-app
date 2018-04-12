import React from 'react'

import CategorySelectionStep from './CategorySelectionStep'
import BasicInformationStep from './BasicInformationStep'
import UploadImagesStep from './UploadImagesStep'
export default () => (
  <div className="max-w-md container mx-auto">
    <CategorySelectionStep />
    <BasicInformationStep />
    <UploadImagesStep />
  </div>
)