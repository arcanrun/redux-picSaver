// export const API_LIKE = "http://127.0.0.1:8000";
export const API_LIKE = "https://protected-dawn-46189.herokuapp.com";
export const ADD_LIKE = "/toggle-like/";
export const GET_LIKES = "/get-likes/";
export const IS_SIGNED_UP = "/is-signed-up/";
export const SIGN_UP_VK = "/sign-up-vk/";
export const IS_LIKE = "/is-like/";

export const addLikeAPI = add_like_url => API_LIKE + add_like_url;

const ENDPOINT = "http://127.0.0.1:8000";
export const API = {
  TOGGLE_LIKE: `${ENDPOINT}/toggle-like/`,
  GET_LIKES: `${ENDPOINT}/get-likes/`,
  IS_SIGNED_UP: `${ENDPOINT}/get-likes/`
};
