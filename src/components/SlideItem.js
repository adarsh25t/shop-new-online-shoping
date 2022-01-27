import "./SlideItem.css";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { DUMMY_DATAS } from "../store/DummyData";
import Card from "./Card";
import { Fragment } from "react";
import SliderHead from "./SliderHead";

const SlideItem = ({ title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

 
  const Item = DUMMY_DATAS.map((items) => {
    return <Card items={items}/>;
  });

  return (
    <Fragment>
        <div className="slide-wrapper">
        <SliderHead title={title}/>
         <div className="slider">
        <Carousel responsive={responsive}>{Item}</Carousel>
      </div>
        </div>
    </Fragment>
  );
};
export default SlideItem;
