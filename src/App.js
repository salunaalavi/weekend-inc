import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
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
            </div>
        </>
    );
}

export default App;
