import React, { useState } from "react";
import {app} from '../../../Firebase/config'
import { Link } from "react-router-dom";
import {createUserWithEmailAndPassword,signOut,sendEmailVerification} from "firebase/auth";
import {getFirestore, addDoc ,collection,setDoc,doc,getDoc} from "firebase/firestore/lite";
import { auth } from "../../../Firebase/config";
// import {useHistory} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import "./Newlogheader.css";
import firebase from "firebase/compat/app";
function Newlogheader() {
  // const history = useHistory('')
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async(e)=>{
   e.preventDefault();
    const fireStore= getFirestore(app)
   try{
     await createUserWithEmailAndPassword(auth,email,password)
     await addDoc(collection(fireStore,"users"),{
       id:auth.currentUser.reloadUserInfo.localId,
       name:name,
       number:number
       
      }).then(()=>{
        // history.push("/signlogin")
        navigate("/signlogin")
      })
      
      console.log('Documents added');
      
    }catch(err){
      console.log(err);
    }
    console.log(auth?.currentUser);
   
  }
  
  return (
    <div>
      <div className="new-login">
        <div className="input-box-x">
          <div className="sign-up">
            <h1>Sign Up</h1>
            <form action="" onSubmit={signUp}>
              <input
                type="text"
                placeholder="Enter your name"
                required
                value={name}
                onChange={(event)=>setName(event.target.value)}
              />
              <br />
              <input 
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(event)=>setEmail(event.target.value)}
              />
              <br />
              <input
                type="number"
                placeholder="Enter your phone number"
                required
                value={number}
                onChange={(event)=>setNumber(event.target.value)}
              />
              <br />
              <input
               type="password"
               placeholder="Enter password"
               required
               value={password}
               onChange={(event)=>setPassword(event.target.value)}
                />
              <br />

              <button className="btn-signup" type="submit">Sign Up</button>
             
              {/* <button type="submit" onClick={} className="btn-signup">
                <Link to="/signlogin" className="signup-link">
                  Sign Up
                </Link>
              </button> */}
              {/* <input className='btn-signup'><Link to='/signlogin' className='signup-link'>Sign Up</Link></input> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newlogheader;
