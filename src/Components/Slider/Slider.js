import './Slider.css'
import React from 'react';
import { MdZoomIn } from 'react-icons/md'
import svg1 from "../../Assets/svg1.svg";
import svg2 from "../../Assets/svg2.svg";
import svg4 from "../../Assets/svg4.svg";
import svg5 from "../../Assets/svg5.svg";
import sv3 from "../../Assets/sv3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const customDivs = [
    { backgroundColor: '#E1F1FF', title: 'Title 1', img: svg1 },
    { backgroundColor: '#EBE7F6', title: 'Title 2', img: svg2 },
    { backgroundColor: '#F6F4E6', title: 'Title 3', img: sv3 },
    { backgroundColor: '#F6ECE7', title: 'Title 3', img: svg5 },
    { backgroundColor: '#E0F1F5', title: 'Title 3', img: svg4 },
    { backgroundColor: '#E1F1FF', title: 'Title 1', img: svg1 },
    { backgroundColor: '#EBE7F6', title: 'Title 2', img: svg2 },
    { backgroundColor: '#F6F4E6', title: 'Title 3', img: sv3 },
    { backgroundColor: '#F6ECE7', title: 'Title 3', img: svg5 },
    { backgroundColor: '#E0F1F5', title: 'Title 3', img: svg4 },
];

function Slider() {
    return (
        <div className='parent'>
            <div className='heading'>
                <div className='head'>
                    <div className='horLine'></div>
                    <h4 className='heading1'>Solutions we offer</h4>
                    <div className='horLine'></div>

                </div>
                <p className='para'>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a<br /> document or a typeface without relying on meaningful content.</p>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    '@0.75': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    '@1.00': {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    '@1.50': {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {customDivs.map((customDiv, index) => (
                    <SwiperSlide key={index}>
                        <div className="custom-div" style={{ backgroundColor: customDiv.backgroundColor }}>
                            <img src={customDiv.img} alt="Your SVG" width="50" height="50" />
                            <h2 className="title">{customDiv.title}</h2>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider
