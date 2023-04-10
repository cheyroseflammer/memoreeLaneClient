import React, { useEffect, useState } from 'react';
import { getPosts } from './actions/posts';
import './App.css';
import Posts from '../src/components/Posts/Posts';
import Form from '../src/components/Form/Form';
import Map from '../src/components/Map/Map';
import { useDispatch } from 'react-redux';

const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div className='app-container'>
      <div className='app-bar'>
        <h2 className='app-h2'>Memoree Lane</h2>
      </div>
      <div className='grow'>
        <div className='grid-container'>
          <div className='grid-item-form'>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </div>
          <div className='grid-item-posts'>
            <Posts setCurrentId={setCurrentId} />
          </div>
        </div>
        <div className='grid-item-map'>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default App;
