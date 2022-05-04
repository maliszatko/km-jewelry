import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Banner from "./Banner";

const Hero = () => {
  return (
    <div>
      <Banner
        image="https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fnaszyjniki%2Fclover_1.jpg?alt=media&token=df8b68f1-29a6-4a21-b1cf-79a6101ae5ea"
        speed="-15"
        text="Odkryj najnowszą kolekcję kolczyków"
        top="10%"
        left="5%"
      />
      <ParallaxBanner
        layers={[
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fkolczyki%2FIMG_5829.jpg?alt=media&token=c22b3278-f03f-4a93-b5bf-35b1511a7b40",
            speed: -15
          }
        ]}
        style={{ marginTop: "5%", aspectRatio: "3 / 2" }}
      />
      <ParallaxBanner
        layers={[
          {
            image:
              "https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fpier%C5%9Bcionki%2FIMG_5850.jpg?alt=media&token=bace82e3-d08b-4e44-bbb3-7fae441901a8",
            speed: -15
          }
        ]}
        style={{ marginTop: "5%", aspectRatio: "3 / 2" }}
      />
    </div>
  );
};

export default Hero;
