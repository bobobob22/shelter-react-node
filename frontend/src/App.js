import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import styles from './App.scss';
import Layout from './containers/Layout/Layout';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faStarOfLife,
    faSearch,
    faPaw,
    faBullhorn,
    faHome,
    faHeart,
    faBookReader,
    faHandsHelping,
    faMapMarked,
    faAddressCard,
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(faStarOfLife, faSearch, faPaw, faBullhorn, faHome, faHeart, faBookReader, faHandsHelping, faMapMarked, faAddressCard, faSignInAlt);

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <div className={styles.App}>
                        <Layout/>
                    </div>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
