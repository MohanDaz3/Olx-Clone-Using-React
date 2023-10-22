import React, { useState,useContext } from 'react';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import './Signup.css';
import { FirebaseContext } from '../../store/Context';

export default function Signup() {
  const history = useHistory()
  const [username,setUsername]=useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('')

  const{firebase}=useContext(FirebaseContext)

  const handleSignIn=(e)=>{
    e.preventDefault();
    if (!username) {
      alert('Username is required.');
      return;
    }

    if (!email) {
      alert('Email is required.');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!phone) {
      alert('Phone number is required.');
      return;
    }

    if (phone.length !== 10) {
      alert('Phone number should be 10 digits.');
      return;
    }

    if (!password) {
      alert('Password is required.');
      return;
    }

    if (password.length < 6) {
      alert('Password should be at least 6 characters long.');
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone,
        }).then(()=>{
          history.push("/login")
        })
      })
    });
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSignIn}>
          <label htmlFor="username">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="name"
            defaultValue=""
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue=""
          />
          <br />
          <label htmlFor="phone">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue=""
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue=""
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
