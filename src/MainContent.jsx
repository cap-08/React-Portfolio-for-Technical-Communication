import React from 'react';

function MainContent() {
  return (
    <main className="main-content">
      <section id="essay" className="portfolio-section glass-card">
        <h2 className="section-title">Essay <span className="dot">.</span></h2>
        <div className="divider"></div>
        <div className="section-content">
          <div className="placeholder-content">
            <h3>Explore The Written Word</h3>
            <img src="/images/essay.jpeg" alt="Handwritten Essay on Communication" className="collage-image" />
          </div>
        </div>
      </section>

      <section id="collage" className="portfolio-section glass-card">
        <h2 className="section-title">Collage (Visual) <span className="dot">.</span></h2>
        <div className="divider"></div>
        <div className="section-content">
          <div className="placeholder-content">
            <h3>Visual Symphony</h3>
            <p>Business Communication Hub Collage</p>
            <img src="/images/collage.png" alt="Business Communication Hub" className="collage-image" />
            
            <div style={{ marginTop: '30px', textAlign: 'left' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '10px' }}>Thoughts on Business Communication</h4>
              <p style={{ fontSize: '0.95rem' }}>
                This piece aims to visually summarize the multifaceted nature of contemporary business communication. By condensing intricate frameworks, like Grice's Cooperative Principle and the Shannon-Weaver Model, into a unified "Hub," I hoped the infographic would function as a useful reference tool for comprehending information flow within organizations. By emphasizing both digital tools and crucial human components like active listening and empathy that are necessary for professional success, I hoped to close the gap between theoretical communication science and real-world workplace application. The intended audience consists of management students, corporate trainers, and entry-level professionals who need a concise, high-level summary of efficient communication techniques in a hectic setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="speech" className="portfolio-section glass-card">
        <h2 className="section-title">Speech <span className="dot">.</span></h2>
        <div className="divider"></div>
        <div className="section-content">
          <div className="placeholder-content">
            <h3>Vocal Expression</h3>
            <p style={{ marginBottom: '20px' }}>Listen to the speech recording below:</p>
            <audio controls style={{ width: '100%', maxWidth: '500px', outline: 'none', borderRadius: '8px', marginBottom: '30px' }}>
              <source src="/audio/speech.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            
            <div style={{ textAlign: 'left', marginTop: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '10px' }}>Thoughts on Technical Leadership</h4>
              <p style={{ marginBottom: '15px' }}>
                Technical leadership in engineering has evolved from pure technical mastery into a dual-discipline role that bridges the gap between complex systems and human collaboration. It requires a "Lead-by-Example" philosophy where foundational knowledge in areas like computational logic and system architecture provides the necessary credibility to guide a team.
              </p>
              <p style={{ marginBottom: '15px' }}>
                However, the role extends far beyond technical proficiency. A leader must act as a translator, distilling intricate concepts—from memory management to circuit analysis—into clear, actionable insights for non-technical stakeholders. This necessitates a high standard of professional communication and a commitment to inclusive, structured environments. By utilizing clean design and logical documentation, a leader ensures that project objectives remain visible and accessible to all members.
              </p>
              <p>
                Ultimately, effective leadership is about managed autonomy. It involves providing enough structure to ensure technical rigor while fostering the creative freedom needed for innovation. As engineering projects grow in complexity, the most successful leaders are those who balance the precision of a programmer with the strategic vision of a manager, ensuring that the systems built are as resilient as the teams that create them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="ai" className="portfolio-section glass-card">
        <h2 className="section-title">AI Tools Used <span className="dot">.</span></h2>
        <div className="divider"></div>
        <div className="section-content desc-block">
          <p style={{ marginBottom: '20px' }}>
            Constructed utilizing cutting edge AI technologies to iterate rapidly across architectures—migrating from centered layouts to this clean split-view.
          </p>
          <div style={{ marginTop: '20px', textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '10px' }}>AI Usage Disclosure</h4>
            <ul style={{ listStyleType: 'none', paddingLeft: 0, lineHeight: 1.6, fontSize: '0.95rem' }}>
              <li style={{ marginBottom: '8px' }}><strong>• Tools Used:</strong> Gemini for minor visual refinement.</li>
              <li style={{ marginBottom: '8px' }}><strong>• Parts Involved:</strong> Final layout adjustment and background styling.</li>
              <li style={{ marginBottom: '8px' }}><strong>• Nature of Use:</strong> Editing and Formatting. AI was used strictly to clean up the visual presentation of my original infographic. The conceptual framework, key theories, and content selection were entirely my own work.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default MainContent;
