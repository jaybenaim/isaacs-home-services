import React, { useState } from "react";
import storage from "../Firebase/firebase";

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
        <form onSubmit={handleFireBaseUpload}>
          <input type="file" onChange={handleImageAsFile} />
          <button>Save</button>
        </form>
      )}
    </div>
  );
};

export default Admin;
