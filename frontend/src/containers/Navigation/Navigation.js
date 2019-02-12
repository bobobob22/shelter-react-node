import React, {Component} from 'react';
import styles from './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem'


class Navigation extends Component {
    render() {
        return (
            <nav>
                <div className={styles.navigation}>
                    <div className={styles.navigation__left}>
                        <NavigationItem link="/" name="Wszystkie"/>
                        <NavigationItem link="/lost" name="Zaginione"/>
                        <NavigationItem link="/" name="Do adopcji"/>
                        <NavigationItem link="/" name="Znalezione"/>
                        <NavigationItem link="/" name="Schroniska"/>
                    </div>
                    <div className={styles.navigation__right}>
                        <NavigationItem link="/" name="Ulubione"/>
                        <NavigationItem link="/" name="Twoje ogłoszenia"/>
                        <NavigationItem link="/" name="Wsparcie"/>
                        <NavigationItem link="/addnotice" name="Dodaj ogłoszenie"/>
                        <NavigationItem link="/" name="Zarejestruj się"/>
                        <NavigationItem link="/" name="Zaloguj się"/>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;
