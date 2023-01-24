import React, { useEffect, useState } from "react"
import PropTypes from "prop-types";

function useProgressiveImage (src, placeholder) {  
    const [sourceLoaded, setSourceLoaded] = useState(null)
  
    useEffect(() => {
      const img = new Image()
      img.src = src
      img.onload = () => setSourceLoaded(src)
    }, [src])
  
    return (
      <div
          className="image"
          style={{
            backgroundImage: `url(${sourceLoaded || placeholder})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
      />
    )
  }

  export default useProgressiveImage

  useProgressiveImage.propTypes = {
    src: PropTypes.string,
    placeholder: PropTypes.string
  };