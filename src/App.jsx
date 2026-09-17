import { useState } from "react";
import { RESUME_CONTENT, RESUME_SECTIONS } from "./data";
import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts";
import { LetsConnect } from "./components/LetsConnect/LetsConnect.jsx";
import { ResumeDetails } from "./components/ResumeDetails.jsx";

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
        <ResumeDetails content={selectedContent} />
        <LetsConnect />
      </main>
      <footer>© {new Date().getFullYear()} Fumnanya Loveth Adeyanju</footer>
    </div>
  );
}

export default App;
