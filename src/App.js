import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import HelpTips from "./components/HelpTips";
import styles from './App.module.scss';

function App() {
    return (
        <>
            <div className={` text-center bg-cameo-pink`}>
                <Hero />
                <Intro />
            </div>
            <div className={` text-center text-white bg-black`}>
                <Testimonial />
                <HelpTips />
            </div>
        </>
    );
}

export default App;
