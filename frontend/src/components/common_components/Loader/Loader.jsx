import React from "react";
import "./loader.css";
import {useSelector} from "react-redux"
import goku from "../../../assets/goku.png";
import ball from "../../../assets/ball.gif";

const Loader = () => {
const {modez} = useSelector(state=>state.Colors)


  return (
    <div id="loaderContaienr" style={{backgroundColor:modez?"black":""}}>
      <img className="ball" src={ball} alt="energy ball" />

      <img className="goku" src={goku} alt="goku" />
    </div>
  );
};

export default Loader;
