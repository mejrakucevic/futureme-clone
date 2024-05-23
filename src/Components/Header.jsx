import React, { useState } from "react";
import "../input.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faUser, faStar } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <header className="flex justify-between items-center w-full h-16 violet px-10 py-10 text-white reddit-mono font-semibold">
        <div className="flex space-x-10 items-center">
          <a href="#">
            <h3 className="font-bold text-2xl">FutureEcho</h3>
          </a>
          <button className="bg-white p-2 text-violet-800 rounded-md  hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon icon={faPencil} className=" px-2 text-md" />
            Write a letter to the future
          </button>
          <a className="relative underline-hover " href="#">
            <FontAwesomeIcon icon={faStar} className="mr-2" />
            Become a Member
          </a>
        </div>
        <nav className="space-x-10">
          <a className="relative underline-hover " href="#">
            Blog
          </a>
          <a className="relative underline-hover " href="">
            My Account
            <FontAwesomeIcon icon={faUser} className="mx-3" />
          </a>
        </nav>
      </header>
    </div>
  );
}

export default Header;
