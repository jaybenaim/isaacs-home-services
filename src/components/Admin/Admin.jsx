import React, { useState } from "react";
import { storage } from "../../firebase/firebase";

const Admin = () => {
  const [showForm, setShowForm] = useState(false);
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];

    setImageAsFile((imageFile) => image);
  };

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
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
          });
      }
    );
  };
  return (
    <div className="container">
      <button
        style={{ marginTop: "40px" }}
        onClick={() => setShowForm(!showForm)}
      >
        Change Hero Images
      </button>

      {showForm && (
        <>
          <img
            src={imageAsUrl.imgUrl}
            alt={imageAsFile.name !== "" ? imageAsFile.name : "No image chosen"}
          />
          <form onSubmit={handleFireBaseUpload}>
            <input type="file" onChange={handleImageAsFile} />
            <button>Save</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Admin;
