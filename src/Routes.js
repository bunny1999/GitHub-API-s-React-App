import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App'
import PageNotFound from './pages/page_not_found'
import Provider from './context/provider';
import Signin from './pages/signin';
import Signup from './pages/signup';
import OwnerProjects from './pages/owner_projects';
import SearchedUserProfile from './pages/searched_user_profile';
import SearchedUserProjects from './pages/serached_user_projects';

const Routes = ()=>(
    <Router>
        <Provider>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/user/profile" component={SearchedUserProfile} />
                <Route exact path="/user/projects" component={SearchedUserProjects} />
                <Route exact path="/owner_projects" component={OwnerProjects} />
                <Route exact component={PageNotFound}/>
            </Switch>
        </Provider>
    </Router>
)

export default Routes;