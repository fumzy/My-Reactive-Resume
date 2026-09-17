import { useState } from "react";
import { RESUME_CONTENT, RESUME_SECTIONS } from "./data";
import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts";
import { LetsConnect } from "./components/LetsConnect/LetsConnect.jsx";

function App() {
  const [selectedSection, setSelectedSection] = useState("about");
  const selectedContent = RESUME_CONTENT[selectedSection];

  return (
    <div>
      <Header />
      <main>
        <section className="hero-actions" aria-label="Resume actions">
          <a className="button primary" href="/Fumnanya-Resume.pdf" download>
            Download Resume
          </a>
          <a className="button secondary" href="mailto:nanya.loveth@gmail.com">
            Contact Me
          </a>
        </section>
        <section id="core-concepts">
          <h2>Explore My Resume</h2>
          <ul>
            {RESUME_SECTIONS.map((section) => (
              <CoreConcepts
                key={section.id}
                {...section}
                isSelected={selectedSection === section.id}
                onSelect={() => setSelectedSection(section.id)}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <div id="tab-content">
            <h3>{selectedContent.title}</h3>
            {selectedContent.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {selectedContent.items && (
              <ul>
                {selectedContent.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            {selectedContent.groups && (
              <div className="skill-groups">
                {selectedContent.groups.map(([label, details]) => (
                  <p key={label}><strong>{label}:</strong> {details}</p>
                ))}
              </div>
            )}
            {selectedContent.roles && (
              <div className="experience-list">
                {selectedContent.roles.map((role) => (
                  <article key={`${role.company}-${role.title}`}>
                    <h4>{role.title} | {role.company}</h4>
                    <p className="role-dates">{role.dates}</p>
                    <ul>
                      {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>
        <LetsConnect />
      </main>
      <footer>© {new Date().getFullYear()} Fumnanya Loveth Adeyanju</footer>
    </div>
  );
}

export default App;
