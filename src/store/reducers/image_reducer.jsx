import types from "../types";

const INITIAL_STATE = {
  imageList: [],
  searchKey: "",
  curr_page: 1,
};

const imageReducer = (state = INITIAL_STATE, action) => {
  //   console.log(action.payload);
  switch (action.type) {
    case types.SEARCH_IMAGE:
      return {
        ...state,
        imageList: action.payload.imageList,
        curr_page: action.payload.currPage,
        searchKey: action.payload.key,
      };

    case types.GET_IMAGE:
      return {
        ...state,
        imageList: [...action.payload.imageList],
      };

    case types.LOAD_MORE_IMAGE:
      return {
        ...state,
        imageList: [...state.imageList, ...action.payload.imageList],
        curr_page: action.payload.currPage,
      };

    default:
      return state;
  }
};

export default imageReducer;
