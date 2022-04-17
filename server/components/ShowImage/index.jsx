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
    } else if (name === "afterImage") {
      setImage(params.afterImage);
    } else {
      setImage(params.src);
    }
  };
  useEffect(() => {
    getImage();
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>
        {name === "beforeImage"
          ? "Before Image"
          : name === "afterImage"
          ? "After Image"
          : "Image"}
      </p>
      <img
        src={image}
        alt={recordTitle}
        height="250px"
        width="250px"
        style={{
          // padding: "4%",
          margin: "1em",
        }}
      />
    </div>
  );
};

export default ShowImage;
