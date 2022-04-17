import React, { useState } from "react";

import backend from "../../../src/api/backend";

const UploadHero = (props) => {
  const {
    resource: { id: resourceId },
    record: {
      id: recordId,
      params: { title: recordTitle, src: recordImage },
    },
  } = props;

  const [imageFile, setImageFile] = useState(recordImage);
  const [errors, setErrors] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (e) => {
    if (!recordId) {
      console.log("no record id");
      setErrors("Add the title and save first before adding an image.");
      return;
    }
    setIsLoading(true);
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
        console.log("Saved image response:", res.data);

        setImageFile(res.data.secure_url);
        window.location.href = window.location.href;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const saveImageInMongo = async (image, recordId) => {
    console.log("Saving image");
    return await backend.post(
      `/heroes/upload-image?recordId=${recordId}`,
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
      {errors && <p style={{ margin: "10px 0", color: "red" }}>{errors}</p>}
      {isLoading && <p style={{ margin: "10px 0" }}>Loading...</p>}

      <input
        type="file"
        name="imageUpload"
        onChange={onChange}
        style={{ margin: "10px 0" }}
      />
      {/* eslint-disable-next-line multiline-ternary */}
      {recordImage ? (
        <>
          <div style={{ margin: "10px 0" }}>Current Image: </div>
          <img
            src={imageFile}
            alt={recordTitle}
            height="250px"
            width="250px"
            style={{
              //   border: "1px solid #000",
              //   padding: "4",
              marginLeft: "1em",
            }}
          />
        </>
      ) : (
        <div>Select a file to upload</div>
      )}
    </div>
  );
};

export default UploadHero;
