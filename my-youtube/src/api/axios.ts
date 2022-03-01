import axios from "axios";
const instance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    key: process.env.REACT_APP_API,
    maxResults: 10,
    part: 'snippet',
    regionCode: 'KR',
    order: 'viewCount',
  },
});

const getSearch = async (keyword = "", options = {}) => {
  const returnResult = await instance({
    method: "get",
    url: `search`,
    params: {
      q: keyword,
    },
    ...options,
  })
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
    });
  console.log(returnResult);
  return returnResult;
};

export { getSearch };
