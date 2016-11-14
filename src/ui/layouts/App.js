import React from 'react'
import { Grid } from 'react-bootstrap'
import { Block } from 'jsxstyle'
import AppNavigation from '../smart/AppNavigation.js'

const App = ({ children }) => (
    <Block>
        <AppNavigation />
        <Grid>
            { children }
        </Grid>
    </Block>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
