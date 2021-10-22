import React from "react";
import DestinationsItem from "./DestinationsItem";

export default function DestinationsContainer({ destinations }) {
  return (
    <div className="tab-content clearfix">
      <div className="tab-pane fade" id="1a">
        <div className="tm-recommended-place-wrap">
          {destinations.map((destination) => (
            <DestinationsItem
              title={destination.title}
              image={destination.image}
              description={destination.description}
              price={destination.price}
              continent_id={destination.continent_id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
