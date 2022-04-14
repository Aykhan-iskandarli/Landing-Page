import React from "react";
import map from "../../images/map.png";

const Growth = () => {
  return (
    <section className="growth">
      <div className="container">
        <div className="growth_header">
          <span>OUR EXPECTED GROWTH</span>
          <h2>Our Global Growth</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            accumsan nisi Ut ut felis congue nisl hendrerit commodo.
          </p>
        </div>
        <div className="row justify-center">
          <div className="col-3 cards-col ">
            <div className="cards">
              <div className="card">
                <div className="card-title">
                  <h4>High Resolution</h4>
                </div>
                <div className="card-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                  <h4>High Resolution</h4>
                </div>
                <div className="card-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="map-img">
              <img src={map} alt="" />
            </div>
          </div>
          <div className="col-3 cards-col ">
            <div className="cards mt-md-2">
              <div className="card">
                <div className="card-title">
                  <h4>High Resolution</h4>
                </div>
                <div className="card-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="card-title">
                  <h4>High Resolution</h4>
                </div>
                <div className="card-desc">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Growth;
