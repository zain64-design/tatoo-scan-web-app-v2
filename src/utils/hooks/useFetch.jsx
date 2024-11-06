import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isloading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        // setTimeout(()=> {
        // },5000);

        const fetchData = async ()=> {
            try {
                const response = await axios.get(url);
                setData(response.data);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();

    },[url])

  return {data,isloading,error};
}

export default useFetch;