import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3006/");
      console.log(response.data.books);
      setData(response.data.books);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>this is the homepage</h1>
      <h2>{data && data.name} </h2>
    </>
  );
};

export default Home;