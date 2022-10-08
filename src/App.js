import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <div className={styles.App__header}>
                <h1 className={`uppercase`}>
                    WEEKEND FROM HOME
                </h1>
                <h2>
                    WEEKEND FROM HOME
                </h2>
                <h3>
                    WEEKEND FROM HOME
                </h3>
                <h4>
                    WEEKEND FROM HOME
                </h4>
                <h5>
                    WEEKEND FROM HOME
                </h5>
                <p>
                    WEEKEND FROM HOME
                </p>
                <p className={`large`}>
                    p-Large WEEKEND FROM HOME
                </p>
                <p className={styles.small}>
                    p-small WEEKEND FROM HOME
                </p>
                <p className={styles.xsmall}>
                    p-xsmall WEEKEND FROM HOME
                </p>
                <img src={logo} className={styles.App__logo} alt="logo" />
                <p className={`${styles.large} ${styles.bold}`}>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className={styles.App__link}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </div>
        </div >
    );
}

export default App;
