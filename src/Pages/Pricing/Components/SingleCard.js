import React from 'react'

const SingleCard = ({heading, line1, line2, line3}) => {
  return (
    <div className='card'>
        <h2>{heading}</h2>
        <div className="content">
            <p>{line1}</p>
            <p>{line2}</p>
            <p>{line3}</p>
        </div>
    </div>
  )
}

export default SingleCard;