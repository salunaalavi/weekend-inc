import styles from './styles.module.scss';

const Hero = () => (
    <div className={`flex ${styles.hero} justify-center text-white`}>
        <div>
            <h1 className={`uppercase`}>
                WEEKEND FROM HOME
            </h1>
            <h3 className={`italic font-normal`}>
                Stay active with a little workout.
            </h3>
            <div className={`relative flex ${styles.wrapper} justify-center`}>
                <button className={`bg-white`}>
                    <h5 className={`font-normal text-black`}>
                        Let's Go
                    </h5>
                </button>
            </div>
        </div>
    </div>
);

export default Hero;
