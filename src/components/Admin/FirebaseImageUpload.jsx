import React, { useState } from "react";
import { Button } from "react-bootstrap";
import backend from "../../api/backend";
import { storage } from "../../firebase/firebase";

const FirebaseImageUpload = ({
  onChange,
  imageAsFile,
  setImageAsUrl,
  onSuccess,
}) => {
  const [innerTitle, setInnerTitle] = useState("");
  const [innerDetails, setInnerDetails] = useState("");

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // image loading
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }

    const uploadTask = storage
      .ref(`/hero-images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("hero-images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            // save url in mongo
            let data = {
              src: fireBaseUrl,
              alt: imageAsFile.name,
              innerTitle,
              innerDetails,
            };
            backend
              .post("/heroes", data)
              .then((res) => {
                console.log(res);
              })
              .catch((err) => console.log(err));

            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));

            if (onSuccess) {
              onSuccess();
            }
          });
      }
    );
  };

  return (
    <form
      onSubmit={handleFireBaseUpload}
      className="flex flex-col space-y-4 p-4"
    >
      <div className="flex mt-2">
        <input
          name="setInnerTitle"
          value={innerTitle}
          onChange={(e) => setInnerTitle(e.target.value)}
          placeholder="Inner Title"
        />
      </div>

      <div className="flex mt-2">
        <textarea
          className="input-group-text"
          name="setInnerTitle"
          value={innerDetails}
          onChange={(e) => setInnerDetails(e.target.value)}
          placeholder="Inner Details"
        />
      </div>

      <div className="flex mt-2">
        <input type="file" onChange={onChange} />
      </div>

      <div className="flex mt-2">
        <Button>Add</Button>
      </div>
    </form>
  );
};

export default FirebaseImageUpload;
