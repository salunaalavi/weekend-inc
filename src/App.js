import Hero from "./components/Hero";
import styles from './App.module.scss';

function App() {
    return (
        <div className={`${styles.App} bg-cameo-pink`}>
            <Hero />
        </div >
    );
}

export default App;
