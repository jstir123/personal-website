import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import NavBar from './components/NavBar';

const useStyles = createUseStyles({
    app: {
        height: '100%'
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
        marginBottom: 70,
        boxSizing: 'border-box',
        background: 'transparent',
        zIndex: 2,
        overflowY: 'auto',
        overflowX: 'hidden'
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
                
                <div className={classes.content}>
                    <Switch>

                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route path='/about'>
                            <About />
                        </Route>

                        <Route path='/resume'>
                            <Resume />
                        </Route>

                        <Route path='/projects'>
                            <Projects />
                        </Route>

                        <Route>
                            <NotFound />
                        </Route>

                    </Switch>
                </div>
                
            </div>
        </Router>
    );
}

export default App;
