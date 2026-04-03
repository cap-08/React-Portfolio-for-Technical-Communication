import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar glass-panel">
      <div className="sidebar-content">
        <header className="hero-section">
          <h1 className="hero-title">Jacob Antony</h1>
          <p className="intro-text">
            I am a driven Computer Science and Engineering student proficient in C, C++, Python, and Java, with a deep interest in AI/ML, Web Development, and Cybersecurity. I am passionate about problem-solving and exploring cutting-edge technologies, constantly working to strengthen my skills and apply them to real-world challenges and innovative projects.
          </p>
        </header>
        <nav className="navbar">
          <ul>
            <li><a href="#essay">Essay</a></li>
            <li><a href="#collage">Collage</a></li>
            <li><a href="#speech">Speech</a></li>
            <li><a href="#ai">AI Tools</a></li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
