import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Testimonial from "./components/Testimonial";
import HelpTips from "./components/HelpTips";
import TextSection from "./components/TextSection";
import legoBig from "./assets/ornaments/lego-path-big.svg";
import styles from './App.module.scss';

const textSection = [
    {
        id: 0,
        title: "POV",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
        id: 1,
        title: "Resource",
        desc: "These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best",
    },
    {
        id: 2,
        title: "You’re all set.",
        desc: "The wise man therefore always holds in these matters to this principle of selection.",
    },
]

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
