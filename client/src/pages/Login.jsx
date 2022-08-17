import React from 'react';
import './login.css';

const Login = () => {
  return (
    <div class="container-center-horizontal">
      <input type="hidden" id="anPageName" name="page" value="login" />
      <div class="login screen">
        <div class="overlap-group8">
          <div class="group-container">
            <div class="overlap-group7">
              <img class="logo" src="img/logo-2@2x.png" />
              <div class="sign-in-to-get-learning-or valign-text-middle">Sign in to get learning or</div>
              <div class="sign-up valign-text-middle">Sign Up</div>
            </div>
            <div class="overlap-group6">
              <div class="username poppins-normal-white-25px">Username</div>
              <div class="overlap-group2">
                <textarea class="name" name="name" placeholder="Name" type="text" required></textarea>
              </div>
            </div>
            <div class="overlap-group5">
              <div class="password poppins-normal-white-25px">Password</div>
              <div class="overlap-group3">
                <textarea class="password-1" name="password" placeholder="Password" type="text" required></textarea>
              </div>
            </div>
            <div class="group-3">
              <div class="rectangle-4"></div>
              <div class="keep-me-logged-in">Keep me logged in</div>
            </div>
            <a href="/home">
              <div class="group-1">
                <div class="overlap-group1">
                  <div class="rectangle-5"></div>
                  <div class="sign-in valign-text-middle poppins-normal-white-30px">Sign In</div>
                </div>
              </div></a><a href="/home">
              <div class="group-2">
                <div class="overlap-group">
                  <img
                    class="ui-login-page-desktop-prototype-1-1"
                    src="img/ui-login-page-desktop-prototype--1--1@2x.png"
                  />
                  <div class="sign-in-with-gmail valign-text-middle poppins-normal-white-30px">Sign In With Gmail</div>
                </div>
              </div></a>
          </div>
          <img class="homepage_cat" src="img/homepage-cat@2x.png" />
        </div>
      </div>
    </div>
  );

};

export default Login;