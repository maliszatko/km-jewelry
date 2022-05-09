import { React } from "react";
import { FullPage, Image, ArrowRight, ArrowLeft } from "./StyledComponents";
import CloseIcon from "@mui/icons-material/Close";
import {useMediaQuery} from "react-responsive";

function FullPageView(props) {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
    const leftArrowStyle = {
        left: "0",
        margin: "0 auto",
        alignItems: "center",
        width: isTabletOrMobile ? "4rem" : "1.5rem",
        height: isTabletOrMobile ? "4rem" : "1.5rem",
    }
    const rightArrowStyle = {
        right: "0",
        margin: "0 auto",
        alignItems: "center",
        width: isTabletOrMobile ? "4rem" : "1.5rem",
        height: isTabletOrMobile ? "4rem" : "1.5rem",
    }
    function handleClick(e){
        console.log(e)
    }
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
      <Image
        style={{
            width: "100%",
            position: "relative",
            display: "inline-block"
        }}
        src={props.src}
        onClick={handleClick}
        onTouchStart={props.handleTouchStart}
        onTouchMove={props.handleTouchMove}
        onTouchEnd={props.handleTouchEnd}
      />
      <ArrowLeft style={leftArrowStyle} onClick={props.clickLeft}/>
      <ArrowRight style={rightArrowStyle} onClick={props.clickRight}/>
      <CloseIcon
        style={closeIconStyle}
        onClick={props.onClick}
      />
        </div>
    </FullPage>
  );
}
export default FullPageView;
