import "./Tab.css";
const { createContext, useContext } = require("react");

export const TabContext = createContext();
export const Tab = ({ currentTab, onChange, children }) => {
  return (
    <div className="tab">
      <TabContext.Provider value={{ currentTab, onChange }}>
        {children}
      </TabContext.Provider>
    </div>
  );
};

Tab.Headcontainer = ({ children }) => {
  return <div className="tab__container">{children}</div>;
};

Tab.TabItem = ({ label, index, children }) => {
  const context = useContext(TabContext);
  return (
    <div
      className="tab__tabItem"
      onClick={() => {
        context.onChange(index);
      }}
    >
      {label} {index}
      {children}
    </div>
  );
};

Tab.ContentContainer = ({ children }) => {
  return <div className="tab__contentContainer">{children}</div>;
};

Tab.ContentItem = ({ index }) => {
  const context = useContext(TabContext);

  return (
    <div
      className={`tab__contentItem ${index !== context.currentTab && "none"}`}
    >
      Content Item {" " + index}
    </div>
  );
};
