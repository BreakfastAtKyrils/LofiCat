import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div class="container-center-horizontal">
      <div class="nav_screen">
        <div class="overlap-group4">
          <div class="navbar">
            <img class="logo" src="img/logo-2@2x.png" />
            <div class="overlap-group-1">
              <div class="ellipse-4"></div>
              <li><Link to="/study"><img class="study_cat" src="img/study-cat@2x.png" /></Link></li>
            </div>
            <div class="overlap-group1">
              <div class="ellipse-1"></div>
              <div class="ellipse-2"></div>
              <li><Link to="/quiz"><img class="coding_cat" src="img/coding-cat@2x.png" /></Link></li>
              <li><Link to="/home"><img class="backhome-1" src="img/backhome-1-1@2x.png" /></Link></li>
            </div>
          </div>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;

<div class="navbar">
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