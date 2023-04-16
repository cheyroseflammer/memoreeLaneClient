import React from 'react';

const PostInfo = ({ info }) => {
  console.log(info);
  return (
    <div className='post-info'>
      <h2>This Post!</h2>
      <ul>
        <li>{info.creator}</li>
        <li>{info.title}</li>
        <li>{info.message}</li>
      </ul>
    </div>
  );
};

export default PostInfo;
