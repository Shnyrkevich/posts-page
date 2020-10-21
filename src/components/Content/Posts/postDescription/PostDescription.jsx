import './postDescription.css';
import React from 'react';
import { useSelector } from 'react-redux';

export default function PostDescription() {
  const post = useSelector(state => state.setActiveContent.activePost);

  return (
    <>
    {
      post ? <div className='post-description'>
        <p className='post-description_title'>{post.title}</p>
        <p className='post-descrition_description'>{post.body}</p>
      </div> : <p className='post-description_title'>Please, reload again, state doesnt save in localStorage</p>
    }
    </>
  );
}