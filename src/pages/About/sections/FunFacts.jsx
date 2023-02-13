import React from "react";
import FunFact from "../components/FunFact";

function FunFacts() {

    const funfacts = [{
        id:1,
        icon : "flaticon-spa",
        count : 5320,
        heading : "Therapy Experts"
    },
    {
        id:2,
        icon : "flaticon-happiness",
        count : 3231,
        heading : "Happy Patients"
    },
    {
        id:3,
        icon : "flaticon-cancer",
        count : 2435,
        heading : "Treatment"
    },
    {
        id:4,
        icon : "flaticon-trophy",
        count : 190,
        heading : "Awards"
    }]

  return (
    <div className="funfact-area tm-padding-section-top">
      <div className="container">
        <div className="row mt-30-reverse">
            {funfacts.map(funfact=><FunFact key={funfact.id} heading={funfact.heading} count={funfact.count} icon={funfact.icon}/>)}
        </div>
      </div>
    </div>
  );
}

export default FunFacts;
