import React from "react";
import HeroImage from "./HeroImage";
import "../../assets/stylesheets/hero.css";

const Hero = () => {
  // get images
  const images = [
    {
      alt: "",
      image:
        "https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/60377574_429824677578879_1121704308546265055_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=k-GXbjsfFNAAX_67tu-&oh=8956aa60da0a3f827fb450606aaf1282&oe=5F1271D1",
      innerTitle: "Seeding and Fertilization",
      innerDetails: "",
    },
    {
      alt: "",
      image:
        "https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/66841667_347873812816850_8783785032617102072_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=N-MC-yU8NdAAX_1wP9e&oh=c56c91cd891f9c42f3def2b8baa02a9a&oe=5F12EC07",
      innerTitle: "Driveway Sealing",
      innerDetails: "",
    },
    {
      alt: "",
      image:
        "https://instagram.fyto1-2.fna.fbcdn.net/v/t51.2885-15/e35/60745783_2311190382436850_8726553293238409545_n.jpg?_nc_ht=instagram.fyto1-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=srQvVUy-J_kAX_XT4S_&oh=8624f139ddc0bc0eafa3690244d2ba4f&oe=5F157890",
      innerTitle: "Detaching",
      innerDetails: "",
    },
    {
      alt: "",
      image:
        "https://instagram.fyto1-1.fna.fbcdn.net/v/t51.2885-15/e35/58468378_2083778311915660_7814727794596265222_n.jpg?_nc_ht=instagram.fyto1-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=OEda1pO15lAAX_d_YPB&oh=ab8306f05b8756be2627628a224ddf95&oe=5F147C88",
      innerTitle: "Gardening",
      innerDetails: "",
    },
  ];

  const heroImageElements = images.map((element, i) => {
    const { image, alt, innerTitle, innerDetails } = element;
    return (
      <HeroImage
        key={i}
        imageClassId={i + 1}
        image={image}
        alt={alt}
        innerTitle={innerTitle}
        innerDetails={innerDetails}
      />
    );
  });
  return (
    // render image squares in 2x2 grid
    <div className="hero-container">{heroImageElements}</div>
  );
};

export default Hero;
