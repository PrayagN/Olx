import React, { useState,useContext } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import {FirebaseContext}  from '../../store/Context'
import { useNavigate } from 'react-router-dom';
export default function Signup() {
  const [username,setUsername] =useState('');
  const [email,setEmail] = useState('');
  const [password,setPassowrd] = useState('');
  const [mobile,setMobile] = useState('');
  const {firebase} = useContext(FirebaseContext);
  const navigate = useNavigate();
  const formSubmit =(e)=>{
    e.preventDefault();
   
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({id:result.user.uid,username:username,mobile:mobile}).then(()=>{navigate('/login')

        })
      })
    })
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={formSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={username}
            onChange ={(e)=>{
              setUsername(e.target.value);
            }}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange ={(e)=>{setEmail(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={mobile}
            onChange ={(e)=>{setMobile(e.target.value)}}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange ={(e)=>{setPassowrd(e.target.value)}}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
