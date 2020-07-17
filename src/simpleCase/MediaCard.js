import React from 'react';
import Gate from './Gate';
const MediaCard = ({card}) => {
  const {title, body, imageUrl, isOpen} = card;
  return(
    <div>
      <h2>{title}</h2>
      {body}
      <Gate isOpen={isOpen}/>
      <img src={imageUrl}/>
    </div>
  );
}

export default MediaCard;