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
      'content': "A simple for loop is the same as C/C++. We can initialize the variable, check condition and increment/decrement value. It consists of four parts: \
      \n\n1. Initialization: It is the initial condition which is executed once when the loop starts. Here, we can initialize the variable, or we can use an already initialized variable. It is an optional condition. \
      \n\n2. Condition: It is the second condition which is executed each time to test the condition of the loop. It continues execution until the condition is false. It must return boolean value either true or false. It is an optional condition. \
      \n\n3. Increment/Decrement: It increments or decrements the variable value. It is an optional condition. \
      \n\n4. Statement: The statement of the loop is executed each time until the second condition is false. \
      \n\n5. Syntax: \
      \n\n  for(initialization; condition; increment/decrement){  \
        \n  //statement or code to be executed\
        \n  }", // content from www.javatpoint.com
      'chapter_number': 1,
      'full_title': 'Chapter 1: For Loops'
    },
    'chapter2' : {
      'title': 'While Loops',
      'content': 'The Java while loop is used to iterate a part of the program repeatedly until the specified Boolean condition is true. As soon as the Boolean condition becomes false, the loop automatically stops.\
      \n\nThe while loop is considered as a repeating if statement. If the number of iteration is not fixed, it is recommended to use the while loop.\
      \n\nSyntax:\
      \n\n  while (condition){\
      \n  //code to be executed\
      \n  Increment / decrement statement\
      \n}\
      \n\nThe different parts of do-while loop:\
      \n\n1. Condition: It is an expression which is tested. If the condition is true, the loop body is executed and control goes to update expression. When the condition becomes false, we exit the while loop.\
      \n\n2. Update expression: Every time the loop body is executed, this expression increments or decrements loop variable.', // content from www.javatpoint.com
      'chapter_number': 2,
      'full_title': 'Chapter 2: While Loops'
    },
    'chapter3' : {
      'title': 'Data Types',
      'content': 'The set of types in the JavaScript language consists of primitive values and objects.\
      \n\nPRIMITIVE VALUES\
      \n\nAll types except objects define immutable values- that is, values which can not be changed. For example, Strings are immutable. We refer to values of these types as primitive values.\
      \n\nBoolean type\
      \nBoolean represents a logical entity and can have two values: true and false. See Boolean and Boolean for more details.\
      \n\nNull type\
      \nThe Null type has exactly one value: null. See null and Null for more details.\
      \n\nUndefined type\
      \nA variable that has not been assigned a value has the value undefined. See undefined and Undefined for more details.\
      \n\nNumeric types\
      \nECMAScript has two built-in numeric types: Number and BigInt — along with the related value NaN.', // content from https://developer.mozilla.org/
      'chapter_number': 3,
      'full_title': 'Chapter 3: Data Types'
    },
    'chapter4' : {
      'title': 'Arrays',
      'content': 'Normally, an array is a collection of similar type of elements which has contiguous memory location.\
      \n\nJava array is an object which contains elements of a similar data type. Additionally, The elements of an array are stored in a contiguous memory location. It is a data structure where we store similar elements. We can store only a fixed set of elements in a Java array.\
      \n\nArray in Java is index-based, the first element of the array is stored at the 0th index, 2nd element is stored on 1st index and so on.\
      \n\nUnlike C/C++, we can get the length of the array using the length member. In C/C++, we need to use the sizeof operator.\
      \n\nIn Java, array is an object of a dynamically generated class. Java array inherits the Object class, and implements the Serializable as well as Cloneable interfaces. We can store primitive values or objects in an array in Java. Like C/C++, we can also create single dimentional or multidimentional arrays in Java.\
      \n\nMoreover, Java provides the feature of anonymous arrays which is not available in C/C++.', // content from www.javatpoint.com
      'chapter_number': 4,
      'full_title': 'Chapter 4: Arrays'
    },
    'chapter5' : {
      'title': 'Objects',
      'content': 'Real Life Objects, Properties, and Methods\
      \n\nIn real life, a car is an object.\
      \n\nA car has properties like weight and color, and methods like start and stop: car.name = Fiat or car.start()\
      \n\nAll cars have the same properties, but the property values differ from car to car.\
      \n\nAll cars have the same methods, but the methods are performed at different times.\
      \n\nJavaScript Objects\
      \n\nYou have already learned that JavaScript variables are containers for data values.\
      \n\nThis code assigns a simple value (Fiat) to a variable named car: let car = Fiat \
      \n\nObjects are variables too. But objects can contain many values.\
      \n\nThis code assigns many values (Fiat, 500, white) to a variable named car: \
      \n\nconst car = {type:"Fiat", model:"500", color:"white"};\
      ', // content from https://www.w3schools.com
      'chapter_number': 5,
      'full_title': 'Chapter 5: Objects'
    },
    'chapter6' : {
      'title': 'Functions',
      'content': 'A JavaScript function is a block of code designed to perform a particular task.\
      A JavaScript function is executed when "something" invokes it (calls it).\
      \n\nFUNCTION SYNTAX\
      \nA JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().\
      \nFunction names can contain letters, digits, underscores, and dollar signs (same rules as variables).\
      \n\nThe parentheses may include parameter names separated by commas:\
      (parameter1, parameter2, ...)\
      \n\nThe code to be executed, by the function, is placed inside curly brackets: {}\
      \nfunction name(parameter1, parameter2, parameter3) {\
        \n// code to be executed\
      \n}\
      \n\nFunction parameters are listed inside the parentheses () in the function definition.\
      \nFunction arguments are the values received by the function when it is invoked.\
      \nInside the function, the arguments (the parameters) behave as local variables.\
      ', // content from https://www.w3schools.com
      'chapter_number': 6,
      'full_title': 'Chapter 6: Functions'
    },
    'chapter7' : {
      'title': 'Methods',
      'content': 'const person = {\
        \nfirstName: "John",\
        \nlastName: "Doe",\
        \nid: 5566,\
        \nfullName: function() {\
          \nreturn this.firstName + " " + this.lastName;\
        \n}\
      \n};\
      \n\nWHAT IS THIS?\
      \n\nIn JavaScript, the this keyword refers to an object. Which object depends on how this is being invoked (used or called). The this keyword refers to different objects depending on how it is used:\
      \n - In an object method, this refers to the object.\
      \n - Alone, this refers to the global object.\
      \n - In a function, this refers to the global object.\
      \n - In a function, in strict mode, this is undefined.\
      \n - In an event, this refers to the element that received the event.\
      \n - Methods like call(), apply(), and bind() can refer this to any object.', // content from https://www.w3schools.com
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