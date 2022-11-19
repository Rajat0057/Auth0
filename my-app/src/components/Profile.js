import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LockIcon from "@mui/icons-material/Lock";
import "./Profile.css";

const Profile = () => {
  const { user } = useAuth0();
  var email_verified;
  var connection;

  // Condition for the Select the icon

  if (user.sub.includes("google")) {
    connection = <GoogleIcon />;
  }
  if (user.sub.includes("facebook")) {
    connection = <FacebookIcon />;
  }
  if (!user.sub.includes("google") && !user.sub.includes("facebook")) {
    connection = <LockIcon />;
  }

  // Condition for the get the email_verified value from User

  if (user.sub.includes("google") || user.sub.includes("facebook")) {
    email_verified = "yes";
  } else {
    email_verified = "No";
  }

  return (
    // Profile box container where the user image and other user related information shown
    <div className="profile">
      <div className="profile-container">
        <div className="profile-box">
          <div className="img-box">
            <img src={user.picture} alt={user.name} className="box-image" />
          </div>
          <div className="profile-data">
            <div className="small-box">
              <div className="full-name"> {user.name}</div>
              <span className="email-name">{user.nickname}</span>
            </div>

            <ul type="none">
              <li>
                <span>Family Name :</span>
                {user.given_name}
              </li>
              <li>
                <span>Given Name :</span>
                {user.family_name}
              </li>

              <li>
                <span>Email :</span>
                {user.email}
              </li>
              <li>
                <span>Login Via :</span>
                <div className="connection-icon">{connection}</div>
              </li>
              <li>
                <span>Email Verified :</span>
                <div>{email_verified}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
