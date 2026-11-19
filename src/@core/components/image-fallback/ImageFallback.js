const ImageFallback = ({ src, className, fallback, ...props }) => {
  if (
    src == null ||
    src == "" ||
    src == "http://87.107.5.212:3001/files/Image-1786390272351.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786803078787.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786801431149.jpg" ||
    src == "http://87.107.5.212:3001/files/Image-1786231023726.jpeg" ||
    src == "http://87.107.5.212:3001/files/Image-1786231224741.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786229343083.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786490953904.png" ||
    src == "http://87.107.5.212:3001/files/formFile-1786267000473.webp" ||
    src == "http://87.107.5.212:3001/files/formFile-1786266990641.jpeg" ||
    src == "http://87.107.5.212:3001/files/formFile-1786308580877.jpg" ||
    src == "http://87.107.5.212:3001/files/formFile-1786798996524.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786230240640.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786231609025.webp" ||
    src == "http://87.107.5.212:3001/files/Image-1786373269458.jpg" ||
    src == "http://87.107.5.212:3001/files/Image-1786373277968.jpg" ||
    src == "http://87.107.5.212:3001/files/Image-1786374457002.jpg" ||
    src == "http://87.107.5.212:3001/files/Image-1786374996623.jpg" ||
    src == "http://87.107.5.212:3001/files/Image-1786231608467.webp" ||
    src == "http://87.107.5.212:3001/files/Image-1786803977947.png" ||
    src == "http://87.107.5.212:3001/files/Image-1786801835576.jpg"
  ) {
    src = fallback;
  }
  return (
    <img
      {...props}
      src={src}
      className={className}
      onError={() => {
        return (src = fallback);
      }}
    />
  );
};

export default ImageFallback;
