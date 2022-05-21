import { forwardRef, useState } from "react";
import images from "~/assests/images";
const Image = forwardRef(
  ({ src, alt, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState("");
    const handlerError = () => {
      setFallBack(customFallback);
    };
    return (
      <img
        ref={ref}
        alt={alt}
        src={fallBack || src}
        onError={handlerError}
        {...props}
      />
    );
  }
);

export default Image;
