import styles from "./styles.module.scss";

const Footer = (props) => (
    <footer className={`bg-bluebonnet`} {...props}>
        <div className={`flex ${styles.container} mx-auto justify-between items-center`}>
            <h5 className={`text-white`}>wknd<span className={`font-normal`}>@2020</span></h5>
            <h5 className={`${styles.version} font-light text-white border-white`}>alpha version 0.1</h5>
        </div>
    </footer>
);

export default Footer;