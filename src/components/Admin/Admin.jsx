import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getHeroes } from "../../redux/actions/heroActions";

import "../../assets/stylesheets/admin.css";
import AdminCalendar from "./AdminCalendar/AdminCalendar";
import CurrentImage from "./CurrentImage";
import FirebaseImageUpload from "./FirebaseImageUpload";

const Admin = (props) => {
  const allInputs = { imgUrl: "" };
  const [imageAsFile, setImageAsFile] = useState("");
  const [imageAsUrl, setImageAsUrl] = useState(allInputs);

  const [editHeroes, setEditHeroes] = useState(false);
  const [showCalender, setShowCalender] = useState(false);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];

    setImageAsFile((imageFile) => image);
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
    <div className="container admin-page" style={{ minHeight: "100vh" }}>
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

      <div className="container">{editHeroes && currentImageElements()}</div>

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
            <FirebaseImageUpload
              onChange={handleImageAsFile}
              imageAsFile={imageAsFile}
              setImageAsUrl={setImageAsUrl}
            />
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
