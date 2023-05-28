import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../firebase';
 
const Signup = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });
 
   
    }
 
  return (
    <main className='loginmain' >        
        <section className='loginsection'>
            <div>
                <div>                  
                    <h1 className='maintitulo'> SignUp </h1>                                                                            
                    <form>
                    {/* <div>
                        <label htmlFor="name-address">
                            Name
                        </label>
                        <input className='loginInput'
                            type="name"
                            laberl="Name address"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            required                                                                    
                            placeholder="..."
                            />
                        </div>           */}                                                                                      
                        <div>
                            <label htmlFor="email-address">
                                Email address
                            </label>
                            <input className='loginInput'
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}  
                                required                                    
                                placeholder="..."                                
                            />
                        </div>

                        <div>
                            <label htmlFor="password">
                                Password
                            </label>
                            <input className='loginInput'
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required                                 
                                placeholder="..."              
                            />
                        </div>                                      
                        <button
                            type="submit" 
                            onClick={onSubmit}
                            className='signupbutton'

                        >  
                            Sign up                                
                        </button>                                   
                    </form>
                   
                    <p className="text-sm">
                        Already have an account?{' '}
                        <NavLink to="/login" >
                            Sign in
                        </NavLink>
                    </p>                   
                </div>
            </div>
        </section>
    </main>
  )
}
 
export default Signup