import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';

 
const Home = ({user}) => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <>
            <nav className="homenav">
                <p>
                    WELCOME {user ? user.email : "Guest"}
                </p>
 
                <div>
                    {user ? 
        			<button onClick={handleLogout}>
                        Logout
                    </button>
                    :
                    <button className="login-button" onClick={() => navigate("/login")}>
                        Login
                    </button>
                    }
        		</div>
            </nav>
            <main>
                <section className='todolistCard'>
                    <div>
                        <button className='todoboton' onClick={() => navigate("/ToDoList")}>
                            To Do List
                        </button>
                    </div>
                </section>
                <section className='memoCard'>
                    <div>
                        <button className='memoboton' onClick={() => navigate("/memorygame")}>
                            Card Game
                        </button>
                    </div>
                </section>
                <footer className='homefooter'>
                    <p> © 2023 - All rights reserved </p>
                </footer>
            </main>
        </>
    )
}
 
export default Home;