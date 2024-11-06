import axios from 'axios';

const fetchData = async (url) => {
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  const response = await axios.get(url);
  if (response.data.error) {
    throw new Error(response.data.error);
  }
  return response.data;
};

export default fetchData;