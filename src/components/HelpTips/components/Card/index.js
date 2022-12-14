import arrow from "../../../../assets/icons/arrow.svg";
import styles from "./styles.module.scss";

const Card = (props) => (
    <div className={`relative ${styles.wrapper}`}>
        <img className={`${styles.image}`} src={props.image} alt="" />
        <div className={`absolute ${styles.blackBar} bg-black`} />
        <div className={`absolute flex ${styles.contentWrapper} justify-between items-center`}>
            <h5 className={`${styles.title} text-start`}>
                {props.title}
            </h5>
            <img className={`${styles.arrow}`} src={arrow} alt="" />
        </div>
    </div>
);

export default Card;