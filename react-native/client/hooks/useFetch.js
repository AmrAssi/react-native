import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `http://localhost:8000/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "b115f9632amsh31101759a26dfeap156e21jsna241220bc192",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const res = await axios.request(options);
      console.log("res", res?.data?.results[0]?.primaryImage?.url);

      setData(res?.data?.results);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
