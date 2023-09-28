import { useState } from "react";
import { Tab } from "./Tab";
import "./styles.css";

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleChange = (newIndex) => {
    setCurrentIndex(newIndex);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Tab currentTab={currentIndex} onChange={handleChange}>
        <Tab.Headcontainer>
          <Tab.TabItem label="Tab 1" index={1} />

          <Tab.TabItem label="Tab 2" index={2} />

          <Tab.TabItem label="Tab 3" index={3} />
        </Tab.Headcontainer>

        <Tab.ContentContainer>
          <Tab.ContentItem index={1}></Tab.ContentItem>

          <Tab.ContentItem index={2}></Tab.ContentItem>

          <Tab.ContentItem index={3}></Tab.ContentItem>
        </Tab.ContentContainer>
      </Tab>
    </div>
  );
}
