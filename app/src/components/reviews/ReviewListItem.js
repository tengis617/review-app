import React from 'react'

const ReviewListItem = ({ title, rating, description, author }) => (
  <div className="flex p-4 border-black border-t">
  <div className="w-1/4 h-12">{author}</div>
  <div className="w-3/4 h-12">
    {title}
    {description}
    {rating}
  </div>
</div>
)
export default ReviewListItem