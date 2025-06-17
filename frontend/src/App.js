import React from "react";

function App() {
  const handleLogin = async () => {
    await fetch("http://localhost:3001/login", { credentials: "include" });
    alert("Logged in! Cookies are set.");
  };

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>🎬 MovieApp</h1>
      <button onClick={handleLogin}>Login to Watch</button>
      <br />
      <br />
      <video width="640" height="360" controls>
        <source src="https://d2wf4b0x7loob7.cloudfront.net" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default App;
