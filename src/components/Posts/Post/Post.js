import React from 'react';
import './Post.css';
import moment from 'moment';
import { FaTrash, FaHeart } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Post = ({ post }) => {
  const handleLike = () => {};
  const handleDelete = () => {
    console.log('hello');
  };
  const handleClick = () => {};
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-img'>
          <img src={post.selectedFile} alt={post.title} className='post-img' />
          <p className='dots' onClick={handleClick()}>
            <BsThreeDotsVertical />
          </p>
        </div>
        <div className='card-text'>
          <h6 className='creator'>{post.creator}</h6>
          <p className='time'>{moment(post.created_at).fromNow()}</p>
        </div>
        <div className='card-details'>
          <h5 className='title'>{post.title}</h5>
          <p className='message'>{post.message}</p>
          <p className='tags'>{post.tags.map((tag) => `#${tag} `)}</p>
        </div>
        <div className='card-actions'>
          <button onClick={() => handleLike()} className='like post-button'>
            <FaHeart /> LIKE {post.likeCount}
          </button>
          <button className='delete post-button' onClick={() => handleDelete()}>
            <FaTrash />
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
