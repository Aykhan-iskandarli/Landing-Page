import React from "react";
import Title from "../Title/Title";
import { partner } from "../../data";

const Partner = () => {
  return (
    <section className="partner">
      <div className="container">
        <div className="row">
          <Title
            topText="Our Main Partners"
            mainText="Our Powerful Partners"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo."
          />
          <ul className="partner-list">
        {
            partner.map(part =>(
                <li><img src={part.img} alt="" /></li>
            ))
        }
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Partner;
