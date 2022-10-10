import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./components/Card";
import styles from './styles.module.scss';
import arrow from "../../assets/icons/arrow.svg";
import './slick.css';

const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            src={arrow}
            alt=""
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <img
            className={className}
            src={arrow}
            alt=""
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}

const Testimonial = () => {
    const settings = {
        className: "slider variable-width",
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 0,
                    variableWidth: true,
                }
            }
        ]
    };
    return (
        <div className={`relative flex ${styles.testimonial} justify-center`}>
            <div className={`absolute ${styles.wrapper}`}>
                <h2 className={`${styles.testimonialTitle}`}>
                    Testimonial
                </h2>
                <Slider {...settings}>
                    <Card style={{ width: 247 }} title="Blu Kicks" content="Places where you can leverage tools and software to free up time to focus on growing the business." />
                    <Card style={{ width: 247 }} title="Blu Kicks" content="Places where you can leverage tools and software to free up time to focus on growing the business." />
                    <Card style={{ width: 247 }} title="Blu Kicks" content="Places where you can leverage tools and software to free up time to focus on growing the business." />
                    <Card style={{ width: 247 }} title="Blu Kicks" content="Places where you can leverage tools and software to free up time to focus on growing the business." />
                    <Card style={{ width: 247 }} title="Blu Kicks" content="Places where you can leverage tools and software to free up time to focus on growing the business." />
                    <Card style={{ width: 247 }} title="Blu Kicks" content="Places where you can leverage tools and software to free up time to focus on growing the business." />
                </Slider>
            </div>
        </div>
    )
}

export default Testimonial;
