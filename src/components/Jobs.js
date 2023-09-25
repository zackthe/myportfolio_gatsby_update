import React from "react";
import Title from "./Title";
import { FaAngleDoubleRight } from "react-icons/fa";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

const Jobs = () => {
  return (
    <>
      <div className="Alittle">
        <h2>A little about me :</h2>
        <p> Hello there, my name is Zakariae Belkasmi, I'm a self taught</p>
        <p> and gatsby to build projects. </p>
        <p> technologies like Html/css/Javascript and frameworks like react</p>
        <p>
          {" "}
          frontend web developer based in Meknes Morocco, I use frontend
        </p>{" "}
      </div>
    </>
  );
};

export default Jobs;
