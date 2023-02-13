import React from "react";

function Accordian(props) {
  return (
    <div className="card">
      <div className="card-header" id={`tm-accordion1-heading${props.id}`}>
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            data-toggle="collapse"
            data-target={`#tm-accordion1-collapse${props.id}`}
            aria-expanded="false"
            aria-controls={`tm-accordion1-collapse${props.id}`}
          >
            {props.question}
          </button>
        </h5>
      </div>
      <div
        id={`tm-accordion1-collapse${props.id}`}
        className="collapse show"
        aria-labelledby={`tm-accordion1-heading${props.id}`}
        data-parent={`#tm-accordion${props.parent}`}
      >
        <div className="card-body">
          <p>
           {props.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Accordian;
