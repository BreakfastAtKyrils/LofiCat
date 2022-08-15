import React, {useState, useEffect} from 'react';
import axios from 'axios';
import SideBarButton from '../components/SideBarButton';
import StudyContent from '../components/StudyContent';
import TakeQuizButton from '../components/TakeQuizButton';
import './study.css';

const Study = () => {
  const tempStudyData = {
    'chapter1' : {
      'title': 'For Loops',
      'content': 'This is the content for Chapter 1. We must add proper content soon.',
      'chapter_number': 1,
      'full_title': 'Chapter 1: For Loops'
    },
    'chapter2' : {
      'title': 'While Loops',
      'content': 'This is the content for Chapter 2. We must add proper content soon.',
      'chapter_number': 2,
      'full_title': 'Chapter 2: While Loops'
    },
    'chapter3' : {
      'title': 'If Statements',
      'content': 'This is the content for Chapter 3. We must add proper content soon.',
      'chapter_number': 3,
      'full_title': 'Chapter 3: If statements'
    },
    'chapter4' : {
      'title': 'Arrays',
      'content': 'This is the content for Chapter 4. We must add proper content soon.',
      'chapter_number': 4,
      'full_title': 'Chapter 4: Arrays'
    },
    'chapter5' : {
      'title': 'Objects',
      'content': 'This is the content for Chapter 5. We must add proper content soon.',
      'chapter_number': 5,
      'full_title': 'Chapter 5: Objects'
    },
    'chapter6' : {
      'title': 'Functions',
      'content': 'This is the content for Chapter 6. We must add proper content soon.',
      'chapter_number': 6,
      'full_title': 'Chapter 6: Functions'
    },
    'chapter7' : {
      'title': 'Methods',
      'content': 'This is the content for Chapter 7. We must add proper content soon.',
      'chapter_number': 7,
      'full_title': 'Chapter 7: Methods'
    }

  };

  const [data, setData] = useState(tempStudyData.chapter1.content);
  const [title, setTitle] = useState(tempStudyData.chapter1.title);

  //grabs the chapter content
  const fetchContent = (chapterNumber) => {
    //const response = await axios.get("http://localhost:3006/chapters/1");
    //console.log(response.data);
    //setData(response.data);
    const key = `chapter${chapterNumber}`;
    const content = tempStudyData[key].content;
    const title = tempStudyData[key].title;
    setData(content);
    setTitle(title);
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
                <SideBarButton title={tempStudyData.chapter1.full_title} chapter_number={tempStudyData.chapter1.chapter_number} onClick={() => fetchContent(1)} />
                <SideBarButton title={tempStudyData.chapter2.full_title} chapter_number={tempStudyData.chapter2.chapter_number} onClick={() => fetchContent(2)} />
                <SideBarButton title={tempStudyData.chapter3.full_title} chapter_number={tempStudyData.chapter3.chapter_number} onClick={() => fetchContent(3)} />
                <SideBarButton title={tempStudyData.chapter4.full_title} chapter_number={tempStudyData.chapter4.chapter_number} onClick={() => fetchContent(4)} />
                <SideBarButton title={tempStudyData.chapter5.full_title} chapter_number={tempStudyData.chapter5.chapter_number} onClick={() => fetchContent(5)} />
                <SideBarButton title={tempStudyData.chapter6.full_title} chapter_number={tempStudyData.chapter6.chapter_number} onClick={() => fetchContent(6)} />
                <SideBarButton title={tempStudyData.chapter7.full_title} chapter_number={tempStudyData.chapter7.chapter_number} onClick={() => fetchContent(7)} />
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