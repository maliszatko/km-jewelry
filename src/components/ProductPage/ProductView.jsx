import { React, useEffect, useState, useRef } from "react";
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
  ImageButton
} from "./StyledComponents";
import { Grid } from "@material-ui/core/";
import FullPageView from "./FullPageView";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import './swiper.css'

function ProductView() {
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const swiperRef = useRef(null)
  useEffect(() => {
    swiperRef.current.swiper.slideTo(currentIndex)
  }, [currentIndex])
  useEffect(() => {
    const dbRef = ref_database(getDatabase());
    get(child(dbRef, `/${product}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setItem(snapshotToArray(snapshot).filter((val) => val.id === id));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function handleClick(e) {
    setCurrentIndex(item[0].images.indexOf(e.target.src));
  }
  function clickInZoomer() {
    window.scrollTo(0,0)
    setIsZoomed(!isZoomed);
  }
  function handleSlideChange(e) {
    setCurrentIndex(e.activeIndex)
  }
  return (
    <div>
      <Grid style={{ textAlign: "center", marginTop: "5%" }} container>
        <Grid item xs={12} sm={12} md={6} style={{ display: "block" }}>
        <Swiper
            initialSlide={currentIndex}
            spaceBetween={30}
            hashNavigation={{
              watchState: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            onClick={clickInZoomer}
            onSlideChange={handleSlideChange}
            ref={swiperRef}
        >
          {item[0].images.map((image,index) => {return (<div key={index}><SwiperSlide key={index} data-hash={index}><Image key={index} src={image}/></SwiperSlide></div>)})}
        </Swiper>
          {item[0].images.map((image, index) => {
            if (index === currentIndex) {
              return (
                  <div style={{display: "inline"}} key={index}>
                    <ImageButton onClick={handleClick} key={index}>
                      <SmallImage src={image} key={index} style={{ boxShadow: "0px 2px 2px grey" }}/>
                    </ImageButton>
                  </div>
              )
            }
            else {
              return (
                  <div style={{display: "inline"}} key={index}>
                    <ImageButton onClick={handleClick} key={index}>
                      <SmallImage src={image} key={index}/>
                    </ImageButton>
                  </div>
              )
            }
          })}
        </Grid>
        <Grid item xs={12} sm={12} md={6} style={{ display: "block" }}>
          <TitleProduct>{item[0].name}</TitleProduct>
        </Grid>
      </Grid>
      {isZoomed ? (
        <FullPageView
          currentIndex={currentIndex}
          onZoomerClick={clickInZoomer}
          images={item[0].images}
          onChange={handleSlideChange}
        />
      ) : null}
    </div>
  );
}

export default ProductView;
