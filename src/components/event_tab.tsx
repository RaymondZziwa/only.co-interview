import React from 'react'

interface eventProps {
    year: number;
    description: string;
}

const EventTab: React.FC<eventProps> = ({year, description}) => {
  return (
    <div>
         <h6>{year}</h6>
        <p>{description}</p>
    </div>
  )
}

export default EventTab