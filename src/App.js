
import './App.css';
import Vertab from './Vertab';
import Maintab from './Maintab';
import Storetab from './Storetab';
import Browse from './Browse';
import Library from './Library';
import Settingtab from './Settingtab';
import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';

function App() {

   return(
     <>
     <Router>
     <Vertab/>
     <Switch>
      <Route path="/" exact component={Storetab}/>
      <Route path="/Browse" exact component={Browse}/>
      <Route path="/Home" exact component={Maintab}/>
      <Route path="/Library"exact component={Library}/>
      <Route path="/Settings"exact component={Settingtab}/>
     </Switch>
     </Router>
     </>
   )
}

export default App;
