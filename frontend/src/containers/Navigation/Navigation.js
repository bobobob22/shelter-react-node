import React, {Component} from 'react';
import styles from './Navigation.scss';
import NavigationItem from './NavigationItem/NavigationItem'


class Navigation extends Component {
    render() {
        return (
            <nav className={styles.nav}>
                    <div className={styles.nav__left}>
                        <NavigationItem link="/" name="Wszystkie" icon="star-of-life" className={[styles.nav__icon__allItems]}/>
                        <NavigationItem link="/lost" name="Zaginione" icon="search" className={[styles.nav__icon__search]}/>
                        <NavigationItem link="/searching" name="Do adopcji" icon="paw"/>
                        <NavigationItem link="/" name="Znalezione" icon="bullhorn"/>
                        <NavigationItem link="/" name="Schroniska" icon="home"/>
                    </div>
                    <div className={styles.nav__right}>
                        <NavigationItem link="/" name="Ulubione" icon="heart"/>
                        <NavigationItem link="/" name="Twoje ogłoszenia" icon="book-reader"/>
                        <NavigationItem link="/" name="Wsparcie" icon="hands-helping"/>
                        <NavigationItem link="/addnotice" name="Dodaj ogłoszenie" icon="map-marked"/>
                        <NavigationItem link="/" name="Zarejestruj się" icon="address-card"/>
                        <NavigationItem link="/" name="Zaloguj się" icon="sign-in-alt"/>
                    </div>
            </nav>
        );
    }
}

export default Navigation;
