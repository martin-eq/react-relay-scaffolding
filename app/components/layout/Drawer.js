import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Drawer, Navigation} from 'react-mdl';

class DrawerCustom extends React.Component {


    render() {
        return (
            <Drawer title="Welcome!">
                <Navigation>
                    <IndexLink to="/">Home</IndexLink>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Drawer>
        );
    }
};

export default DrawerCustom;

