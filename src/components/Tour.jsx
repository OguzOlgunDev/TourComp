import { useState } from "react";

const Tour = ({ id, image, name, price, info, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <div>
        <img src={image} alt={name} className="img" />
        <span className="tour-price">{price}$</span>
      </div>

      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : info.substring(0, 100)}{" "}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "show more"}
          </button>
        </p>
      </div>

      <button
        className="btn btn-block delete-btn"
        onClick={() => {
          removeTour(id);
        }}
      >
        Remove Tour
      </button>
    </article>
  );
};

export default Tour;
