import React from 'react';
import {Link} from 'react-router';
import {Layout} from 'react-mdl';

import Header from 'app/components/layout/Header';
import Drawer from 'app/components/layout/Drawer';

class App extends React.Component {
    render() {
        return (
            <Layout fixedHeader>
                <Header currentPathName={this.props.routes[this.props.routes.length-1].component.name} />
                <Drawer />
                {this.props.children}
            </Layout>
        )
    }
}

export default App;