import React from "react";
const ShowImage = (props) => {
  const {
    record: {
      id: recordId,
      params: { ["details.mainImage"]: recordImage, title: recordTitle },
    },
  } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p>Main Page Image</p>
      <img
        src={recordImage}
        alt={recordTitle}
        height="150px"
        width="150px"
        style={{
          marginLeft: "1em",
        }}
      />
    </div>
  );
};

export default ShowImage;
