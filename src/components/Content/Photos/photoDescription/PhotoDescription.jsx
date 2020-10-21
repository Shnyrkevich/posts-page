import React from 'react';
import { useSelector } from 'react-redux';

export default function PhotoDescription() {
  const photoDescription = useSelector(state => state.setActiveContent.activePhoto);

  return (
    <>
      { photoDescription ? <div className='photo-description'>
          <p>{photoDescription.title}</p>
          <img src={photoDescription.thumbnailUrl}/>
        </div> : <p> Please, reload again, state doesnt save in localStorage </p>
      }
    </>
  )
}