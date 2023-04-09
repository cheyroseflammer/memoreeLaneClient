import React, { useEffect, useState } from 'react';
import './Form.css';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
  const [postData, setPostData] = useState({
    title: '',
    creator: '',
    message: '',
    tags: '',
    selectedFile: '',
    latitude: '',
    longitude: '',
  });
  const dispatch = useDispatch();
  const getLoc = () => {};
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { coords } = position;
        setPostData({
          ...postData,
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      });
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };
  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <h6>Creating a Memory</h6>
        <input
          type='text'
          name='creator'
          id='creator'
          placeholder='creator'
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
        />
        <input
          type='text'
          name='title'
          id='title'
          placeholder='title'
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <textarea
          name='message'
          id='message'
          placeholder='message'
          value={postData.message}
          onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        ></textarea>
        <input
          type='text'
          name='tags'
          id='tags'
          placeholder='tags'
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        />
        <div className='file-input'>
          <FileBase
            id='file'
            type='file'
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />
        </div>
        <button className='form button-submit' type='submit'>
          SUBMIT
        </button>
        <button className='form button-clear' type='button' onClick={getLoc}>
          CLEAR
        </button>
      </form>
    </div>
  );
};

export default Form;