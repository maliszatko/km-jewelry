import { React } from "react";
import { FullPage, Image } from "./StyledComponents";
import CloseIcon from "@mui/icons-material/Close";
import {useMediaQuery} from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './swiper.css'

import { Pagination, Navigation } from "swiper";

function FullPageView(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
    const closeIconStyle = {
        color: "white",
        zIndex: "101",
        width: "2.0rem",
        height: "2.0rem",
        position: "absolute",
        top: (isTabletOrMobile? "-30px" : "0px"),
        right: "0",
    }
  return (
    <FullPage>
        <div style={{top: isTabletOrMobile? "50%" : "0%",
            transform: isTabletOrMobile? "translate(0, -50%)" : null,
            zIndex: "100",
            width: "100%", position: "absolute"}}>
            <Swiper
                initialSlide={props.currentIndex}
                spaceBetween={30}
                className="clicked"
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                onSlideChange={props.onChange}
            >
                {props.images.map((image,index) => {return (<div key={index}><SwiperSlide key={index} data-hash={index}><Image key={index} style={{width: "100%", height: "auto", position: "relative", display: "inline-block"}} src={image}/></SwiperSlide></div>)})}
            </Swiper>

      <CloseIcon
        style={closeIconStyle}
        onClick={props.onZoomerClick}
      />
        </div>
    </FullPage>
  );
}
export default FullPageView;
