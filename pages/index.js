import React, {useContext} from 'react';

import {Context} from '../context';

import {useRouter} from 'next/router';

import axios from 'axios';

export default function Auth() {
  const{ username, setUsername, secret, setSecret } = useContext(Context)
  const router = useRouter(); 

function onSubmit(e){
  e.preventDefault()

  if(username.length === 0 || secret.length === 0) return

  axios.put(
    "https://api.chatengine.io/users",
    {username, secret},
    {headers: {"Private-key": "f1cbe800-3086-4c9b-81f8-1c4c86744cd2"}}
  )
  .then(r=> router.push("/chats"))
}

//hello world
  return(
    <div className='background'>
      <div className='auth-container'>
        <form className='auth-form' onSubmit={e => e.preventDefault()}>
          <div className='auth-title'>NextJS chat</div>

          <div className='input-container'>
            <input
              placeholder='Email'
              className='text-input'
              onChange={e => setUsername(e.target.value)}
            />
          </div>

          <div className='input-container'>
            <input
              type="password"
              placeholder='Password'
              className='text-input'
              onChange={e => setSecret(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className='submit-button'
          >
            Login / Sign up
          </button>
        </form>
      </div>
    </div>
  )
}