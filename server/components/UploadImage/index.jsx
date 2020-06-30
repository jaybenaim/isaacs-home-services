import React, { useState } from "react";

import backend from "../../../src/api/backend";
import firebase from "../../../src/api/firebase";

const UploadImage = (props) => {
  const {
    resource: { id: resourceId },
    property: { name },
    record: {
      id: recordId,
      params,
      params: { title: recordTitle },
    },
  } = props;
  const previousImage =
    name === "beforeImage" ? params.beforeImage : params.afterImage;
  const [imageFile, setImageFile] = useState(previousImage);

  const onChange = (e) => {
    const errs = [];
    const files = Array.from(e.target.files);

    const formData = new FormData();
    const types = ["image/png", "image/jpeg", "image/gif"];

    files.forEach((file, i) => {
      if (types.every((type) => file.type !== type)) {
        errs.push(`'${file.type}' is not a supported format`);
      }
      if (file.size > 15000000) {
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
        firebase
          .patch(`/services/${recordId}.json`, {
            [name]: res.data.secure_url,
          })
          .then((response) => console.log("saved in firebase"))
          .catch((err) => console.log("Failed to save in firebase"));
        window.location.href = window.location.href;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const saveImageInMongo = async (image, recordId) => {
    if (name === "beforeImage") {
      return await backend.post(
        `/services/upload-image?recordId=${recordId}&name=${name}`,
        image,
        {
          "content-type": "multipart/form-data",
        }
      );
    }
    if (name === "afterImage") {
      return await backend.post(
        `/services/upload-image?recordId=${recordId}&name=${name}`,
        image,
        {
          "content-type": "multipart/form-data",
        }
      );
    }
  };
  return (
    <div
      style={{ padding: "2% 0 4% 0", display: "flex", flexDirection: "row" }}
    >
      <input type="file" name="imageUpload" onChange={onChange} />
      {previousImage ? (
        <>
          <div>Current Image: </div>
          <img
            src={!imageFile ? previousImage : imageFile}
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
