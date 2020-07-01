import React from "react";
import firebase from "../../api/firebase";
import { useHistory } from "react-router";

const CurrentImage = ({ currentImage: ci, imageNum }) => {
  const history = useHistory();

  const deleteImage = (id) => {
    firebase
      .delete(`/heroes/${id}.json`)
      .then((res) => {
        history.go();
        console.log("deleted item ");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div style={{ border: "2px solid #000", padding: "4%" }}>
      <strong>Image {imageNum + 1}</strong>
      <p>Title: {ci.innerTitle}</p>
      <p>Details: {ci.innerDetails}</p>
      <p>
        <a
          href={`https://isaacs-home-services.herokuapp.com/admin/resources/heros/`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-warning"
        >
          Edit
        </a>
      </p>

      <button
        className="btn btn-danger"
        onClick={(e) => deleteImage(ci.firebaseId)}
      >
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
