import React from 'react';
import { signOut } from "firebase/auth";
import {auth} from '../firebase';
import { useNavigate } from 'react-router-dom';
import '../css/Home.css';
 
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
            <nav>
                <p>
                    WELCOME: {user ? user.email : "Guest"}
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
    )
}
 
export default Home;