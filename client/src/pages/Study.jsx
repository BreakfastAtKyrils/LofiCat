import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SideBarButton from '../components/SideBarButton';
import StudyContent from '../components/StudyContent';
import TakeQuizButton from '../components/TakeQuizButton';
import './study.css'

const Study = () => {
  const [data, setData] = useState('This is before the button click');
  const [title, setTitle] = useState('Sample Title');
  const testContent = 'For loops are cool, etc.';
  const testTitle = 'Chapter 1: For Loops';
  //grabs the chapter content
    const fetchContent = async () => {
      //const response = await axios.get("http://localhost:3006/chapters/1");
      //console.log(response.data);
      //setData(response.data);
      setData(testContent);
      setTitle(testTitle);
    };

  return (
    <>
    <div class="container-center-horizontal">
    <input type="hidden" id="anPageName" name="page" value="study" />
      <div class="study screen">
        <div class="overlap-group3">
          <img class="study_background" src="img/study-background@1x.png" />
          <div class="overlap-group1">
            <div class="rectangle-8"></div>
              <h1 class="title valign-text-middle">CHAPTERS</h1>
              <div>
                  <SideBarButton title='Chapter 1: For Loops' chapter_number='1' onClick={fetchContent} />
                  <StudyContent text={data} title={title}/>
              </div>
          </div>
          <TakeQuizButton />
          <img class="peakaboo_cat" src="img/peakaboo-cat@2x.png" />
        </div>
      </div>
    </div>
    </>
  );
};

export default Study;