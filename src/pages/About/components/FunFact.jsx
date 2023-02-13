import React from 'react'

function FunFact(props) {
  return (
    <div className="col mt-30">
    <div className="tm-funfact">
      <span className="tm-funfact-icon">
        <i className={props.icon}></i>
      </span>
      <div className="tm-funfact-content">
        <span className="tm-funfact-contentbg"></span>
        <span className="odometer" data-count-to="190">{props.count}</span>
        <h5>{props.heading}</h5>
      </div>
    </div>
  </div>
  )
}

export default FunFact