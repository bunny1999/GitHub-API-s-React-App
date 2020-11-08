import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import PageNotFound from './pages/page_not_found'
import Provider from './context/provider';
import Signin from './components/signin';
import Signup from './components/signup';
import OwnerProjects from './pages/owner_projects';

const Routes = ()=>(
    <Router>
        <Provider>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/owner_projects" component={OwnerProjects} />
                <Route exact component={PageNotFound}/>
            </Switch>
        </Provider>
    </Router>
)

export default Routes;