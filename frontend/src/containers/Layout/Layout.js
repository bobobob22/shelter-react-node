import React, {Component} from 'react';
import Navigation from '../../containers/Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

class Layout extends Component {
    render() {
        return (
            <>
                <header>
                    <Navigation/>
                </header>
                <Main/>
                <Footer/>
            </>
        );
    }
}

export default Layout;
