import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./ProjectCarousel.css";

const ProjectCarousel = (props) => {
  const { imageUrl, title } = props;
  return (
    <Carousel>
      <Carousel
        width="700px"
        src={imageUrl}
        animationHandler="fade"
        swipeable={false}
      >
        {title}
      </Carousel>
      );
    </Carousel>
  );
};

ReactDOM.render(
  <ProjectCarousel />,
  document.querySelector(".project-carousel")
);

export default ProjectCarousel;
