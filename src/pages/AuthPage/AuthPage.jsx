import { useState } from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../Components/LoginForm/LoginForm";
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
		<h1>Log in or Sign Up to Make a Trip Plan</h1>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <div>
        <button onClick={() => setShowLogin(!showLogin)}>
          {showLogin ? "SIGN UP" : "LOG IN"}
        </button>
      </div>
    </main>
  );
}
