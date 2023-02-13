import React from "react";
import Feature from "../components/Feature";

function FeatureArea(props) {
  const features = props.data;

  return (
    <div className="tm-section features-area bg-white tm-padding-section">
      <div className="container">
        <div className="row justify-content-center mt-30-reverse">
          {features.map((feature) => {
            return (
              <Feature
                heading={feature.heading}
                key={feature.id}
                content={feature.content}
                icon={feature.icon}
                backicon={feature.backicon}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureArea;
