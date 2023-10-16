import React from "react";
import { useLocation } from "react-router-dom";

function ResourceManager() {
  const location = useLocation();

  // Determine the route based on the path
  let route = "";

  if (location.pathname === "/resource-manager/project-manager") {
    route = "project-manager";
  } else if (location.pathname === "/resource-manager/client-manager") {
    route = "client-manager";
  } else if (location.pathname === "/resource-manager/skill-manager") {
    route = "skill-manager";
  }

  // Construct the full URL
  const fullURL = `${process.env.REACT_APP_RESOURCE_MANAGEMENT}${route}`;

  return (
    <iframe
      src={fullURL}
      width="100%"
      height="100%"
      title="ResourceManager"
    ></iframe>
  );
}

export default ResourceManager;
