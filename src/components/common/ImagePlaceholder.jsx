const ImagePlaceholder = ({
  className = "",
  src = "",
  alt = "product image",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default ImagePlaceholder;