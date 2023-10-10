import React, { useState } from 'react';
import "./App.css";
import resourceLogo from './assets/resource-icon.svg'

function App() {
  const sidebarItems = [
    {
      title: "Resource Manager",
      items: [
        { id: 1, name: 'Project manager', link: 'http://localhost:3001/project-manager' },
        { id: 2, name: 'Client manager', link: 'http://localhost:3001/client-manager' },
        { id: 3, name: 'Skill manager', link: 'http://localhost:3001/skill-manager' },
      ]
    },
    {
      title: "Loan Manager",
      items: [
        { id: 1, name: 'Your loans', link: 'http://127.0.0.1:5173/' },
        { id: 2, name: 'Manage loans', link: 'http://127.0.0.1:5173/' },
      ]
    }
  ];
  

  const [selectedItem, setSelectedItem] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const toggleSection = (sectionTitle) => {
    setOpenSection(openSection === sectionTitle ? null : sectionTitle);
  };

  return (
    <div className="App">
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-5 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <span className="self-center text-3xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Page Based Microfrontend using Iframes
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div className="main">
      <div className="sidebar">
      {sidebarItems.map((section) => (
        <div key={section.title} className="section">
          <div className="heading" onClick={() => toggleSection(section.title)}>
            <img src={resourceLogo} alt="" />
            <h2>{section.title}</h2>
          </div>

          {openSection === section.title && (
            <ul className="sidebar-list">
              {section.items.map((item) => (
                <li
                  key={item.id}
                  className={`sidebar-item ${item === selectedItem ? 'active' : ''}`}
                  onClick={() => handleItemClick(item)}
                >
                  <span className="sidebar-link">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
      <div className="microfrontend-iframe">
        <iframe
          src={selectedItem ? selectedItem.link : ''}
          width="100%"
          height="100%"
          title="react"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default App;
