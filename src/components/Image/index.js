import { useState, forwardRef } from "react";
import images from "~/assets/image";

function Image(
  { src, fallBack: currentFallBack = images.noImage, ...props },
  ref
) {
  const [fallBack, setFallBack] = useState("");
  const handleError = () => {
    setFallBack(currentFallBack);
  };
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img ref={ref} src={fallBack || src} {...props} onError={handleError} />
  );
}

export default forwardRef(Image);
