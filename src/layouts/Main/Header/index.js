import styles from "./styles.module.scss";

const Header = (props) => (
    <header {...props}>
        <div className={styles.header}>
            Ini Header
        </div>
    </header>
);

export default Header;