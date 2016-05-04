import React from 'react';
import {IndexLink, Link} from 'react-router';
import {Header, Navigation} from 'react-mdl';

const HeaderCustom = (props) => {
    const title = <span><span style={{ color: '#ddd' }}>React Relay Scaffolding / </span><strong>{props.currentPathName}</strong></span>;

    return (<Header title={title}>
        <Navigation>
            <IndexLink to="/">Home</IndexLink>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Navigation>
    </Header>);
};

HeaderCustom.PropTypes = {
    currentPathName: React.PropTypes.string.isRequired
};

export default HeaderCustom;