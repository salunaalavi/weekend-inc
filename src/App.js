import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import HelpTips from "./components/HelpTips";
import TextSection from "./components/TextSection";
import legoBig from "./assets/ornaments/lego-path-big.svg";
import { textSection } from "./store";
import styles from './App.module.scss';

function App() {
    return (
        <>
            <div className={` text-center bg-cameo-pink`}>
                <Hero />
                <Intro />
            </div>
            <div className={`relative text-center text-white bg-black`}>
                <Testimonial
                    title="Testimonial"
                />
                {
                    textSection.map(({ id, title, desc }, index) => {
                        if (id === 2) {
                            return (
                                <>
                                    <HelpTips />
                                    <TextSection key={index} id={id} title={title} desc={desc} />
                                </>
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
