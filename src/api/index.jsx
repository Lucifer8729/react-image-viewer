import axios from "axios";

export const getImages = async () => {
  //   console.log(process.env);
  const options = {
    method: "GET",
    url: "https://api.unsplash.com/photos",
    params: { page: "1", per_page: "30" },
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  };

  const response = await axios.request(options);

  //   console.log(response.data);

  return { imageList: response.data };
};

export const loadMoreImage = async (page, key = "") => {
  if (key) {
    const options = {
      method: "GET",
      url: "https://api.unsplash.com/search/photos",
      params: { page: page, query: `${key}`, per_page: "30" },
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
      },
    };

    const response = await axios.request(options);
    return { imageList: response.data.results, currPage: 1 };
  }

  const options = {
    method: "GET",
    url: "https://api.unsplash.com/photos",
    params: { page: page, per_page: "30" },
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  };

  const response = await axios.request(options);
  return { imageList: response.data, currPage: page };
};

export const searchImage = async (key) => {
  const options = {
    method: "GET",
    url: "https://api.unsplash.com/search/photos",
    params: { page: "1", query: `${key}`, per_page: "30" },
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_CLIENT_ID}`,
    },
  };

  const response = await axios.request(options);
  return { imageList: response.data.results, currPage: 1, key: key };
};
