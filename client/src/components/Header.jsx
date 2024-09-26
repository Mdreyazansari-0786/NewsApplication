import React from "react";
import moment from "moment";
import { FaFacebookF } from "react-icons/fa";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import bg_header from "../assets/Images/header-bg.jpg";
import logo from "../assets/Images/logo.png";
import adver_image from "../assets/Images/sample-add.jpg";

import Header_Category from "./Header_Category";
import { Link } from "react-router-dom";
import BlogHeader from "./header/Header";

const Header = () => {
  return (
    <div>
      <BlogHeader />
      <div
        style={{
          backgroundImage: `url(${bg_header})`,
          backgroundSize: "cover",
        }}
      >
        <div className="px-8 py-14">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-4/12">
              <div className="flex flex-col items-center justify-center md:items-start">
                <img className="w-[200px] h-[45px]" alt="logo" src={logo} />
                <h2 className="text-[#cccccc]">
                  NEWS PORTAL MERN STACK NextJs
                </h2>
              </div>
            </div>
            <div className="hidden w-full md:w-8/12 md:block">
              <div className="flex justify-end w-full">
                <img src={adver_image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header_Category />
    </div>
  );
};

export default Header;
