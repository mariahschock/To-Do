import React from 'react';
import { useState } from 'react';
import { signIn, signUp } from './services/fetch-utils';

export default function Auth({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUpSubmit(e) {
    e.preventDefault();

    const user = await signUp(signUpEmail, signUpPassword);

    setUser(user);
  }

  async function handleSignInSubmit(e) {
    e.preventDefault();

    const user = await signIn(signInEmail, signInPassword);

    setUser(user);
  }

  return (
    <div className="auth">
      <form onSubmit={handleSignUpSubmit}>
        <div className="sign-up">
          <h3>Sign Up</h3>
          <label>
            email:
            <input onChange={e => setSignUpEmail(e.target.value)} value={signUpEmail} type="email" />
          </label>
          <label>
            password:
            <input onChange={e => setSignUpPassword(e.target.value)} value={signUpPassword} type="password" />
          </label>
          <button>Sign Up</button>
        </div>
      </form>
      <form onSubmit={handleSignInSubmit}>
        <div className="sign-in">
          <h3>Sign In</h3>
          <label>
            email:
            <input onChange={e => setSignInEmail(e.target.value)} value={signInEmail} type="email" />
          </label>
          <label>
            password:
            <input onChange={e => setSignInPassword(e.target.value)} value={signInPassword} type="password" />
          </label>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}
