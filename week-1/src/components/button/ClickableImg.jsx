import React from "react";

function ClickableImg({
  src,
  onClick,
  alt = "clickable image",
  className = "",
}) {
  return <img className={className} onClick={onClick} src={src} alt={alt} />;
}

export default ClickableImg;
