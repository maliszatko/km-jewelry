import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { Hero, HeroText, HeroContent, Button, StyledLink } from "./StyledComponents";

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
        <StyledLink to={props.url}><Button>Odkryj</Button></StyledLink>
      </HeroContent>
    </Hero>
  );
};

export default Banner;
