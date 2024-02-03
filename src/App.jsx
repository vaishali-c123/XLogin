import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const App = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.userName === "user" && user.password === "password") {
      console.log("hi");
      navigate("/welcome");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {error && (
        <>
          <div className="error">{error}</div>
          <br />
        </>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.userName}
          onChange={(e) => setUser({ ...user, userName: e.target.value })}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
