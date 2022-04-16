import React from "react";
import firebase from "../../api/firebase";
import { useHistory } from "react-router";
import backend from "api/backend";

const CurrentImage = ({ currentImage: ci, imageNum, onSuccess }) => {
  // const history = useHistory();

  const deleteImage = async () => {
    const fbId = ci.firebaseId;
    const mongoId = ci._id;

    console.log(ci);
    try {
      if (fbId) {
        await firebase.delete(`/heroes/${fbId}.json`);
      }

      if (mongoId) {
        await backend.delete(`/heroes/${mongoId}`);
      }

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div
      style={{ padding: "4%" }}
      className="border-t-gray-200 border border-2"
    >
      <strong>Image {imageNum + 1}</strong>
      <p>{ci.innerTitle}</p>
      <p>{ci.innerDetails}</p>
      <p>
        <a
          href={`https://isaacs-home-services.herokuapp.com/admin/resources/homeImages`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning"
        >
          Edit
        </a>
      </p>

      <button className="btn btn-danger" onClick={(e) => deleteImage()}>
        Delete
      </button>
      <img
        src={ci.src}
        alt={ci.alt}
        height={"200px"}
        width={"200px"}
        className="hero-preview-image"
        style={{ marginLeft: "70%", position: "relative", top: "-87px" }}
      />
    </div>
  );
};

export default CurrentImage;
