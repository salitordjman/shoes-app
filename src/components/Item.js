import React from "react";
import "./Item.css";
const Item = ({
  id,
  type,
  img,
  deleteItem,
  toggleUpdateModalA,
  model,
  price,
}) => {
  return (
    <div className="shoes-container">
      <div className="shoes-img">
        <img src={img} alt={type} />
      </div>
      <div className="detail">
        <div className="shoes-type">Brand: {type}</div>
        <div className="shoes-type">Model: {model}</div>
        <div className="shoes-type">Price($): {price}</div>
      </div>
      <div className="shoes-btns">
        <button onClick={() => deleteItem(id)}>
          <span aria-label="trash" role="img">
            🗑️
          </span>
        </button>
        <button onClick={() => toggleUpdateModalA(id)}>
          <span aria-label="pencil" role="img">
            ✏️
          </span>
        </button>
      </div>
    </div>
  );
};
export default Item;
