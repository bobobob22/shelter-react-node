import React, {Component} from 'react';
import styles from './Home.scss';

class Home extends Component {
    render() {
        return (
            <div className={styles.home}>
                <p className={styles.paragraph}>
                    Home typically paragraph!
                </p>
            </div>
        );
    }
}

export default Home;
