import React, { useState } from "react";

import local from "../../../src/api/local";
import Notifications, { notify } from "react-notify-toast";

const UploadImage = (props) => {
  const toast = notify.createShowQueue();
  const {
    resource: { id: resourceId },
    record: {
      id: recordId,
      params: { image: recordImage, title: recordTitle },
    },
  } = props;
  const [file, setFile] = useState(null);

  const onChange = (e) => {
    const errs = [];
    const files = Array.from(e.target.files);

    if (files.length > 3) {
      const msg = "Only 3 images can be uploaded at a time";
      return toast(msg, "custom", 2000, toastColor);
    }

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
      return errs.forEach((err) => toast(err, "custom", 2000, toastColor));
    }

    saveImageInMongo(formData, recordId)
      .then((res) => {
        console.log(res.data);

        setFile(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const saveImageInMongo = async (image, recordId) => {
    return await local.post(
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
            src={recordImage}
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
      <Notifications />
    </div>
  );
};

export default UploadImage;
