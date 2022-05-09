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
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    const closeIconStyle = {
        color: "white",
        zIndex: "101",
        width: isTabletOrMobile ? "5.0rem" : "2.0rem",
        height: isTabletOrMobile ? "5.0rem" : "2.0rem",
        position: "absolute",
        top: isTabletOrMobile? "-15%" : "0%",
        right: "0",
    }
  return (
    <FullPage>
        <div style={{top: "50%",
            transform: "translate(0, -50%)",
            zIndex: "100",
            width: "100%", position: "absolute"}}>
            <Swiper
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
                key={1}
            >
                {props.images.map((image,index) => {return (<div><SwiperSlide key={index} data-hash={index}><Image style={{width: "100%", position: "relative", display: "inline-block"}} src={image}/></SwiperSlide></div>)})}
            </Swiper>

      <CloseIcon
        style={closeIconStyle}
        onClick={props.onClick}
      />
        </div>
    </FullPage>
  );
}
export default FullPageView;
