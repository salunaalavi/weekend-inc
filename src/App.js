import Hero from "./components/Hero";
import Intro from "./components/Intro";
import styles from './App.module.scss';

function App() {
    return (
        <>
            <div className={`${styles.upper} text-center bg-cameo-pink`}>
                <Hero />
                <Intro />
            </div>
        </>
    );
}

export default App;
