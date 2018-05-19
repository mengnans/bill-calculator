import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from 'react-router-dom';
import FunctionPage from './pages/FunctionPage'

const Home = () => (
    <div>
        <h2>Home</h2>
        <Link to={"/function"}>link</Link>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const NoMatch = () => (
    <div>
        <h2>NoMatch</h2>
    </div>
)



const MyRouter = () => (
    <Router>
        <Switch>
            <Route
                exact path="/"
                component={Home}>

            </Route>
            <Route
                path="/about"
                component={About}
            />
            <Route
                path="/function"
                component={FunctionPage}
            />
            <Route component={NoMatch}/>
        </Switch>
    </Router>
);

export default MyRouter;
