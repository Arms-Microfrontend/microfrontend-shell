import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ResourceManager from "./Pages/ResourceManager";
import LoanManager from "./Pages/LoanManager";
import ContractManager from "./Pages/ContractManager";
import "./App.css";
import resourceLogo from "./assets/resource-icon.svg";

function App() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionTitle) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [sectionTitle]: !prevSections[sectionTitle],
    }));
  };

  return (
    <Router>
      <div className="App">
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark-bg-gray-800 dark-border-gray-700">
          <div className="px-3 py-5 lg-px-5 lg-pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <span className="self-center text-3xl font-semibold sm-text-2xl whitespace-nowrap dark-text-white">
                  Page Based Microfrontend using Iframes
                </span>
              </div>
            </div>
          </div>
        </nav>

        <div className="main">
          <div className="sidebar">
            <ul>
              <li className="heading">
                <div className="header">
                  <img src={resourceLogo} alt="" />
                  <span className="title" onClick={() => toggleSection("resourceManager")}>
                    Resource Manager
                  </span>
                </div>

                {openSections["resourceManager"] && (
                  <ul className="list">
                    <li>
                      <Link to="/resource-manager/project-manager">
                        Project Manager
                      </Link>
                    </li>
                    <li>
                      <Link to="/resource-manager/client-manager">
                        Client Manager
                      </Link>
                    </li>
                    <li>
                      <Link to="/resource-manager/skill-manager">
                        Skill Manager
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="heading">
              <div className="header">
                  <img src={resourceLogo} alt="" />
                  <span className="title" onClick={() => toggleSection("loanManager")}>
                    Loans Manager
                  </span>
                </div>
                {openSections["loanManager"] && (
                  <ul className="list">
                    <li>
                      <Link to="/loan-manager/view-loans">Your Loans</Link>
                    </li>
                    <li>
                      <Link to="/loan-manager/add-loans">Manage Loans</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="heading">
              <div className="header">
                  <img src={resourceLogo} alt="" />
                  <span className="title" onClick={() => toggleSection("contractManager")}>
                    Contract Manager
                  </span>
                </div>
                {openSections["contractManager"] && (
                  <ul className="list">
                    <li>
                      <Link to="/contract-manager">Contract Approvals</Link>
                    </li>
                    {/* <li>
                      <Link to="/loan-manager/add-loans">Manage Loans</Link>
                    </li> */}
                  </ul>
                )}
              </li>
            </ul>
          </div>
          <div className="microfrontend-iframe">
            <Routes>
              <Route path="/resource-manager/*" element={<ResourceManager />} />
              <Route path="/loan-manager/*" element={<LoanManager />} />
              <Route path="/contract-manager/*" element={<ContractManager />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
