import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ReposList from './components/ReposList'
import RepoDetailsPage from './components/RepoDetailsPage'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ReposList} />
      <Route exact path="/repos/:owner/:repo" component={RepoDetailsPage} />
    </Switch>
  </BrowserRouter>
)

export default App
