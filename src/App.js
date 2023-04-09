import React, { useEffect } from 'react';
import { getPosts } from './actions/posts';
import './App.css';
import Posts from '../src/components/Posts/Posts';
import Form from '../src/components/Form/Form';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className='app-container'>
      <div className='app-bar'>
        <h2 className='app-h2'>Memoree Lane</h2>
      </div>
      <div className='grow'>
        <div className='grid-container'>
          <div className='grid-item-form'>
            <Form />
          </div>
          <div className='grid-item-posts'>
            <Posts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
