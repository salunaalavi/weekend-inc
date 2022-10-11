import styles from "./styles.module.scss";

const TextSection = (props) => (
    <div className={`${ styles[`textSection${props.id}`] }`}>
        <h2>
            {props.title}
        </h2>
        <p className={`${styles.desc}`}>
            {props.desc}
        </p>
    </div>
);

export default TextSection;