import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function LoanManager() {
  // const navigate = useNavigate();
  const location = useLocation();

  // Determine the route based on the path
  const route = location.pathname === "/loan-manager/view-loans" ? "view-loans" : "add-loans";

  // Construct the full URL
  const fullURL = `${process.env.REACT_APP_LOANS_MANAGEMENT}${route}`;

  return (
    <iframe
      src={fullURL}
      width="100%"
      height="100%"
      title="LoanManager"
    ></iframe>
  );
}

export default LoanManager;
