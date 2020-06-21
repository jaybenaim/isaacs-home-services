import React, { useState, useEffect } from "react";

import backend from "../../../src/api/backend";

const UploadImage = (props) => {
  const {
    resource: { id: resourceId },
    record: {
      id: recordId,
      params: { image: recordImage, title: recordTitle },
    },
  } = props;
  const [imageFile, setImageFile] = useState(recordImage);

  const onChange = (e) => {
    const errs = [];
    const files = Array.from(e.target.files);

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every((type) => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }
      if (file.size > 150000) {
        errs.push(`'${file.name}' is too large, please pick a smaller file`);
      }
      formData.append(i, file);
    });
    if (errs.length) {
      return errs.forEach((err) => alert(err));
    }

    saveImageInMongo(formData, recordId)
      .then((res) => {
        console.log(res.data);

        setImageFile(res.data[0].secure_url);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const saveImageInMongo = async (image, recordId) => {
    return await backend.post(
      `/services/upload-image?recordId=${recordId}`,
      image,
      {
        "content-type": "multipart/form-data",
      }
    );
  };

  return (
    <div
      style={{ padding: "2% 0 4% 0", display: "flex", flexDirection: "row" }}
    >
      <input type="file" name="imageUpload" onChange={onChange} />
      {recordImage ? (
        <>
          <div>Current Image: </div>
          <img
            src={imageFile}
            alt={recordTitle}
            height="50px"
            width="50px"
            style={{
              border: "1px solid #000",
              padding: "4%",
              marginLeft: "4%",
            }}
          />
        </>
      ) : (
        <div>Select a file to upload</div>
      )}{" "}
    </div>
  );
};

export default UploadImage;
