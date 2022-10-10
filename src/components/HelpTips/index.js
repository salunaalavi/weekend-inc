import Card from "./components/Card";
import styles from "./styles.module.scss";

const HelpTips = () => (
    <div className={`${styles.helpTips}`}>
        <h2 className={`${styles.title}`}>
            Help & Tips
        </h2>
        <div className={`grid ${styles.helpTipsWrapper} grid-rows-1 grid-flow-col place-content-center`}>
            <Card slug="Start quickly with simple steps" />
            <Card slug="Start quickly with simple steps" />
            <Card slug="Start quickly with simple steps" />
        </div>
    </div>
);

export default HelpTips;
