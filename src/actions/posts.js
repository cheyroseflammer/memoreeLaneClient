import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data.data });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (post_id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(post_id, post);
    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const deletePost = (post_id) => async (dispatch) => {
  try {
    await api.deletePost(post_id);
    dispatch({ type: 'DELETE', payload: post_id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (post) => async (dispatch) => {
  try {
    const { data } = await api.likePost(post);
    dispatch({ type: 'LIKE', payload: data });
  } catch (error) {
    console.log(error);
  }
};
