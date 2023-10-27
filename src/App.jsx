import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function App() {
  return (
    <>
    {/* Navbar Desktop Start */}
      <nav className="hidden w-full lg:block pt-5 pb-5 shadow-lg">
        <div className="nav-bar md:mr-10 md:ml-10 flex flex-row justify-between">
          <div className="logo-sect">
            <a href="">
              <img src="src\nav-images\logo.svg" alt="" />
            </a>
          </div>
          <div className="nav-links flex flex-row">
            <a href="" className="mr-8">
              <img src="src\nav-images\notification.png" alt="" width="30px" />
            </a>
            <a href="" className="mr-8">
              <img src="src\nav-images\discord.png" alt="" width="30px" />
            </a>
            <a href="" className="mr-8">
              <img src="src\nav-images\man.png" alt="" width="30px" />
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar desktop end */}

      {/* Navbar Mobile Start */}
      <nav className="flex lg:hidden navbar">
        <a href="">
          <img src="src\nav-images\logo.svg" alt="" />
        </a>
        <div className="menu-container pr-4">
          
          <input type="checkbox" id="menu-toggle" className="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-btn"></label>
          <ul className="nav-menu">
            <a href="">
              <li className="nav-item">Notifications</li>
            </a>
            <a href="">
              <li className="nav-item">Discord</li>
            </a>
            <a href="">
              <li className="nav-item">Profile</li>
            </a>
          </ul>
        </div>
      </nav>
      {/* Navbar Mobile End */}

      {/* LMS start */}
      <div className="dash-board flex flex-row">

        {/* LMS sidebar Start */}
        <div className="hidden lg:w-1/4 xl:w-1/5 lg:flex">
          <div className="left-side ml-8 mr-4 mt-10 mb-8">
            <div className="ml-4 mt-4">
              <div className="mt-8 mb-8">
                <a
                  href=""
                  className="flex flex-row items-center text-gray-200 hover:text-white transition duration-200 ease-in-out"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.524 22C16.777 22 17.852 21.934 18.751 21.735C19.661 21.532 20.449 21.18 21.065 20.565C21.68 19.949 22.032 19.161 22.235 18.251C22.435 17.352 22.5 16.277 22.5 15.024V12C22.5 11.4696 22.2893 10.9609 21.9142 10.5858C21.5391 10.2107 21.0304 10 20.5 10H12.5C11.9696 10 11.4609 10.2107 11.0858 10.5858C10.7107 10.9609 10.5 11.4696 10.5 12V20C10.5 20.5304 10.7107 21.0391 11.0858 21.4142C11.4609 21.7893 11.9696 22 12.5 22H15.524ZM2.5 15.024C2.5 16.277 2.566 17.352 2.766 18.251C2.968 19.161 3.32 19.949 3.936 20.565C4.551 21.18 5.339 21.532 6.249 21.735C6.336 21.754 6.424 21.772 6.512 21.789C7.596 21.999 8.5 21.081 8.5 19.976V12C8.5 11.4696 8.28929 10.9609 7.91421 10.5858C7.53914 10.2107 7.03043 10 6.5 10H4.5C3.96957 10 3.46086 10.2107 3.08579 10.5858C2.71071 10.9609 2.5 11.4696 2.5 12V15.024ZM9.476 2C8.223 2 7.148 2.066 6.249 2.266C5.339 2.468 4.551 2.82 3.935 3.436C3.32 4.051 2.968 4.839 2.765 5.749C2.749 5.824 2.733 5.899 2.719 5.974C2.504 7.073 3.439 8 4.559 8H20.476C21.581 8 22.499 7.096 22.289 6.012C22.2719 5.92409 22.2535 5.83641 22.234 5.749C22.032 4.839 21.68 4.051 21.064 3.435C20.449 2.82 19.661 2.468 18.751 2.265C17.852 2.065 16.777 2 15.524 2H9.476Z"
                      fill="currentColor"
                    />
                  </svg>
                  <span className="font-medium ml-2 text-lg">Dashboard</span>
                </a>
              </div>
              <div className="mt-8 mb-8">
                <a
                  href=""
                  className="flex flex-row items-center text-gray-200 hover:text-white transition duration-200 ease-in-out"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.5 12.934V15.066C22.5 15.952 22.5 16.716 22.418 17.328C22.33 17.983 22.131 18.612 21.621 19.121C21.111 19.631 20.483 19.83 19.828 19.918C19.216 20 18.452 20 17.566 20H11.434C10.548 20 9.784 20 9.172 19.918C8.517 19.83 7.888 19.631 7.379 19.121C6.869 18.611 6.67 17.983 6.582 17.328C6.5 16.716 6.5 15.952 6.5 15.066V12.934C6.5 12.048 6.5 11.284 6.582 10.672C6.67 10.017 6.869 9.388 7.379 8.879C7.889 8.369 8.517 8.17 9.172 8.082C9.784 8 10.548 8 11.434 8H17.566C18.452 8 19.216 8 19.828 8.082C20.483 8.17 21.112 8.369 21.621 8.879C22.131 9.389 22.33 10.017 22.418 10.672C22.5 11.284 22.5 12.048 22.5 12.934ZM11.5 14C11.5 13.606 11.5776 13.2159 11.7284 12.8519C11.8791 12.488 12.1001 12.1573 12.3787 11.8787C12.6573 11.6001 12.988 11.3791 13.3519 11.2284C13.7159 11.0776 14.106 11 14.5 11C14.894 11 15.2841 11.0776 15.6481 11.2284C16.012 11.3791 16.3427 11.6001 16.6213 11.8787C16.8999 12.1573 17.1209 12.488 17.2716 12.8519C17.4224 13.2159 17.5 13.606 17.5 14C17.5 14.7956 17.1839 15.5587 16.6213 16.1213C16.0587 16.6839 15.2956 17 14.5 17C13.7044 17 12.9413 16.6839 12.3787 16.1213C11.8161 15.5587 11.5 14.7956 11.5 14Z"
                      fill="currentColor"
                      fill-opacity=""
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.497 7.004C18.21 7 17.917 7 17.619 7H11.38C10.537 7 9.71699 7 9.03799 7.091C8.27199 7.194 7.39799 7.445 6.67099 8.171C5.94399 8.898 5.69299 9.773 5.59099 10.539C5.49999 11.218 5.49999 12.037 5.49999 12.881V15.119C5.49999 15.412 5.49999 15.702 5.50399 15.984C5.44127 15.9812 5.3786 15.9775 5.31599 15.973C4.94299 15.943 4.57099 15.88 4.20899 15.708C3.58803 15.4118 3.08775 14.9112 2.79199 14.29C2.61999 13.93 2.55599 13.557 2.52699 13.184C2.5027 12.7578 2.4937 12.3309 2.49999 11.904V8.934C2.49999 8.048 2.49999 7.284 2.58199 6.672C2.66999 6.017 2.86899 5.388 3.37899 4.879C3.88899 4.369 4.51699 4.17 5.17199 4.082C5.78399 4 6.54799 4 7.43399 4H15.039C15.461 4 15.824 4 16.148 4.07C16.7061 4.19354 17.2173 4.47396 17.6214 4.87824C18.0255 5.28252 18.3057 5.79384 18.429 6.352C18.474 6.552 18.49 6.768 18.497 7.004Z"
                      fill="currentColor"
                      fill-opacity=""
                    />
                  </svg>
                  <span className="font-medium text-lg ml-2">My Journey</span>
                </a>
              </div>
              <div className="mt-8 mb-8">
                <a
                  href=""
                  className="flex flex-row items-center text-gray-200 hover:text-white transition duration-200 ease-in-out"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.274 8.1C22.884 6.484 22.815 4.362 21.613 3.062C21.3105 2.73494 20.9452 2.47231 20.5388 2.28982C20.1324 2.10734 19.6934 2.00876 19.248 2C18.299 1.978 17.317 2.34 16.41 3.099C16.3867 3.1183 16.3644 3.13865 16.343 3.16L3.374 16.181C2.81368 16.7438 2.49937 17.5058 2.5 18.3V19.993C2.5 21.094 3.392 22 4.504 22H6.183C6.57789 21.9999 6.96887 21.9219 7.33353 21.7703C7.69819 21.6188 8.02934 21.3968 8.308 21.117L21.274 8.1ZM17.707 5.793C17.6148 5.69749 17.5044 5.62131 17.3824 5.5689C17.2604 5.51649 17.1292 5.4889 16.9964 5.48775C16.8636 5.48659 16.7319 5.5119 16.609 5.56218C16.4862 5.61246 16.3745 5.68671 16.2806 5.7806C16.1867 5.8745 16.1125 5.98615 16.0622 6.10905C16.0119 6.23194 15.9866 6.36362 15.9878 6.4964C15.9889 6.62918 16.0165 6.7604 16.0689 6.8824C16.1213 7.00441 16.1975 7.11475 16.293 7.207L17.293 8.207C17.3852 8.30251 17.4956 8.37869 17.6176 8.4311C17.7396 8.48351 17.8708 8.5111 18.0036 8.51225C18.1364 8.5134 18.2681 8.4881 18.391 8.43782C18.5139 8.38754 18.6255 8.31329 18.7194 8.21939C18.8133 8.1255 18.8875 8.01385 18.9378 7.89095C18.9881 7.76806 19.0134 7.63638 19.0123 7.5036C19.0111 7.37082 18.9835 7.2396 18.9311 7.11759C18.8787 6.99559 18.8025 6.88525 18.707 6.793L17.707 5.793Z"
                      fill="currentColor"
                      fill-opacity=""
                    />
                  </svg>
                  <span className="font-medium text-lg ml-2">
                    Coding Playground
                  </span>
                </a>
              </div>
              <div className="mt-8 mb-8">
                <a
                  href=""
                  className="flex flex-row items-center text-gray-200 hover:text-white transition duration-200 ease-in-out"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H20.5C21.2956 2 22.0587 2.31607 22.6213 2.87868C23.1839 3.44129 23.5 4.20435 23.5 5V19C23.5 19.7956 23.1839 20.5587 22.6213 21.1213C22.0587 21.6839 21.2956 22 20.5 22H14.5ZM5.67 20C5.56 19.687 5.5 19.35 5.5 19V5C5.5 4.65 5.56 4.313 5.67 4H5.5C5.23478 4 4.98043 4.10536 4.79289 4.29289C4.60536 4.48043 4.5 4.73478 4.5 5V19C4.5 19.2652 4.60536 19.5196 4.79289 19.7071C4.98043 19.8946 5.23478 20 5.5 20H5.67ZM9.5 8.015C9.49974 7.88368 9.52534 7.75359 9.57535 7.63216C9.62537 7.51074 9.69881 7.40035 9.79148 7.30731C9.88415 7.21426 9.99424 7.14038 10.1155 7.08989C10.2367 7.03939 10.3667 7.01326 10.498 7.013L18.498 7C18.7632 6.99947 19.0178 7.10432 19.2057 7.29148C19.3936 7.47864 19.4995 7.73278 19.5 7.998C19.5005 8.26322 19.3957 8.51778 19.2085 8.70569C19.0214 8.8936 18.7672 8.99947 18.502 9L10.502 9.013C10.3707 9.01326 10.2406 8.98766 10.1192 8.93764C9.99774 8.88763 9.88735 8.81419 9.79431 8.72152C9.70126 8.62885 9.62738 8.51876 9.57689 8.39753C9.52639 8.27631 9.50026 8.14632 9.5 8.015ZM9.5 12.027C9.49973 11.762 9.6047 11.5076 9.79183 11.32C9.97896 11.1323 10.233 11.0265 10.498 11.026L18.498 11.013C18.7632 11.0125 19.0178 11.1173 19.2057 11.3045C19.3936 11.4916 19.4995 11.7458 19.5 12.011C19.5005 12.2762 19.3957 12.5308 19.2085 12.7187C19.0214 12.9066 18.7672 13.0125 18.502 13.013L10.502 13.026C10.3707 13.0263 10.2406 13.0007 10.1192 12.9506C9.99774 12.9006 9.88735 12.8272 9.79431 12.7345C9.70126 12.6418 9.62738 12.5318 9.57689 12.4105C9.52639 12.2893 9.50026 12.1583 9.5 12.027ZM9.5 16.027C9.49973 15.762 9.6047 15.5076 9.79183 15.32C9.97896 15.1323 10.233 15.0265 10.498 15.026L18.498 15.013C18.7632 15.0125 19.0178 15.1173 19.2057 15.3045C19.3936 15.4916 19.4995 15.7458 19.5 16.011C19.5005 16.2762 19.3957 16.5308 19.2085 16.7187C19.0214 16.9066 18.7672 17.0125 18.502 17.013L10.502 17.026C10.3707 17.0263 10.2406 17.0007 10.1192 16.9506C9.99774 16.9006 9.88735 16.8272 9.79431 16.7345C9.70126 16.6418 9.62738 16.5318 9.57689 16.4105C9.52639 16.2893 9.50026 16.1583 9.5 16.027Z"
                      fill="currentColor"
                      fill-opacity=""
                    />
                  </svg>
                  <span className="font-medium text-lg ml-2">Job Portals</span>
                </a>
              </div>
              <div className="mt-8 mb-8">
                <a
                  href=""
                  className="flex flex-row items-center text-gray-200 hover:text-white transition duration-200 ease-in-out"
                >
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.707 10.293C10.6148 10.1975 10.5044 10.1213 10.3824 10.0689C10.2604 10.0165 10.1292 9.98891 9.9964 9.98776C9.86362 9.9866 9.73194 10.0119 9.60905 10.0622C9.48615 10.1125 9.3745 10.1867 9.28061 10.2806C9.18671 10.3745 9.11246 10.4862 9.06218 10.6091C9.0119 10.732 8.9866 10.8636 8.98775 10.9964C8.9889 11.1292 9.01649 11.2604 9.0689 11.3824C9.12131 11.5044 9.19749 11.6148 9.293 11.707L11.086 13.5L9.293 15.293C9.19749 15.3853 9.12131 15.4956 9.0689 15.6176C9.01649 15.7396 8.9889 15.8708 8.98775 16.0036C8.9866 16.1364 9.0119 16.2681 9.06218 16.391C9.11246 16.5139 9.18671 16.6255 9.28061 16.7194C9.3745 16.8133 9.48615 16.8876 9.60905 16.9378C9.73194 16.9881 9.86362 17.0134 9.9964 17.0123C10.1292 17.0111 10.2604 16.9835 10.3824 16.9311C10.5044 16.8787 10.6148 16.8025 10.707 16.707L12.5 14.914L14.293 16.707C14.4816 16.8892 14.7342 16.99 14.9964 16.9877C15.2586 16.9854 15.5094 16.8802 15.6948 16.6948C15.8802 16.5094 15.9854 16.2586 15.9877 15.9964C15.99 15.7342 15.8892 15.4816 15.707 15.293L13.914 13.5L15.707 11.707C15.8892 11.5184 15.99 11.2658 15.9877 11.0036C15.9854 10.7414 15.8802 10.4906 15.6948 10.3052C15.5094 10.1198 15.2586 10.0146 14.9964 10.0123C14.7342 10.0101 14.4816 10.1109 14.293 10.293L12.5 12.086L10.707 10.293ZM12.982 2.00001C13.661 1.99901 14.263 1.99801 14.82 2.22801C15.376 2.45801 15.801 2.88601 16.28 3.36601C17.23 4.31901 18.181 5.27001 19.134 6.21901C19.614 6.69901 20.041 7.12401 20.272 7.68001C20.502 8.23701 20.502 8.84001 20.5 9.51801C20.496 12.034 20.5 14.55 20.5 17.066C20.5 17.952 20.5 18.716 20.418 19.328C20.33 19.983 20.131 20.612 19.621 21.121C19.111 21.631 18.483 21.83 17.828 21.918C17.216 22 16.452 22 15.566 22H9.434C8.548 22 7.784 22 7.172 21.918C6.517 21.83 5.888 21.631 5.379 21.121C4.869 20.611 4.67 19.983 4.582 19.328C4.5 18.716 4.5 17.952 4.5 17.066V6.93401C4.5 6.04801 4.5 5.28401 4.582 4.67201C4.67 4.01701 4.869 3.38801 5.379 2.87901C5.889 2.36901 6.517 2.17001 7.172 2.08201C7.784 2.00001 8.548 2.00001 9.434 2.00001C10.617 2.00001 11.799 2.00201 12.982 2.00001Z"
                      fill="currentColor"
                      fill-opacity=""
                    />
                  </svg>
                  <span className="font-medium text-lg ml-2">Doubts</span>
                </a>
              </div>
            </div>
            <div className="ml-4">
            <div className="mt-4 md:mt-0 -ml-10 pt-2 pb-2">
              <a href="">
              <img
                src="src\assets\stats\Group 1410097013.png"
                alt="" width="280px" height="230px"
              />
              </a>
            </div>
              <div className="mt-8 mb-8">
                <a
                  href=""
                  className="flex flex-row items-center text-gray-200 hover:text-white transition duration-200 ease-in-out"
                >
                  <img src="src\assets\course-images\Mask group.png" alt="" />
                  <span className="font-medium text-lg ml-2">Settings</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* LMS sidebar End */}

        {/* LMS Dashboard Start */}
        <div className="right-side w-full lg:w-3/4 xl:w-4/5 mr-4 lg:mr-8 ml-4 mt-10 mb-8">
          <div className="welcome-sect w- bg-red-400">
            <div className="flex flex-col justify-between md:flex md:flex-row md:justify-between">
              <div className="pt-0 md:pt-10 pl-4 pr-4 md:pl-10 pb-0 md:pb-10 md:pr-10 text-center md:text-left">
                <p className="welcome-text hidden md:inline-block">
                  October 29, 2023
                </p>
                <h1 className="welcome-header text-white text-2xl md:text-3xl lg:text-2xl xl:text-3xl mt-10">
                  Welcome back, John!
                </h1>
                <p className="welcome-text text-sm">
                  Always stay updated in your Learners portal
                </p>
              </div>
              <div className="pr-0 mx-auto md:mx-0 lg:pr-10">
                <img
                  src="src\assets\course-images\Saly-10.png"
                  alt=""
                  width="289px"
                  height="289px"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex md:flex-row mt-4">
            <div className="continue-sect w-full md:w-1/2 pl-0 md:pl-10 md:pr-10 xl:pl-2 xl:pr-2 pt-4 pb-4">
              <h1 className="text-xl font-medium mb-2 xl:pl-5 text-center xl:text-left">
                Continue Watching
              </h1>
              <div className="m-2 md:mt-2 lg:mt-4 flex flex-row justify-center xl:flex xl:flex-row xl:justify-between">
                <img
                  src="src\assets\course-images\Rectangle 39834.png"
                  alt=""
                  width="285px"
                  height="158px"
                  className=""
                />
                <img
                  src="src\assets\course-images\Rectangle 39835.png"
                  alt=""
                  width="174px"
                  height="158px"
                  className="hidden xl:block"
                />
              </div>
            </div>
            <div className="h-40 w-full md:w-1/2 mb-4 md:mb-0">
            <div className="pro-cont pl-2 md:pl-8 lg:pl-10 pt-4 pb-4">
              <h1 className="text-xl mb-2">Today's Progress</h1>
              <div className="progress-bar mt-10 md:mt-20"></div>
              <div className="progress-bar-inner mt-10 md:mt-20 shadow-2xl pl-4 pt-2 md:pt-4">
                <h1 className="font-normal text-sm md:text-normal">
                  Project Management 2
                </h1>
                <div className="mt-5 md:mt-8 pb-2 lg:mt-8 flex flex-row items-center">
                  <p className="font-semibold mr-1">
                    75<small>%</small>
                  </p>
                  <svg
                    width="201"
                    height="18"
                    viewBox="0 0 201 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="201"
                      height="17.4064"
                      rx="8.70321"
                      fill="#4E47BB"
                      fill-opacity="0.39"
                    />
                  </svg>

                  <p className="play-btn-text text-xs md:text-normal">
                    In progress
                  </p>
                </div>
              </div>
              <a href="">
                <div className="progress-bar-play mt-10 md:mt-20 flex items-center shadow-2xl">
                  <img
                    src="src\assets\course-images\Vector.png"
                    alt=""
                    className="mx-auto"
                  />
                </div>
              </a>
            </div>
            </div>
          </div>
          {/* desktop start */}
          <section className="hidden lg:block">
            <div className="flex flex-col md:flex md:flex-row mt-4">
              <div className="stat-sect w-1/3 bg-white mr-2 pl-4 xl:pl-8 pr-4 pt-4">
                <div className=" flex flex-row justify-between">
                  <div>
                    <h1 className="text-xl">Statistics</h1>
                  </div>
                  <div>
                    <select name="" id="" className="stat-month">
                      <option value="">2018</option>
                      <option value="">2019</option>
                      <option value="">2020</option>
                      <option value="">2021</option>
                      <option value="">2022</option>
                      <option value="">2023</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row items-center mt-10">
                  <div className="flex flex-col">
                    <span className="text-sm mt-2">800</span>
                    <span className="text-sm mt-2">600</span>
                    <span className="text-sm mt-2">400</span>
                    <span className="text-sm mt-2">200</span>
                    <span className="text-sm mt-2">0</span>
                  </div>
                  <div className="flex flex-row items-end ml-1 xl:ml-2 mt-10">
                    <div className="hidden xl:block xl:mr-4 lg:mr-2 text-center flex flex-col items-center">
                      <svg
                        width="24"
                        height="33"
                        viewBox="0 0 24 33"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V33H0V4Z"
                          fill="#EFF2FF"
                        />
                      </svg>
                      <span className="mt-2 text-sm">2017</span>
                    </div>
                    <div className="xl:mr-4 lg:mr-2 text-center flex flex-col items-center">
                      <svg
                        width="24"
                        height="96"
                        viewBox="0 0 24 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V96H0V4Z"
                          fill="#EFF2FF"
                        />
                      </svg>
                      <span className="mt-2 text-sm">2018</span>
                    </div>
                    <div className="xl:mr-4 lg:mr-2 text text-center flex flex-col items-center">
                      <svg
                        width="24"
                        height="65"
                        viewBox="0 0 24 65"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V65H0V4Z"
                          fill="#EFF2FF"
                        />
                      </svg>
                      <span className="mt-2 text-sm">2019</span>
                    </div>
                    <div className="xl:mr-4 lg:mr-2 text text-center flex flex-col items-center">
                      <svg
                        width="24"
                        height="99"
                        viewBox="0 0 24 99"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V99H0V4Z"
                          fill="#925FE2"
                        />
                      </svg>
                      <span className="mt-2 text-sm">2020</span>
                    </div>
                    <div className="xl:mr-4 lg:mr-2 text text-center flex flex-col items-center">
                      <svg
                        width="24"
                        height="120"
                        viewBox="0 0 24 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V120H0V4Z"
                          fill="#EFF2FF"
                        />
                      </svg>
                      <span className="mt-2 text-sm">2021</span>
                    </div>
                    <div className="xl:mr-4 lg:mr-2 text text-center flex flex-col items-center">
                      <svg
                        width="24"
                        height="96"
                        viewBox="0 0 24 96"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V96H0V4Z"
                          fill="#EFF2FF"
                        />
                      </svg>
                      <span className="mt-2 text-sm">2022</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="act-sect w-1/5 flex flex-col items-center bg-white mr-2 pt-2 pb-2">
                <h1 className="text-center text-xl pl-1 pr-1">Course Activities</h1>
                <div className="mx-auto my-auto">
                  <svg
                    width="166"
                    height="166"
                    viewBox="0 0 166 166"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M67.47 25.0442C99.478 16.4677 132.378 35.4626 140.955 67.4706C149.531 99.4785 130.536 132.379 98.5283 140.955C66.5204 149.532 33.6202 130.537 25.0436 98.5289C16.4671 66.5209 35.4621 33.6207 67.47 25.0442ZM97.0397 135.4C125.979 127.645 143.154 97.8989 135.399 68.9592C127.645 40.0195 97.8984 22.8454 68.9587 30.5997C40.0189 38.3541 22.8448 68.1005 30.5992 97.0402C38.3536 125.98 68.1 143.154 97.0397 135.4Z"
                      fill="#EFF2FF"
                    />
                    <path
                      d="M68.9751 30.661C67.1433 23.8247 71.2178 16.6649 78.2778 16.1662C87.517 15.5136 96.8394 16.7806 105.644 19.9424C118.492 24.5563 129.624 32.9849 137.55 44.0998C145.476 55.2148 149.818 68.4857 149.994 82.136C150.17 95.7864 146.172 109.165 138.535 120.48C130.898 131.796 119.987 140.509 107.262 145.452C94.5369 150.396 80.6055 151.334 67.3324 148.142C54.0594 144.95 42.0782 137.78 32.9927 127.591C26.7666 120.608 22.1039 112.437 19.2526 103.625C17.0739 96.8907 22.1894 90.4335 29.2146 89.5747C36.2398 88.7159 42.4602 93.8697 45.4197 100.299C47.1245 104.002 49.3772 107.455 52.122 110.533C57.732 116.824 65.13 121.252 73.3256 123.223C81.5212 125.194 90.1233 124.614 97.9805 121.562C105.838 118.509 112.575 113.13 117.29 106.143C122.006 99.1557 124.474 90.895 124.366 82.4664C124.257 74.0378 121.576 65.8436 116.682 58.9805C111.788 52.1174 104.915 46.9131 96.9814 44.0642C93.0999 42.6703 89.0554 41.8728 84.983 41.6773C77.9136 41.3379 70.8069 37.4974 68.9751 30.661Z"
                      fill="#925FE2"
                    />
                  </svg>
                  <h1 className="text-center">
                    75<small>%</small>
                  </h1>
                </div>
                <div className="flex flex-row">
                  <div className="flex flex-row items-center md:pl-1 md:pr-1 xl:pl-2 xl:pr-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#925FE2" />
                    </svg>
                    <span className="text-xs ml-1 font-medium">Process</span>
                  </div>
                  <div className="flex flex-row items-center md:pl-1 md:pr-1 xl:pl-2 xl:pr-2">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="6" cy="6" r="6" fill="#E8F3FF" />
                    </svg>
                    <span className="text-xs ml-1 font-medium">In Process</span>
                  </div>
                </div>
              </div>
              <div className="ment-sect flex flex-col justify-between w-1/2 bg-white pt-2 pb-2 pl-8 pr-8">
                <div className="flex flex-row items-center justify-between">
                  <div>
                    <h1 className="text-xl">Mentor Chart</h1>
                  </div>
                  <div className="ment-sup flex flex-row items-center pl-4">
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.4853 14.5872C14.5789 14.5872 16.1261 14.5872 17.0868 13.6257C18.0483 12.6651 18.0483 11.1178 18.0483 8.02419C18.0483 4.93056 18.0483 3.38333 17.0868 2.42267C16.1261 1.46119 14.5789 1.46119 11.4853 1.46119H8.20375C5.11011 1.46119 3.56289 1.46119 2.60223 2.42267C1.64075 3.38333 1.64075 4.93056 1.64075 8.02419C1.64075 11.1178 1.64075 12.6651 2.60223 13.6257C3.13793 14.1622 3.85576 14.3993 4.92225 14.5035"
                        stroke="white"
                        stroke-width="1.64075"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M11.4853 14.5872C10.4713 14.5872 9.35394 14.9974 8.33422 15.5265C6.69511 16.3773 5.87555 16.803 5.47193 16.5315C5.0683 16.2608 5.1446 15.4199 5.29801 13.7389L5.33246 13.3566"
                        stroke="white"
                        stroke-width="1.64075"
                        stroke-linecap="round"
                      />
                    </svg>
                    <span className="text-white pl-1">Support</span>
                  </div>
                </div>
                <div className="mx-auto my-auto">
                  <div className="ment-msg">
                    <svg
                      width="239"
                      height="74"
                      viewBox="0 0 239 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_7_1111)">
                        <rect
                          x="9"
                          y="9"
                          width="221"
                          height="55.685"
                          rx="8.70079"
                          fill="#F4F4F4"
                        />
                      </g>
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <circle
                        cx="36.4075"
                        cy="36.4075"
                        r="15.6614"
                        stroke="#925FE2"
                        stroke-width="2.61024"
                      />
                      <circle
                        cx="36.8425"
                        cy="36.8425"
                        r="4.35039"
                        fill="#925FE2"
                      />
                      <defs>
                        <filter
                          id="filter0_d_7_1111"
                          x="0.125197"
                          y="0.125197"
                          width="238.75"
                          height="73.4346"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="0.174016"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_7_1111"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="4.35039" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_7_1111"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_7_1111"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="ment-msg1">
                    <svg
                      width="239"
                      height="74"
                      viewBox="0 0 239 74"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_7_1111)">
                        <rect
                          x="9"
                          y="9"
                          width="221"
                          height="55.685"
                          rx="8.70079"
                          fill="#F4F4F4"
                        />
                      </g>
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="64.6851"
                        y="19.4409"
                        width="148.783"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <rect
                        x="63.8149"
                        y="37.7126"
                        width="57.4252"
                        height="13.0512"
                        rx="6.52559"
                        fill="#DADADA"
                      />
                      <circle
                        cx="36.4075"
                        cy="36.4075"
                        r="15.6614"
                        stroke="#925FE2"
                        stroke-width="2.61024"
                      />
                      <circle
                        cx="36.8425"
                        cy="36.8425"
                        r="4.35039"
                        fill="#925FE2"
                      />
                      <defs>
                        <filter
                          id="filter0_d_7_1111"
                          x="0.125197"
                          y="0.125197"
                          width="238.75"
                          height="73.4346"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feMorphology
                            radius="0.174016"
                            operator="dilate"
                            in="SourceAlpha"
                            result="effect1_dropShadow_7_1111"
                          />
                          <feOffset />
                          <feGaussianBlur stdDeviation="4.35039" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_7_1111"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_7_1111"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Add a Comment"
                    className="ment-input pl-10 w-full border border-gray-300 focus:border-violet-900 focus:outline-none focus:ring focus:ring-violet-100"
                  />
                </div>
              </div>
            </div>
          </section>
          {/* desktop end */}

          {/* mobile start*/}
          <section className="flex flex-row lg:hidden mt-4">
            <div className="stat-sect w-4/6 bg-white mr-4 pl-2 md:pl-8 pt-2 pb-2">
              <div className=" flex flex-row justify-between">
                <div>
                  <h1 className="text-xl">Statistics</h1>
                </div>
                <div className="pr-5">
                  <select name="" id="" className="stat-month">
                    <option value="">2017</option>
                    <option value="">2018</option>
                    <option value="">2019</option>
                    <option value="">2020</option>
                    <option value="">2021</option>
                    <option value="">2022</option>
                    <option value="">2023</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center mt-4 md:mt-4">
                <div className="flex flex-col">
                  <span className="mt-1 md:mt-2 text-xs md:text-lg">800</span>
                  <span className="mt-1 md:mt-2 text-xs md:text-lg">600</span>
                  <span className="mt-1 md:mt-2 text-xs md:text-lg">400</span>
                  <span className="mt-1 md:mt-2 text-xs md:text-lg">200</span>
                  <span className="mt-1 md:mt-2 text-xs md:text-lg">0</span>
                </div>
                <div className="flex flex-row items-end ml-2 md:ml-4 md:mt-10">
                  <div className="mr-1 md:mr-4 text-center flex flex-col items-center">
                    <svg
                      width="24"
                      height="33"
                      viewBox="0 0 24 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V33H0V4Z"
                        fill="#EFF2FF"
                      />
                    </svg>
                    <span className="mt-1 md:mt-2 text-xs md:text-lg">
                      2017
                    </span>
                  </div>
                  <div className="mr-1 md:mr-4 text-center flex flex-col items-center">
                    <svg
                      width="24"
                      height="96"
                      viewBox="0 0 24 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V96H0V4Z"
                        fill="#EFF2FF"
                      />
                    </svg>
                    <span className="mt-1 md:mt-2 text-xs md:text-lg">
                      2018
                    </span>
                  </div>
                  <div className="mr-1 md:mr-4 text-center flex flex-col items-center">
                    <svg
                      width="24"
                      height="65"
                      viewBox="0 0 24 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V65H0V4Z"
                        fill="#EFF2FF"
                      />
                    </svg>
                    <span className="mt-1 md:mt-2 text-xs md:text-lg">
                      2019
                    </span>
                  </div>
                  <div className="mr-1 md:mr-4 text-center flex flex-col items-center">
                    <svg
                      width="24"
                      height="99"
                      viewBox="0 0 24 99"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V99H0V4Z"
                        fill="#925FE2"
                      />
                    </svg>
                    <span className="mt-1 md:mt-2 text-xs md:text-lg">
                      2020
                    </span>
                  </div>
                  <div className="mr-1 md:mr-4 text-center flex flex-col items-center">
                    <svg
                      width="24"
                      height="120"
                      viewBox="0 0 24 120"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V120H0V4Z"
                        fill="#EFF2FF"
                      />
                    </svg>
                    <span className="mt-1 md:mt-2 text-xs md:text-lg">
                      2021
                    </span>
                  </div>
                  <div className="mr-1 md:mr-4 text-center flex flex-col items-center">
                    <svg
                      width="24"
                      height="96"
                      viewBox="0 0 24 96"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V96H0V4Z"
                        fill="#EFF2FF"
                      />
                    </svg>
                    <span className="mt-1 md:mt-2 text-xs md:text-lg">
                      2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="act-sect w-2/6 flex flex-col items-center bg-white pt-2 pb-2">
              <h1 className="text-center text-sm md:text-lg">
                Course Activities
              </h1>
              <div className="mx-auto my-auto md:hidden">
                <svg
                  width="78"
                  height="79"
                  viewBox="0 0 166 166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.47 25.0442C99.478 16.4677 132.378 35.4626 140.955 67.4706C149.531 99.4785 130.536 132.379 98.5283 140.955C66.5204 149.532 33.6202 130.537 25.0436 98.5289C16.4671 66.5209 35.4621 33.6207 67.47 25.0442ZM97.0397 135.4C125.979 127.645 143.154 97.8989 135.399 68.9592C127.645 40.0195 97.8984 22.8454 68.9587 30.5997C40.0189 38.3541 22.8448 68.1005 30.5992 97.0402C38.3536 125.98 68.1 143.154 97.0397 135.4Z"
                    fill="#EFF2FF"
                  />
                  <path
                    d="M68.9751 30.661C67.1433 23.8247 71.2178 16.6649 78.2778 16.1662C87.517 15.5136 96.8394 16.7806 105.644 19.9424C118.492 24.5563 129.624 32.9849 137.55 44.0998C145.476 55.2148 149.818 68.4857 149.994 82.136C150.17 95.7864 146.172 109.165 138.535 120.48C130.898 131.796 119.987 140.509 107.262 145.452C94.5369 150.396 80.6055 151.334 67.3324 148.142C54.0594 144.95 42.0782 137.78 32.9927 127.591C26.7666 120.608 22.1039 112.437 19.2526 103.625C17.0739 96.8907 22.1894 90.4335 29.2146 89.5747C36.2398 88.7159 42.4602 93.8697 45.4197 100.299C47.1245 104.002 49.3772 107.455 52.122 110.533C57.732 116.824 65.13 121.252 73.3256 123.223C81.5212 125.194 90.1233 124.614 97.9805 121.562C105.838 118.509 112.575 113.13 117.29 106.143C122.006 99.1557 124.474 90.895 124.366 82.4664C124.257 74.0378 121.576 65.8436 116.682 58.9805C111.788 52.1174 104.915 46.9131 96.9814 44.0642C93.0999 42.6703 89.0554 41.8728 84.983 41.6773C77.9136 41.3379 70.8069 37.4974 68.9751 30.661Z"
                    fill="#925FE2"
                  />
                </svg>
              </div>
              <div className="mx-auto my-auto hidden md:block">
                <svg
                  width="115"
                  height="132"
                  viewBox="0 0 166 166"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M67.47 25.0442C99.478 16.4677 132.378 35.4626 140.955 67.4706C149.531 99.4785 130.536 132.379 98.5283 140.955C66.5204 149.532 33.6202 130.537 25.0436 98.5289C16.4671 66.5209 35.4621 33.6207 67.47 25.0442ZM97.0397 135.4C125.979 127.645 143.154 97.8989 135.399 68.9592C127.645 40.0195 97.8984 22.8454 68.9587 30.5997C40.0189 38.3541 22.8448 68.1005 30.5992 97.0402C38.3536 125.98 68.1 143.154 97.0397 135.4Z"
                    fill="#EFF2FF"
                  />
                  <path
                    d="M68.9751 30.661C67.1433 23.8247 71.2178 16.6649 78.2778 16.1662C87.517 15.5136 96.8394 16.7806 105.644 19.9424C118.492 24.5563 129.624 32.9849 137.55 44.0998C145.476 55.2148 149.818 68.4857 149.994 82.136C150.17 95.7864 146.172 109.165 138.535 120.48C130.898 131.796 119.987 140.509 107.262 145.452C94.5369 150.396 80.6055 151.334 67.3324 148.142C54.0594 144.95 42.0782 137.78 32.9927 127.591C26.7666 120.608 22.1039 112.437 19.2526 103.625C17.0739 96.8907 22.1894 90.4335 29.2146 89.5747C36.2398 88.7159 42.4602 93.8697 45.4197 100.299C47.1245 104.002 49.3772 107.455 52.122 110.533C57.732 116.824 65.13 121.252 73.3256 123.223C81.5212 125.194 90.1233 124.614 97.9805 121.562C105.838 118.509 112.575 113.13 117.29 106.143C122.006 99.1557 124.474 90.895 124.366 82.4664C124.257 74.0378 121.576 65.8436 116.682 58.9805C111.788 52.1174 104.915 46.9131 96.9814 44.0642C93.0999 42.6703 89.0554 41.8728 84.983 41.6773C77.9136 41.3379 70.8069 37.4974 68.9751 30.661Z"
                    fill="#925FE2"
                  />
                </svg>
                <h1 className="text-center">
                  75<small>%</small>
                </h1>
              </div>
              <div className="flex flex-col md:flex md:flex-row justify-center">
                <div className="flex flex-row items-center md:pl-2 md:pr-2 xl:pl-4 xl:pr-4">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#925FE2" />
                  </svg>
                  <span className="text-xs ml-1 font-medium">Process</span>
                </div>
                <div className="flex flex-row items-center md:pl-2 md:pr-2 xl:pl-4 xl:pr-4">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="6" cy="6" r="6" fill="#E8F3FF" />
                  </svg>
                  <span className="text-xs ml-1 font-medium">In Process</span>
                </div>
              </div>
            </div>
          </section>
          {/* mobile end */}

          {/* mobile start */}
          <section className="flex flex-col md:flex md:flex-row lg:hidden mt-4 mb-4">
            <div className="ment-sect flex flex-col justify-between mr-4 w-full md:w-4/6 bg-white pt-2 pb-2 pl-4 pr-4">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h1 className="pl-8">Mentor Chart</h1>
                </div>
                <div className="ment-sup flex flex-row items-center pl-4">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4853 14.5872C14.5789 14.5872 16.1261 14.5872 17.0868 13.6257C18.0483 12.6651 18.0483 11.1178 18.0483 8.02419C18.0483 4.93056 18.0483 3.38333 17.0868 2.42267C16.1261 1.46119 14.5789 1.46119 11.4853 1.46119H8.20375C5.11011 1.46119 3.56289 1.46119 2.60223 2.42267C1.64075 3.38333 1.64075 4.93056 1.64075 8.02419C1.64075 11.1178 1.64075 12.6651 2.60223 13.6257C3.13793 14.1622 3.85576 14.3993 4.92225 14.5035"
                      stroke="white"
                      stroke-width="1.64075"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.4853 14.5872C10.4713 14.5872 9.35394 14.9974 8.33422 15.5265C6.69511 16.3773 5.87555 16.803 5.47193 16.5315C5.0683 16.2608 5.1446 15.4199 5.29801 13.7389L5.33246 13.3566"
                      stroke="white"
                      stroke-width="1.64075"
                      stroke-linecap="round"
                    />
                  </svg>
                  <span className="text-white pl-1">Support</span>
                </div>
                <div>
                  <a href="" className="ment-support"></a>
                </div>
              </div>
              <div className="mx-auto my-auto">
                <div className="ment-msg">
                  <svg
                    width="239"
                    height="74"
                    viewBox="0 0 239 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_7_1111)">
                      <rect
                        x="9"
                        y="9"
                        width="221"
                        height="55.685"
                        rx="8.70079"
                        fill="#F4F4F4"
                      />
                    </g>
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <circle
                      cx="36.4075"
                      cy="36.4075"
                      r="15.6614"
                      stroke="#925FE2"
                      stroke-width="2.61024"
                    />
                    <circle
                      cx="36.8425"
                      cy="36.8425"
                      r="4.35039"
                      fill="#925FE2"
                    />
                    <defs>
                      <filter
                        id="filter0_d_7_1111"
                        x="0.125197"
                        y="0.125197"
                        width="238.75"
                        height="73.4346"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="0.174016"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_7_1111"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.35039" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_7_1111"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_7_1111"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div className="ment-msg1">
                  <svg
                    width="239"
                    height="74"
                    viewBox="0 0 239 74"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_7_1111)">
                      <rect
                        x="9"
                        y="9"
                        width="221"
                        height="55.685"
                        rx="8.70079"
                        fill="#F4F4F4"
                      />
                    </g>
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="64.6851"
                      y="19.4409"
                      width="148.783"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <rect
                      x="63.8149"
                      y="37.7126"
                      width="57.4252"
                      height="13.0512"
                      rx="6.52559"
                      fill="#DADADA"
                    />
                    <circle
                      cx="36.4075"
                      cy="36.4075"
                      r="15.6614"
                      stroke="#925FE2"
                      stroke-width="2.61024"
                    />
                    <circle
                      cx="36.8425"
                      cy="36.8425"
                      r="4.35039"
                      fill="#925FE2"
                    />
                    <defs>
                      <filter
                        id="filter0_d_7_1111"
                        x="0.125197"
                        y="0.125197"
                        width="238.75"
                        height="73.4346"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feMorphology
                          radius="0.174016"
                          operator="dilate"
                          in="SourceAlpha"
                          result="effect1_dropShadow_7_1111"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="4.35039" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_7_1111"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_7_1111"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Add a Comment"
                  className="ment-input pl-10 w-full border border-gray-300 focus:border-violet-900 focus:outline-none focus:ring focus:ring-violet-100"
                />
              </div>
            </div>
            <div className="invite-sect mt-4 md:mt-0 w-full md:w-2/6 flex flex-col items-center pt-2 pb-2">
              <a href="">
              <img
                src="src\assets\stats\Group 1410097013.png"
                alt=""
              />
              </a>
            </div>
          </section>
          {/* mobile end */}
        </div>
        {/* LMS Dashboard End */}

      </div>
      {/* LMS End */}
    </>
  );
}
