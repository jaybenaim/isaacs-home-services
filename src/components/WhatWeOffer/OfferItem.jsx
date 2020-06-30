import React from "react";
import { Link } from "react-router-dom";
import "../../assets/stylesheets/offerItem.css";
import lawn1 from "../../assets/img/lawn1.jpg";
import CompareSlider from "../../components/SimpleSlider/CompareSlider";

const OfferItem = (props) => {
  let { service, position } = props;

  const gridClass = {
    imgContainer: `img-container ${position % 2 === 0 ? "even" : "odd"}`,
    details: `details ${(position + 1) % 2 === 0 ? "even" : "odd"}`,
  };
  const beforeImage = !service.beforeImage ? lawn1 : service.beforeImage;
  const afterImage = !service.afterImage ? lawn1 : service.afterImage;
  return (
    <div className="service-content">
      <div className={gridClass.imgContainer}>
        <CompareSlider leftImage={beforeImage} rightImage={afterImage} />

        <img src={afterImage} alt={service.title} className="img-thumb" />

        <div className="img-layover">
          <Link
            to={{ pathname: `/services/${service.title}`, state: { service } }}
          >
            <h5 className="secondary-font">{service.title}</h5>
          </Link>
        </div>
      </div>
      <div className={gridClass.details}>
        <h5 className="title secondary-font">{service.title}</h5>

        <p className="service-short-description secondary-font">
          {service.shortDescription}
        </p>
      </div>
    </div>
  );
};

export default OfferItem;
