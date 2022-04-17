import React, { useState } from "react";

import backend from "../../../src/api/backend";

const UploadMainImage = (props) => {
  const {
    resource: { id: resourceId },
    record: {
      id: recordId,
      params: { ["details.mainImage"]: recordImage, title: recordTitle },
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
      if (file.size > 150000000) {
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

        setImageFile(res.data.secure_url);
        window.location.href = window.location.href;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveImageInMongo = async (image, recordId) => {
    return await backend.post(
      `/services/upload-main-image?recordId=${recordId}`,
      image,
      {
        "content-type": "multipart/form-data",
      }
    );
  };

  return (
    <div
      style={{ padding: "2% 0 4% 0", display: "flex", flexDirection: "column" }}
    >
      <input type="file" name="imageUpload" onChange={onChange} />
      {/* eslint-disable-next-line multiline-ternary */}
      {recordImage ? (
        <>
          <div>Current Image: </div>
          <img
            src={imageFile}
            alt={recordTitle}
            height="150px"
            width="150px"
            style={{
              // border: "1px solid #000",
              // padding: "4%",
              margin: "1em",
            }}
          />
        </>
      ) : (
        <div>Select a file to upload</div>
      )}{" "}
    </div>
  );
};

export default UploadMainImage;
