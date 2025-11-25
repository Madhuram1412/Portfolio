import React from "react";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Madhuram — Fullstack Developer</h1>
        <p>React · Node · MongoDB · HTML · CSS · JavaScript</p>
      </header>

      <section className="about">
        <h2>About me</h2>
        <p>
          Put your introduction here. Example: I am a B.Tech. student from Mahakal Institute of Technology (CSE).
        </p>
        <ul className="meta">
          <li><strong>Soft skills:</strong> Creativity, Teamwork, Communication</li>
          <li><strong>Hobbies:</strong> Gym, Playing cricket, Listening to music</li>
          <li><strong>Education:</strong> 3rd year, 5th semester (update as needed)</li>
        </ul>
      </section>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Madhuram</small>
      </footer>
    </div>
  );
}
