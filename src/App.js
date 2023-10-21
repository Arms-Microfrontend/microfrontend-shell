import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import ResourceManager from "./Pages/ResourceManager";
// import LoanManager from "./Pages/LoanManager";
// import ContractManager from "./Pages/ContractManager";
import "./App.css";
import resourceLogo from "./assets/resource-icon.svg";
import contractLogo from "./assets/contract-icon.svg";
import loansLogo from "./assets/loans-icon.svg";
import menuIcon from "./assets/menu-icon.svg";

function App() {
  const [ setOpenSections] = useState({});
  const [userData, setUserData] = useState([]);
  const [openMenu, setOpenMenu] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(true);

  const toggleSection = (sectionTitle) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [sectionTitle]: !prevSections[sectionTitle],
    }));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark-bg-gray-800 dark-border-gray-700">
          <div className="px-3 py-5 lg-px-5 lg-pl-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-between w-full mx-20">
                <div>
                  <span className="self-center text-3xl font-semibold sm-text-2xl whitespace-nowrap dark-text-white">
                    Employee Management
                  </span>
                  <span
                    onClick={() => setToggleSidebar(!toggleSidebar)}
                    className="toggleSidebar"
                  >
                    {toggleSidebar ? "Hide sidebar" : "Show sidebar"}
                  </span>
                </div>
                <img
                  onClick={() => setOpenMenu(!openMenu)}
                  className="menu_icon"
                  src={menuIcon}
                  alt=""
                />
                {openMenu && (
                  <div className="menu">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={process.env.REACT_APP_RESOURCE_MANAGEMENT}
                    >
                      <div className="menu-item">
                        <img src={resourceLogo} alt="" />
                        <span>Resource</span>
                      </div>
                    </a>

                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={process.env.REACT_APP_LOANS_MANAGEMENT}
                    >
                      <div className="menu-item">
                        <img src={loansLogo} alt="" />
                        <span>Loans</span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href={process.env.REACT_APP_CONTRACT_MANAGEMENT}
                    >
                      <div className="menu-item">
                        <img src={contractLogo} alt="" />
                        <span>Contract</span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                    >
                      <div className="menu-item">
                        <img src={resourceLogo} alt="" />
                        <span>Invoice</span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                    >
                      <div className="menu-item">
                        <img src={resourceLogo} alt="" />
                        <span>Procurement</span>
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="/"
                    >
                      <div className="menu-item">
                        <img src={resourceLogo} alt="" />
                        <span>Clock it</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        <div className="main">
          {toggleSidebar && (
            <div className="sidebar">
              <ul>
                <li className="heading">
                  <div className="header">
                    <img src={resourceLogo} alt="" />
                    <span
                      className="title"
                      onClick={() => toggleSection("resourceManager")}
                    >
                      Documents
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          )}

          <div className="main-page">
            <button className="add_button">Add Employee</button>
            <div className="grid-user">
              {userData.users && userData.users.length > 0 ? (
                userData.users.map((user) => (
                  <div className="profile-card" key={user.id}>
                    <img src={user.image} alt="" />
                    <div className="card-details">
                      <span>
                        {user.firstName} {user.lastName}
                      </span>
                      <span>{user.company.title}</span>
                      <span>{user.email}</span>
                      <span>{user.phone}</span>
                      <button>View</button>
                    </div>
                  </div>
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
