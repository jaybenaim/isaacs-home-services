import React, { useState, useEffect } from "react";
import { storage } from "../../firebase/firebase";
import backend from "../../api/backend";
import { connect } from "react-redux";
import { getHeroes } from "../../redux/actions/heroActions";

import "../../assets/stylesheets/admin.css";
import AdminCalendar from "./AdminCalendar/AdminCalendar";
import CurrentImage from "./CurrentImage";

const Admin = (props) => {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);
  const [innerTitle, setInnerTitle] = useState("");
  const [innerDetails, setInnerDetails] = useState("");
  const [editHeroes, setEditHeroes] = useState(false);
  const [showCalender, setShowCalender] = useState(false);

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
          });
      }
    );
  };

  const currentImageElements = () => {
    const { currentImages } = props;
    return (
      currentImages.length >= 1 &&
      currentImages.map((ci, i) => {
        return <CurrentImage key={i} currentImage={ci} imageNum={i} />;
      })
    );
  };
  useEffect(() => {
    props.getHeroes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container admin-page">
      <button
        className="btn btn-outline-primary"
        onClick={() => setEditHeroes(!editHeroes)}
      >
        {" "}
        Home Page Images{" "}
      </button>
      <button
        className="btn btn-outline-primary"
        onClick={() => setShowCalender(!showCalender)}
      >
        {" "}
        {showCalender ? "Hide" : "Show"} Calender{" "}
      </button>
      <button className="btn btn-outline-primary">
        <a
          href="https://isaacs-home-services.herokuapp.com/admin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Admin Page
        </a>
      </button>
      {editHeroes && currentImageElements()}
      {editHeroes && (
        <>
          <img
            style={{ maxHeight: "400px", maxWidth: "400px" }}
            src={imageAsUrl.imgUrl}
            alt={imageAsFile.name !== "" ? imageAsFile.name : "No image chosen"}
          />
          {props.currentImages.length >= 4 && (
            <div>Max 4 images, Delete an image to add a new image. </div>
          )}

          {props.currentImages.length <= 3 && (
            <form onSubmit={handleFireBaseUpload}>
              <input
                name="setInnerTitle"
                value={innerTitle}
                onChange={(e) => setInnerTitle(e.target.value)}
                placeholder="Inner Title"
              />
              <textarea
                className="input-group-text"
                name="setInnerTitle"
                value={innerDetails}
                onChange={(e) => setInnerDetails(e.target.value)}
                placeholder="Inner Details"
              />
              <input type="file" onChange={handleImageAsFile} />
              <button>Add</button>
            </form>
          )}
        </>
      )}
      {showCalender && <AdminCalendar />}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentImages: state.heroes.currentImages,
  };
};
export default connect(mapStateToProps, { getHeroes })(Admin);
