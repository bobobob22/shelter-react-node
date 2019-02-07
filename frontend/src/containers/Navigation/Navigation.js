import React, {Component} from 'react';
import styles from './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem'


class Navigation extends Component {
    render() {
        return (
            <div className={styles.Navigation}>
                <div className={styles.navigation__left}>
                    <NavigationItem link="/" name="Wszystkie"/>
                    <NavigationItem link="/lost" name="Zaginione"/>
                    <NavigationItem link="/lost" name="Do adopcji"/>
                    <NavigationItem link="/lost" name="Znalezione"/>
                    <NavigationItem link="/lost" name="Schroniska"/>
                    <NavigationItem link="/add-new" name="Nowe ogłoszenie"/>
                </div>
                <div className={styles.Navigation__right}>
                    <NavigationItem link="/" name="Wszystkie"/>
                    <NavigationItem link="/lost" name="Zaginione"/>
                    <NavigationItem link="/lost" name="Do adopcji"/>
                    <NavigationItem link="/lost" name="Znalezione"/>
                    <NavigationItem link="/lost" name="Schroniska"/>
                    <NavigationItem link="/add-new" name="Nowe ogłoszenie"/>
                </div>
            </div>
        );
    }
}

export default Navigation;
