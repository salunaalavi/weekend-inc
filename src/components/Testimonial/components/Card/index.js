import styles from "./styles.module.scss";

const Card = (props) => (
    <div className={`${styles.card} text-start text-black bg-white`}>
        <h2>
            {props.title}
        </h2>
        <p className={`small ${styles.content}`}>
            {props.content}
        </p>
    </div>
);

export default Card;
