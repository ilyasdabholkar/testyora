import React from "react";

function DetailCards(props) {
  return (
    <div className="col-lg-4 col-md-6 col-12 mt-30">
      <div className="tm-contactblock text-center">
        <span className="tm-contactblock-icon">
          <i className={props.data.icon}></i>
        </span>
        <span className="tm-contactblock-backicon">
          <i className={props.data.backicon}></i>
        </span>
        <h5>Our location</h5>

        {props.data.list !== undefined ? (
          <ul>
            {props.data.list.map((item) => {
              return (
                <li key={item.key}>
                  {item.key} <span>{item.data}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <>
            <p>{props.data.paragraph}</p>
            <p>{props.data.paragraph2}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default DetailCards;
