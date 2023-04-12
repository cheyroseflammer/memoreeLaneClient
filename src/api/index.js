import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (post_id, postData) => axios.put(`${url}/${post_id}`, postData);

export const deletePost = (post_id) => axios.delete(`${url}/${post_id}`);

export const likePost = (post) => axios.patch(`${url}/${post.post_id}/likePost`, post);
