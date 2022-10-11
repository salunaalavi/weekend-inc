import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import HelpTips from "./components/HelpTips";
import TextSection from "./components/TextSection";
import legoBig from "./assets/ornaments/lego-path-big.svg";
import { textSection, getTestimonies, getTips } from "./store";
import styles from './App.module.scss';

function App() {
    const [testimonies, setTestimonies] = useState([]);
    const [tips, setTips] = useState([]);

    useEffect(() => {
        retrieveTestimonies();
        retrieveTips();
    }, [])

    const retrieveTestimonies = () => {
        getTestimonies()
            .then(response => {
                setTestimonies(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const retrieveTips = () => {
        getTips()
            .then(response => {
                setTips(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <>
            <div className={` text-center bg-cameo-pink`}>
                <Hero />
                <Intro />
            </div>
            <div className={`relative text-center text-white bg-black`}>
                <Testimonial
                    title="Testimonial"
                    testimonies={testimonies}
                />
                {
                    textSection.map(({ id, title, desc }, index) => {
                        if (id === 2) {
                            return (
                                <React.Fragment key={index}>
                                    <HelpTips tips={tips} />
                                    <TextSection id={id} title={title} desc={desc} />
                                </React.Fragment>
                            )
                        }
                        return <TextSection key={index} id={id} title={title} desc={desc} />
                    })
                }
                <img className={`absolute ${styles.legoBig}`} src={legoBig} alt="" />
            </div>
        </>
    );
}

export default App;
