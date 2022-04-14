import React from "react";
import about from "../../images/about.png";
import {TiTick} from "react-icons/ti"
// import aboutBg from "../../images/about-bg.svg";

const AboutComp = () => {
  return (
    <div className="about">
      <div className="about-bg-img"></div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about-img">
              <img src={about} alt="" />
            </div>
          </div>
          <div className="col-6">
            <div className="about-content">
              <span>New problems need Creative and unusual Solutions</span>
              <h2>
                Apply AI, Deep Learning and Data Sciece to solve Business
                Problems
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit eum illum tempora? Ducimus eum culpa voluptates dolorem
                dolorum et sit nisi, mollitia animi porro fuga sequi, molestias
                repellat excepturi nobis eum culpa voluptates dolorem dolorum
                et.
              </p>
            </div>
            <ul className="about-content-list">
              <li className="about-content-list-item">
                <div className="about-icon">
                  <TiTick />
                </div>
                <div className="content-list-text">
                  <span>Powerfull Mobile And Online App</span>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit alias officia aperiam.
                  </p>
                </div>
              </li>
              <li className="about-content-list-item">
                <div className="about-icon">
                  <TiTick />
                </div>
                <div className="content-list-text">
                  <span>Powerfull Mobile And Online App</span>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit alias officia aperiam.
                  </p>
                </div>
              </li>
              <li className="about-content-list-item">
                <div className="about-icon">
                  <TiTick />
                </div>
                <div className="content-list-text">
                  <span>Powerfull Mobile And Online App</span>
                  <p>
                    Lorem ipsum dolor sit amet, conse ctetur dolor adipisicing
                    elit alias officia aperiam.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;
