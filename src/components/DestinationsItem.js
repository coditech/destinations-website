import React from "react";

export default function DestinationsItem({
  title,
  image,
  description,
  price,
  continent_id,
}) {
  return (
    <div className="tm-recommended-place">
      <img
        src={`http://localhost:8000/storage/images/destinations/${continent_id}/${image}`}
        alt="Image"
        className="img-fluid tm-recommended-img"
      />
      <div className="tm-recommended-description-box">
        <h3 className="tm-recommended-title">{title}</h3>
        <p className="tm-text-gray">{description}</p>
      </div>
      <a href="#" className="tm-recommended-price-box">
        <p className="tm-recommended-price">${price}</p>
      </a>
    </div>
  );
}
