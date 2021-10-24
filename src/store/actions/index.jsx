import * as api from "../../api";
import types from "../types";

export const getImage = () => ({
  type: types.GET_IMAGE,
  payload: api.getImages(),
});

export const loadMoreImage = (...args) => ({
  type: types.LOAD_MORE_IMAGE,
  payload: api.loadMoreImage(...args),
});

export const searchImage = (key) => ({
  type: types.SEARCH_IMAGE,
  payload: api.searchImage(key),
});
