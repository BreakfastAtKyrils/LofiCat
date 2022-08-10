import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Study = () => {
  const [data, setData] = useState[null];

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3006/chapters/1");
      console.log(response.data.chapters);
      setData(response.data.chapters);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>this is the homepage</h1>
      <h2>{data && data.content} </h2>
    </>
  );
};

export default Study;