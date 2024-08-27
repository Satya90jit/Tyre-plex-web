import ImageShowCase from "../core/ImageShowCase";

const imageData: any = [
  "/shree3.jpg",
  "/shree4.jpg",
  "/shree3.jpg",
  "/shree4.jpg",
  "/shree3.jpg",
];

const ProductImage = () => {
  return (
    <>
      <ImageShowCase Images={imageData} />
    </>
  );
};

export default ProductImage;
