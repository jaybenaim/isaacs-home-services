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

  const [editHeroes, setEditHeroes] = useState(true);
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
        return (
          <CurrentImage
            key={i}
            currentImage={ci}
            imageNum={i}
            onSuccess={() => props.getHeroes()}
          />
        );
      })
    );
  };
  useEffect(() => {
    props.getHeroes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container admin-page min-h-screen">
      <div className="flex justify-center w-full pb-4 mx-4">
        <button
          className="flex btn btn-outline-primary mx-2"
          onClick={() => setEditHeroes(!editHeroes)}
        >
          {" "}
          Home Page Images{" "}
        </button>

        <button
          className="flex btn btn-outline-primary mx-2"
          onClick={() => {
            setEditHeroes(false);
            setShowCalender(!showCalender);
          }}
        >
          {" "}
          {showCalender ? "Hide" : "Show"} Calender{" "}
        </button>

        <button
          className="flex btn btn-outline-primary mx-2"
          onClick={() => {
            window.open(
              "https://isaacs-home-services.herokuapp.com/admin",
              "_blank"
            );
          }}
        >
          Admin Page
        </button>
      </div>

      <div className="container">{editHeroes && currentImageElements()}</div>

      {editHeroes && (
        <>
          {/* <img
            style={{ maxHeight: "400px", maxWidth: "400px" }}
            src={imageAsUrl.imgUrl}
            alt={imageAsFile.name !== "" ? imageAsFile.name : "No image chosen"}
          /> */}

          <FirebaseImageUpload
            onChange={handleImageAsFile}
            imageAsFile={imageAsFile}
            setImageAsUrl={setImageAsUrl}
            onSuccess={() => {
              props.getHeroes();
            }}
          />
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
