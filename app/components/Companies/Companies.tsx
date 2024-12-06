"use client"
import React, { Component } from 'react'
import Slider from "react-slick"

// Images Data for Carousel
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
       imgSrc: "/assets/SlickCompany/airbnb.svg" 
    },
    {
        imgSrc: "/assets/slickCompany/hubspot.svg"
    },
    {
        imgSrc: "/assets/slickCompany/microsoft.svg"
    },
    {
        imgSrc: "/assets/slickCompany/google.svg"
    },
    {
        imgSrc: "assets/slickCompany/walmart.svg"
    },
    {
        imgSrc: "assets/slickCompany/fedex.svg"
    },
]

// Carousel Settings
export default class MultipleItems extends Component {
    render() {
        const settings = { 
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll:1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive : [
                {
                    breakpoint: 1024,
                    setting: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    setting: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    setting: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
            ]
        };
        return (
            <div className='text-center bg-lightpink'>
                <div className='mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                    <h2 className='text-lg my-10 text-lightgrey'>Trusted by companies of all sizes</h2>
                    <div>
                        <Slider {...settings}>
                            {
                                data.map((item, i) =>
                                    <div key={i}>
                                        <img
                                         src={item.imgSrc}
                                         alt={item.imgSrc}
                                        />
                                    </div>
                                )
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        )
    }
}