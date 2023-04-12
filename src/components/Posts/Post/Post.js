import React from 'react';
import './Post.css';
import moment from 'moment';
import { FaTrash, FaHeart } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { deletePost, likePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(likePost(post));
    window.location.reload();
  };

  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-img'>
          <img src={post.selectedFile} alt={post.title} className='post-img' />
          <p className='dots' onClick={() => setCurrentId(post.post_id)}>
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
          <button onClick={handleClick} className='like post-button'>
            <FaHeart /> LIKE {post.likeCount}
          </button>
          <button className='delete post-button' onClick={() => dispatch(deletePost(post.post_id))}>
            <FaTrash />
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
