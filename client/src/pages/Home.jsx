import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './home.css';

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
      <div class="container-center-horizontal">
        <input type="hidden" id="anPageName" name="page" value="home" />
        <div class="home">
          <div class="overlap-group4">
            <div class="overlap-group-container">
              <div class="overlap-group5">
                <a href="/study">
                  <div class="group-1">
                    <div class="overlap-group">
                      <div class="read-study valign-text-middle poppins-normal-white-25px">Read &amp; Study</div>
                    </div>
                  </div></a>
              </div>
              <div class="overlap-group6">
                <a href="/quiz">
                  <div class="group-7">
                    <div class="overlap-group">
                      <div class="quiz-yourself valign-text-middle poppins-normal-white-25px">Quiz Yourself</div>
                    </div>
                  </div></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;