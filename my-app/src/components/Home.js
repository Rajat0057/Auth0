import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Home.css";

const Home = () => {
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();

  //  Function to redirect to the Google Account Page
  const googleLogin = () => {
    loginWithRedirect({
      connection: "google-oauth2",
      redirectUri: "http://localhost:3000/",
    });
    console.log({ user });
  };

  //  Function to redirect to the Facebook Page
  const facebookLogin = () => {
    loginWithRedirect({
      connection: "facebook",
      redirectUri: "http://localhost:3000/",
    });
    console.log({ user });
  };

  return (
    <div className="button-type">
      <>
        {/* If user is Authenticated then open show the user name */}
        {isAuthenticated ? (
          <>
            <a className="heading-name">Hi {user.name}</a>
          </>
        ) : (
          // If user is Not Authenticated then open show the Log-in button box
          <div className="box">
            <h4 className="left">Login to your Account</h4>
            <button className="google" onClick={googleLogin}>
              Signin using Google
            </button>
            <button className="facebook" onClick={facebookLogin}>
              Signin using Facebook
            </button>
            <button className="email" onClick={() => loginWithRedirect()}>
              Signin / Signup using Email Password
            </button>
          </div>
        )}
      </>
    </div>
  );
};

export default Home;
