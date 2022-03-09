import ToolBar from './Components/TopBar/TopBar'
import Home from './Pages/Home/Home'
import Single from './Pages/Single/Single'
import Write from './Pages/Write/Write';
import Login from './Pages/login/login';
import Register from './Pages/Register/Register'

import { BrowserRouter as Router , Route , Routes  } from 'react-router-dom'
import { useContext } from 'react';
import {Context} from './context/Context'


function App() {
  const { user } = useContext(Context);
  return ( 
    <Router>
      <ToolBar />
      <Routes>
        <Route exact path='/' element={user ? <Home /> : <Register />}></Route>
        <Route exact path='/register' element={user ? <Home /> : <Register />}></Route>
        <Route exact path='/login' element={user ? <Home /> : <Login />}></Route>
        <Route exact path='/write' element={user ? <Write /> : <Register />}></Route>
        <Route exact path='/post/:postId' element={<Single />}></Route>
      </Routes>
    </Router>
    );
}

export default App;
