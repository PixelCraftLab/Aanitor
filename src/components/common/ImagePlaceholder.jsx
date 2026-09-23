const ImagePlaceholder = ({
  className = "",
  src = "",
  alt = "product image",
}) => {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={className}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
    />
  );
};

export default ImagePlaceholder;