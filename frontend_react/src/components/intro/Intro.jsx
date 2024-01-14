/* eslint-disable react/no-unescaped-entities */
import "./intro.scss";
import { IoIosArrowDown } from "react-icons/io";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { images } from "../../constants";
import AppWrapper from "../../utils/wrappers/AppWrapper";
const Intro = () => {
  const textRef = useRef();
  useEffect(() => {
    // if(window.screen.width>"762")
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="my-image">
          <img src={images.myImage} alt="my-image" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          {/* eslint-disable-next-line react/no-unescaped-entities, react/no-unescaped-entities */}
          <h2>Hi There, I'm</h2>
          <h1>Shivam Sengar</h1>
          {/* {window.screen.width > "762" ? (
            <h3>
              React <span ref={textRef}></span>
            </h3>
          ) : (
            <h3>
              React Developer
            </h3>
          )} */}
          <h3>
            React <span ref={textRef}></span>
          </h3>
        </div>
      </div>
      {/* <a href="#skills">
        <IoIosArrowDown className="arrow-down" />
      </a> */}
    </div>
  );
};

export default AppWrapper(Intro);
