import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Study = () => {
  const [data, setData] = useState(null);

  //grabs the chapter content
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3006/chapters/1");
      //console.log(response.data);
      setData(response.data);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1>this is the studypage</h1>
      <h2>{data && data} </h2>
    </>
  );
};

export default Study;