import React, { useState, useEffect } from "react";

const ShowImage = (props) => {
  const {
    record: {
      id: recordId,
      params,
      params: { title: recordTitle },
    },
    property: { name },
  } = props;
  const [image, setImage] = useState("");

  const getImage = () => {
    if (name === "beforeImage") {
      setImage(params.beforeImage);
    } else {
      setImage(params.afterImage);
    }
  };
  useEffect(() => {
    getImage();
  });

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p>{name === "beforeImage" ? "Before Image" : "After Image"}</p>
      <img
        src={image}
        alt={recordTitle}
        height="50px"
        width="50px"
        style={{
          padding: "4%",
          marginLeft: "4%",
        }}
      />
    </div>
  );
};

export default ShowImage;
