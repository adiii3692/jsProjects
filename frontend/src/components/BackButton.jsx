import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="bg-sky-800 text-wwhite px-4 py-1 rounded-lg ww-fit"
      >
        <BsArrowLeft className="text-2xl"></BsArrowLeft>
      </Link>
    </div>
  );
};

export default BackButton;
