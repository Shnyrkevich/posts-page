import './content.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Photos from './Photos/Photos';
import Posts from './Posts/Posts';
import Todos from './Todos/Todos';
import PhotoDescription from './Photos/photoDescription/PhotoDescription';
import PostDescription from './Posts/postDescription/PostDescription';
import { useSelector } from 'react-redux';
import preloader from '../../assets/images/preloader.svg';

function Content() {
  const isFetcing = useSelector(state => state.fetchingStatusReducer.isFetcing);

  return (
    <>
      { isFetcing ? <img className='preloader' src={preloader} /> 
      : <div className='content-wrapper'>
        <Route exact render={()=> <div className='default-content'> You can choose one of the content types in navigation </div>} path='/'/>
        <Route exact render={() => <Photos />} path='/photos'/>
        <Route exact render={() => <Posts />} path='/posts'/>
        <Route exact render={() => <Todos />} path='/todos'/>
        <Route exact render={() => <PhotoDescription />} path='/photos/:id'/>
        <Route exact render={() => <PostDescription />} path='/posts/:id'/>
      </div> }
    </>
  );
}

export default Content;