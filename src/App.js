import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import Home from './pages/Home';

const useStyles = createUseStyles({
    app: {
        height: '100%',
        background: 'yellow',
    },
    navbar: {
        height: 70,
        width: '100%',
        background: 'white'
    },
    content: {
        
    }
})

const App = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.app}>
                <div className={classes.navbar}>

                </div>
                <Switch>
                    <div className={classes.content}>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                    </div>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
