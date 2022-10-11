import styles from "./styles.module.scss";
import logo from "../../../assets/icons/logo.svg";

const Header = (props) => (
    <header className={`${styles.header}`} {...props}>
        <div className={`flex ${styles.container} mx-auto justify-start items-center`}>
            <div className={`flex`}>
                <img className={`${styles.logo}`} src={logo} alt="Logo" />
                <div>
                    <p className={`small flex`}>Good Morning</p>
                    <h5>Fellas</h5>
                </div>
            </div>
        </div>
    </header>
);

export default Header;