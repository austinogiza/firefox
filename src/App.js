
import './App.css';
import Layout from './Container/Layout';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import ScrollRestore from './Components/ScrollRestore'
function App() {
  return (
<Layout>

  <Router>
  <ScrollRestore/>
<Switch>

  <Route component={Home} path='/' exact/>
</Switch>

  </Router>
</Layout>
  );
}

export default App;
