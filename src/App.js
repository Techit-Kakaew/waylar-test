import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PhotoBook from './components/PhotoBook'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PhotoBook} />
      </Switch>
    </Router>
  )
}

export default App;
