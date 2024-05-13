import React from "react";
import { GoogleLogin } from "react-google-login";
const clientId = import.meta.env.CLIENTID;

function LoginComponent({onLogout}) {
    
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Sign In"
        onSuccess={(user) =>
            onLogout(user.profileObj)
        }
        onFailure={(error) =>
          console.log(
            "There was some issue in logging in. \nError:",
           error
          )
        }
        isSignedIn={true}
        signInFlow="redirect"
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default LoginComponent;
