import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './study.css'

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
      <h2>{data && data} </h2>
    <div class="container-center-horizontal">
    <input type="hidden" id="anPageName" name="page" value="study" />
      <div class="study screen">
        <div class="overlap-group3">
          <img class="study_background" src="img/study-background@1x.png" />
          <div class="overlap-group1">
            <div class="rectangle-8"></div>
            <a href="/quiz">
              <div class="group-1">
                <div class="overlap-group-1">
                  <div class="take-quiz valign-text-middle poppins-normal-white-25px">Take Quiz</div>
                </div>
              </div></a>
            <h1 class="title valign-text-middle">CHAPTERS</h1>
            <div class="group-12">
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">2</div>
              </div>
              <div class="classes valign-text-middle">Classes</div>
            </div>
            <div class="group-16">
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">1</div>
              </div>
              <div class="loops valign-text-middle">Loops</div>
            </div>
            <div class="group-10">
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">3</div>
              </div>
              <div class="iife valign-text-middle poppins-normal-empress-30px">IIFE</div>
            </div>
            <div class="group-11">
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">4</div>
              </div>
              <div class="scope valign-text-middle poppins-normal-empress-30px">Scope</div>
            </div>
            <div class="group-15">
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">5</div>
              </div>
              <div class="closures valign-text-middle poppins-normal-empress-30px">Closures</div>
            </div>
          </div>
          <div class="overlap-group2">
            <div class="group-container">
              <div class="group-14">
                <div class="rectangle-10"></div>
              </div>
              <div class="overlap-group-2">
                <div class="chapter-1-loops-for-loops valign-text-middle poppins-normal-white-40px">
                  <span>
                    <span class="poppins-normal-white-40px">CHAPTER 1 LOOPS: </span>
                    <span class="span1">FOR LOOPS</span>
                  </span>
                </div>
              </div>
            </div>
            <img class="arrow-1" src="img/arrow-1@2x.svg" />
            <div class="this-text-is-about-l poppins-normal-black-25px">
              THIS TEXT IS ABOUT LOOPS&nbsp;&nbsp;THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT
              LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS
              THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS
              TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS .<br /><br /><br />THIS
              TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT
              IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS
              ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT
              LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS
              THIS TEXT IS ABOUT LOOPS THIS TEXT IS ABOUT LOOPS .
            </div>
          </div>
          <img class="peakaboo_cat" src="img/peakaboo-cat@2x.png" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Study;