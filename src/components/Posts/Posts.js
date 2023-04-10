import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import Loader from '../Loader/Loader';
import './Posts.css';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return !posts.length ? (
    <Loader />
  ) : (
    <div className='grid'>
      {posts.map((post) => (
        <div className='grid-item' key={post.post_id}>
          <Post post={post} setCurrentId={setCurrentId} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
