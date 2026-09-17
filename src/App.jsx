import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { Header } from "./components/Header/Header.jsx";
import { CoreConcepts } from "./components/CoreConcepts";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedContent, setSelectedContent] = useState();

  function handleSelect(selectedButton) {
    setSelectedContent(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <CoreConcepts key={index} {...concept} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={selectedContent === "components"}
              onSelect={() => handleSelect("components")}
            >
              Component
            </TabButton>
            <TabButton
              isSelected={selectedContent === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedContent === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedContent === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedContent ? (
            <p>Please select a tab to view the example.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedContent].title}</h3>
              <p>{EXAMPLES[selectedContent].description}</p>
              <pre>
                <code>{EXAMPLES[selectedContent].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
