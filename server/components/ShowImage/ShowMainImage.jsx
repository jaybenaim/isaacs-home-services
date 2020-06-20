import React from "react";
const ShowImage = (props) => {
  const {
    record: {
      id: recordId,
      params: { ["details.mainImage"]: recordImage, title: recordTitle },
    },
  } = props;
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <p>Image</p>
      <img
        src={recordImage}
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
