import React, {useState, useEffect} from 'react';
import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import { BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase';
import ToDoListApp from './ToDoListApp';

 
function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
  onAuthStateChanged(auth, function (user) {
    if (user) {
      // User is signed in
      setUser(user);
    } else {
      // No user is signed in
      setUser(null);
    }
  });
}, []);

  return (
    <Router>
      <div>
        <section>                              
            <Routes> 
              <Route path="/" element={<Home user={user}/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/todolist" element={<ToDoListApp/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;