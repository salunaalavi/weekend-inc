import styles from "./styles.module.scss";

const TextSection = (props) => (
    <div className={`${props.id === 0 ? styles.textSection0 : props.id === 1 ? styles.textSection1
        : props.id === 2 && styles.textSection2}`}>
        <h2>
            {props.title}
        </h2>
        <p className={`${styles.desc}`}>
            {props.desc}
        </p>
    </div>
);

export default TextSection;