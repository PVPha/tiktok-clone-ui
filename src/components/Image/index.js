import PropTypes from "prop-types";
import { useState, forwardRef } from "react";
import images from "~/assets/image";

const Image = forwardRef(
  ({ src, fallBack: currentFallBack = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState("");
    const handleError = () => {
      setFallBack(currentFallBack);
    };
    return (
      // eslint-disable-next-line jsx-a11y/alt-text
      <img ref={ref} src={fallBack || src} {...props} onError={handleError} />
    );
  }
);

Image.propTypes = {
  src: PropTypes.string,
  fallBack: PropTypes.string,
};
export default Image;
