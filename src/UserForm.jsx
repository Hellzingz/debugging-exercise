import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  function handleChange(e) {
    const value = e.target.value;
    setUsername(value);
  
    if (value.trim().length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    alert(`Submitted: ${username}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          value={username}
          onChange={handleChange}
          placeholder="Enter username"
        />
      </label>
      {error && <p>Username must be at least 3 characters</p>}
      <button type="submit">Submit</button>
    </form>
  );
}
