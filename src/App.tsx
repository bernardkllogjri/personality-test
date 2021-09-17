import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { Quiz, FinishingPage, Home } from './pages';
import { Footer, Header} from './components';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <>
            <Header/>
            <Home />
            <Footer />
          </>
        </Route>
        <Route path="/start-quiz" exact>
          <Quiz />
        </Route>
        <Route path="/finish-quiz" exact>
          <>
            <Header/>
            <FinishingPage />
            <Footer />
          </>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
