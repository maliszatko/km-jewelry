import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import './swiper.css'
import {Image} from "./StyledComponents";
import {React} from "react";

export const CustomSwiper = (props) => {
    if (props.images) {
        return (
            <div>
                <Swiper
                    initialSlide={props.currentIndex}
                    spaceBetween={30}
                    hashNavigation={{
                        watchState: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    onClick={props.clickInZoomer}
                    ref={props.swiperRef}
                >
                    {props.images.map((image, index) => {
                        return (
                            <div key={index}><SwiperSlide data-hash={index}><Image src={image}/></SwiperSlide></div>)
                    })}
                </Swiper>
            </div>
        );
    }
}