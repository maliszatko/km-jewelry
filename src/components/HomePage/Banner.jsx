import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Hero, HeroText, HeroContent, Button } from "./StyledComponents";

const Banner = (props) => {
  return (
    <Hero>
      <ParallaxBanner
        layers={[
          {
            image: props.image,
            speed: Number(props.speed)
          }
        ]}
        style={{ marginTop: "5%", aspectRatio: "3 / 2" }}
      />
      <HeroContent
        style={{
          top: props.top,
          left: props.left
        }}
      >
        <HeroText>{props.text}</HeroText>
        <Button>Odkryj</Button>
      </HeroContent>
    </Hero>
  );
};

export default Banner;
