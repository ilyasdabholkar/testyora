import React from "react";
import {Link} from "react-router-dom";

function Breadcrumb(props) {
  return (
    <div
      className="tm-breadcrumb-area tm-padding-section"
      style={{ backgroundImage: "url(" + props.data.backgroundImage + ")" }}
      data-bgimage={props.data.backgroundImage}
      data-black-overlay="4"
    >
      <div className="container">
        <div className="tm-breadcrumb text-center">
          <h2>{props.data.heading}</h2>
          <ul>
            {props.data.links.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={`/${item.link}`}>{item.text}</Link>
                </li>
              );
            })}

            <li>{props.data.activeLink}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Breadcrumb;
