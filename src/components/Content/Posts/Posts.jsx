import './posts.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionCreator } from '../../../store/actions';

function Post({ post }) {
  const dispatch = useDispatch();

  function postLinkHandler() {
    dispatch(actionCreator.setActivePost(post));
  }

  return (
    <div className='post'>
      <div className='post-title'>{post.title}</div>
      <NavLink onClick={postLinkHandler} to={`/posts/${post.id}`}>Read More</NavLink>
    </div>
  );
}

function Posts() {
  const posts = useSelector(state => state.getPostsReducer.posts);

  return (
    <div className='posts-container'>
      {
        posts ? posts.map(el => <Post post={el} key={el.id}/>) : 'Sorry'
      }
    </div>
  );
}

export default Posts;