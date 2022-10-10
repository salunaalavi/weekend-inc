import legoMini from "../../assets/ornaments/lego-path-mini.svg";
import blueCircle from "../../assets/ornaments/bluebonnet-circle.svg";
import styles from './styles.module.scss';

const Intro = () => (
    <div className={`relative flex ${styles.intro} justify-center`}>
        <div className={`${styles.container} text-end`}>
            <p className={`large ${styles.textLarge}`}>
                <span className="font-bold text-bluebonnet">Deffinition;</span> a practice or exercise to test or improve one's fitness for athletic competition,
                ability, or performance to exhaust (something, such as a mine) by working to devise, arrange,
                or achieve by resolving difficulties. Merriam-Webster.com Dictionary.
            </p>
            <h3 className="text-white italic font-normal">
                ~weekend team
            </h3>
        </div>
        <img className={`${styles.legoMini}`} src={legoMini} alt="" />
        <img className={`${styles.blueCircle}`} src={blueCircle} alt="" />
    </div>
)

export default Intro;
