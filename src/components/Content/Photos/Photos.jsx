import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreator } from '../../../store/actions';

function Post({ photo }) {
  const disputch = useDispatch();

  function linkHandler() {
    disputch(actionCreator.setActivePhoto(photo));
  }

  return (
    <div className='post'>
      <div className='post-title'>{photo.title}</div>
      <NavLink onClick={linkHandler} to={`/photos/${photo.id}`}>Show picture</NavLink>
    </div>
  );
}

function Photos() {
  const photos = useSelector(state => state.getPhotosReducer.photos);

  return (
    <div className='photos-container'>
      {
        photos ? photos.map(el => <Post photo={el} key={el.id}/>) : 'Sorry'
      }
    </div>
  );
}

export default Photos;