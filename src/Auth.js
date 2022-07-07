import React from 'react';
import { useState } from 'react';

export default function Auth({ setUser }) {
  return (
    <div className="auth">
      <form>
        <div className="sign-up">
          <h3>Sign Up</h3>
          <label>
            email:
            <input />
          </label>
          <label>
            password:
            <input />
          </label>
          <button>Sign Up</button>
        </div>
      </form>
      <form>
        <div className="sign-in">
          <h3>Sign In</h3>
          <label>
            email:
            <input />
          </label>
          <label>
            password:
            <input />
          </label>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
}
