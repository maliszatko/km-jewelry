import React from "react";
import Banner from "./Banner";
import {useMediaQuery} from "react-responsive";

const Hero = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  return (
    <div style={{marginBottom: isTabletOrMobile ? "3%" : "5%"}}>
      <Banner
        image="https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fnaszyjniki%2Fclover_1.jpg?alt=media&token=df8b68f1-29a6-4a21-b1cf-79a6101ae5ea"
        speed={isTabletOrMobile?"0":"-50"}
        text="Odkryj najnowszą kolekcję naszyjników"
        top="10%"
        left="5%"
        url="/naszyjniki"
      />
        <Banner
            image="https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fkolczyki%2FIMG_5829.jpg?alt=media&token=c22b3278-f03f-4a93-b5bf-35b1511a7b40"
            speed={isTabletOrMobile?"0":"-50"}
            text="Odkryj najnowszą kolekcję kolczyków"
            top="30%"
            left="60%"
            url="/kolczyki"
        />
        <Banner
            image="https://firebasestorage.googleapis.com/v0/b/km-jewelry.appspot.com/o/images%2Fpier%C5%9Bcionki%2FIMG_5850.jpg?alt=media&token=bace82e3-d08b-4e44-bbb3-7fae441901a8"
            speed={isTabletOrMobile?"0":"-50"}
            text="Odkryj najnowszą kolekcję pierścionków"
            top="50%"
            left="5%"
            url="/pieśrcionki"
        />
    </div>
  );
};

export default Hero;
