import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <header className={styles.App__header}>
                <h1 className={`uppercase`}>
                    WEEKEND FROM HOME
                </h1>
                <h2>
                    WEEKEND FROM HOME
                </h2>
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
            </header>
        </div >
    );
}

export default App;
