import Card from "./components/Card";
import path from "../../assets/ornaments/path.svg";
import styles from "./styles.module.scss";

const HelpTips = (props) => (
    <div className={`relative ${styles.helpTips}`}>
        <h2 className={`${styles.title}`}>
            Help & Tips
        </h2>
        <div className={`grid ${styles.helpTipsWrapper} place-content-center`}>
            {
                props.tips && props.tips.map(({ id, title, image }) => (
                    <Card key={id} title={title} image={image} />
                ))
            }
        </div>
        <img className={`${styles.path}`} src={path} alt="" />
    </div>
);

export default HelpTips;
