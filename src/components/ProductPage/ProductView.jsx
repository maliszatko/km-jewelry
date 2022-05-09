import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getDatabase,
  ref as ref_database,
  child,
  get
} from "firebase/database";
import {
  TitleProduct,
  Image,
  SmallImage,
  ImageButton,
  LargeImageButton, ArrowRight, ArrowLeft
} from "./StyledComponents";
import { Grid } from "@material-ui/core/";
import FullPageView from "./FullPageView";
import {useMediaQuery} from "react-responsive";

function ProductView() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' })
  const arrowStyle = {
    width: isTabletOrMobile ? "4rem" : "1.5rem",
    height: isTabletOrMobile ? "4rem" : "1.5rem",
  }
  function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function (childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;

      returnArr.push(item);
    });

    return returnArr;
  }
  const { product, id } = useParams();
  const [item, setItem] = useState([
    { name: "", description: "", type: "", images: [] }
  ]);
  const [displayedImage, setDisplayedImage] = useState(item[0].images[0]);
  const [isZoomed, setIsZoomed] = useState(false);
  useEffect(() => {
    setDisplayedImage(item[0].images[0]);
  }, [item]);

  useEffect(() => {
    const dbRef = ref_database(getDatabase());
    get(child(dbRef, `/${product}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(
            snapshotToArray(snapshot).map((val) => val.id),
            id
          );
          setItem(snapshotToArray(snapshot).filter((val) => val.id === id));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  function handleClick(e) {
    setDisplayedImage(e.target.src);
  }
  function clickInZoomer() {
    setIsZoomed(!isZoomed);
  }
  function leftArrowClick() {
    const currentIndex = item[0].images.indexOf(displayedImage)
    if (currentIndex > 0){
      setDisplayedImage(item[0].images[currentIndex-1])
    }
  }
  function rightArrowClick() {
    const currentIndex = item[0].images.indexOf(displayedImage)
    if (currentIndex < item[0].images.length - 1){
      setDisplayedImage(item[0].images[currentIndex+1])
    }
  }
  function handleTouchStart(e) {
    setTouchStart(e.targetTouches[0].clientX);
  }

  function handleTouchMove(e) {
    setTouchEnd(e.targetTouches[0].clientX);
  }

  function handleTouchEnd() {
    if (touchStart - touchEnd > 150) {
      // do your stuff here for left swipe
      leftArrowClick();
    }

    if (touchStart - touchEnd < -150) {
      // do your stuff here for right swipe
      rightArrowClick();
    }
  }
  return (
    <div>
      <Grid style={{ textAlign: "center", marginTop: "5%" }} container>
        <Grid item md={12} lg={6} style={{ display: "block" }}>
          <div style={{position: "relative"}}>
          <LargeImageButton onClick={clickInZoomer}>
            <Image src={displayedImage} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}/>
          </LargeImageButton>
          <ArrowLeft style={arrowStyle} onClick={leftArrowClick}/>
          <ArrowRight style={arrowStyle} onClick={rightArrowClick}/>
          </div>
          {item[0].images.map((image, index) => {
            if (image === displayedImage) {
              return (
                <div style={{ display: "inline" }} key={index}>
                  <ImageButton onClick={handleClick}>
                    <SmallImage
                      src={image}
                      style={{ boxShadow: "0px 2px 2px grey" }}
                    />
                  </ImageButton>
                </div>
              );
            } else {
              return (
                <div style={{ display: "inline" }}>
                  <ImageButton onClick={handleClick}>
                    <SmallImage src={image}/>
                  </ImageButton>
                </div>
              );
            }
          })}
        </Grid>
        <Grid item md={12} lg={6}>
          <TitleProduct>{item[0].name}</TitleProduct>
        </Grid>
      </Grid>
      {isZoomed ? (
        <FullPageView
          onClick={clickInZoomer}
          src={displayedImage}
          clickLeft={leftArrowClick}
          clickRight={rightArrowClick}
          handleTouchStart={handleTouchStart}
          handleTouchMove={handleTouchMove}
          handleTouchEnd={handleTouchEnd}
        />
      ) : null}
    </div>
  );
}

export default ProductView;
