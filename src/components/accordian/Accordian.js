import React from "react";
import data from "../../assets/accordian-data";
import AccordianContent from "./Accordian-Content";

import "./Accordian.scss";

function Accordion(props) {
  return (
    <div>
      <h2 className="section-title">FAQ</h2>

      {data.map((item) => (
        <AccordianContent
          key={item.title}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
}

export default Accordion;
