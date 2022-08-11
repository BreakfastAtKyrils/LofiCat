import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './home.css'

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
    <div class="container-center-horizontal">
    <input type="hidden" id="anPageName" name="page" value="home" />
      <div class="home screen">
        <div class="overlap-group4">
          <div class="group-35">
            <img class="logo" src="img/logo-2@2x.png" />
            <div class="overlap-group-1">
              <div class="ellipse-4"></div>
              <a href="study.html"><img class="study_cat" src="img/study-cat@2x.png" /> </a>
            </div>
            <div class="overlap-group1">
              <div class="ellipse-1"></div>
              <div class="ellipse-2"></div>
              <a href="quiz.html"><img class="coding_cat" src="img/coding-cat@2x.png" /> </a>
              <img class="backhome-1" src="img/backhome-1-1@2x.png" />
            </div>
          </div>
          <div class="overlap-group-container">
            <div class="overlap-group5">
              <img class="loggedin_cat-1" src="img/loggedin-cat-1@2x.png" />
              <img class="floatingbook-1" src="img/floatingbook-1@2x.png" />
              <a href="study.html">
                <div class="group-1">
                  <div class="overlap-group">
                    <div class="read-study valign-text-middle poppins-normal-white-25px">Read &amp; Study</div>
                  </div>
                </div></a>
            </div>
            <div class="overlap-group6">
              <img class="code-1" src="img/code-1@2x.png" />
              <a href="quiz.html">
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