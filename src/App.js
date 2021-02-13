import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import Home from './pages/Home';
import NavBar from './components/NavBar';

const useStyles = createUseStyles({
    app: {
        height: '100%',
        // overflowY: 'scroll'
    },
    navbar: {
        position: 'fixed',
        top: 0,
        height: 70,
        width: '100%',
        background: 'transparent',
        zIndex: 4
    },
    content: {
        height: '100%',
        paddingTop: 70,
        background: 'transparent',
        zIndex: 2,
        overflow: 'auto'
    }
})

const App = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.app}>

                <div className='background-container'></div>
                <div className='stars'></div>
                <div className='twinkling'></div>
                <div className="purple-bar"></div>

                <div className={classes.navbar}>
                    <NavBar />
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
