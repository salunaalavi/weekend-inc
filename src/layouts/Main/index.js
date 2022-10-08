import Footer from "./Footer";
import Header from "./Header";
import styles from "./styles.module.scss";

const Index = ({ children, ...props }) => (
    <div className={styles.layout}>
        <Header {...props} />
        <main>{children}</main>
        <Footer />
    </div>
);
export default Index;