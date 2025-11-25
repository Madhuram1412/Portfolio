import React from "react";

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <h1>Madhuram — Fullstack Developer</h1>
        <p>React · Node · MongoDB · HTML · CSS · JavaScript</p>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>I am a B.Tech. student skilled in web development and building digital solutions.</p>
        <ul>
          <li><strong>Soft Skills:</strong> Communication, Teamwork, Creativity</li>
          <li><strong>Hobbies:</strong> Gym, Cricket, Music</li>
          <li><strong>Education:</strong> 3rd Year | 5th Semester | CSE</li>
        </ul>
      </section>

      <footer>
        <small>© {new Date().getFullYear()} Madhuram</small>
      </footer>
    </div>
  );
}
