import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import styles from './App.scss';
import Navigation from './containers/Navigation/Navigation';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer'

import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faStarOfLife,
    faSearch,
    faPaw,
    faBullhorn,
    faHome,
    faHeart,
    faBookReader,
    faMapMarked,
    faAddressCard,
    faSignInAlt
} from '@fortawesome/free-solid-svg-icons'

library.add(
    faStarOfLife,
    faSearch,
    faPaw,
    faBullhorn,
    faHome,
    faHeart,
    faBookReader,
    faMapMarked,
    faAddressCard,
    faSignInAlt
);

class App extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <>
                        <header>
                            <Navigation/>
                        </header>
                        <main>
                            <Main/>
                        </main>
                        <footer>
                            <Footer/>
                        </footer>
                    </>
                </BrowserRouter>
            </>
        );
    }
}

export default App;
