// import React, { useState } from "react";
import React, { useState, useEffect } from "react";

const UpdateModal = ({ updateShoes1 }) => {
  const [updateFields, setUpdateFields] = useState({
    brand: "",
    model: "",
    price: "",
    url: "",
  });

  const onInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setUpdateFields((oldState) => ({ ...oldState, [name]: value }));
  };

  useEffect(() => {
    console.log("fromUseEffect:", updateFields);
  }, [updateFields]);

  return (
    <div>
      <input
        placeholder="Brand"
        onChange={onInputChange}
        type="text"
        name="brand"
        value={updateFields.brand}
      />
      <br />

      <input
        placeholder=" Model"
        onChange={onInputChange}
        type="text"
        name="model"
        value={updateFields.model}
      />
      <br />
      <input
        placeholder="Type"
        onChange={onInputChange}
        type="text"
        name="price"
        value={updateFields.price}
      />
      <br />

      <input
        placeholder="Url"
        onChange={onInputChange}
        type="text"
        name="url"
        value={updateFields.url}
      />
      <br />
      <button onClick={() => updateShoes1(updateFields)}>Submit!</button>
    </div>
  );
};

export default UpdateModal;
