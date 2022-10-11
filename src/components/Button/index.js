import "./styles.module.scss";

const Button = (props) => (
    <button className={`bg-white`}>
        <h5 className={`font-normal`}>
            {props.children}
        </h5>
    </button>
);

export default Button;