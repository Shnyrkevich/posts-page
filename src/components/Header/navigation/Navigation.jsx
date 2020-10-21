import './navigation.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { actionCreator } from '../../../store/actions';

export default function Navigation() {
  const navigationLinks = ['Posts', 'Todos', 'Photos'];
  const dispatch = useDispatch();
  
  const clickOnPostsLink = () => {
    dispatch(actionCreator.getPosts());
  };

  const clickOnTodosLink = () => {
    dispatch(actionCreator.getTodos());
  };

  const clickOnPhotosLink = () => {
    dispatch(actionCreator.getPhotos());
  };

  return (
    <div className='navigation-container'>
      <NavLink onClick={clickOnPostsLink} to='/posts'>{ navigationLinks[0] }</NavLink>
      <NavLink onClick={clickOnTodosLink} to='/todos'>{ navigationLinks[1] }</NavLink>
      <NavLink onClick={clickOnPhotosLink} to='/photos'>{ navigationLinks[2] }</NavLink>
    </div>
  );
}