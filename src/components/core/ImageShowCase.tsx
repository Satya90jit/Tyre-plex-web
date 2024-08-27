import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ImageShowCaseStyle from "@/styles/core/ImageShowCase.module.css";
import { CardHolder } from "../cards";

const ImageShowCase = ({ Images }: { Images: string[] }) => {
  const HeroImage = useRef<any>();
  const [activeImage, setActiveImage] = useState(0);

  const handelImageClick = (img: string, index: number) => {
    setActiveImage(index);
    HeroImage.current.style.backgroundImage = `url(${img})`;
  };

  const ScrollRight = () => {
    const prev = activeImage ? activeImage - 1 : Images.length - 1;
    setActiveImage(prev);
    HeroImage.current.style.backgroundImage = `url(${Images[prev]})`;
  };

  const ScrollLeft = () => {
    const next = activeImage === Images.length - 1 ? 0 : activeImage + 1;
    setActiveImage(next);
    HeroImage.current.style.backgroundImage = `url(${Images[next]})`;
  };

  return (
    <aside className={ImageShowCaseStyle.container}>
      <div
        ref={HeroImage}
        className={`shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-md ${ImageShowCaseStyle.HeroElementWarper}`}
        style={{ backgroundImage: `url(${Images[0]})` }}
      >
        <span className={ImageShowCaseStyle.imageIndex}>
          {activeImage + 1}/{Images.length}
        </span>
        <span onClick={ScrollRight} className={ImageShowCaseStyle.leftArrow}>
          <ArrowBackIosNewRounded />
        </span>
        <span onClick={ScrollLeft} className={ImageShowCaseStyle.rightArrow}>
          <ArrowForwardIosRounded />
        </span>
      </div>
      <CardHolder>
        {Images.map((item, index) => {
          return (
            <div
              onClick={() => handelImageClick(item, index)}
              key={index}
              className={` ${ImageShowCaseStyle.SliderImage} ${
                activeImage === index && ImageShowCaseStyle.active
              }`}
              style={{ backgroundImage: `url(${item})` }}
            ></div>
          );
        })}
      </CardHolder>
    </aside>
  );
};

export default ImageShowCase;
