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

export const updatePost = (post_id, postData) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(post_id, postData);
    dispatch({ type: 'PUT', payload: data });
    console.log({ data });
  } catch (error) {
    console.log(error);
  }
};
