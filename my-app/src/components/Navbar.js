import React from "react";
import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import SettingsPowerIcon from "@mui/icons-material/SettingsPower";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth0();

  // redirect to Profile Page
  const Profile_page = () => {
    console.log({ user });
    navigate("/profile");
  };

  // Logout function and redirect to home Page

  const handlelogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <nav className="nav">
      <div className="heading">
        <h3 className="heading-text">Authentication Demo</h3>
      </div>

      <>
        {/* If user is Authenticated then show the icon and drop-box */}
        {isAuthenticated ? (
          <>
            <div className="dropdown-content">
              <img src={user.picture} alt={user.name} className="img" />
              <span className="drop-icon">
                <KeyboardArrowDownIcon />
              </span>

              <div className="data">
                <a href="#/" className="name">
                  {user.nickname}
                </a>
                <hr />
                <a onClick={Profile_page}>
                  <PersonIcon /> <span className="icon">Profile</span>
                </a>
                <hr />
                <a href="/" onClick={handlelogout}>
                  <SettingsPowerIcon />
                  <span className="icon">Logout</span>
                </a>
              </div>
            </div>
          </>
        ) : (
          <>{/* If user is Not Authenticated then nothing show */}</>
        )}
      </>
    </nav>
  );
};

export default Navbar;
