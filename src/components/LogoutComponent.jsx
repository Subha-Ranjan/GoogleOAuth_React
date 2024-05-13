import React from 'react'
import { GoogleLogout } from 'react-google-login'
const clientId=import.meta.env.CLIENTID;
function LogoutComponent({onLogin}) {
  return (
    <div>
        <GoogleLogout
        clientId={clientId}
        buttonText='Sign Out'
        onFailure={()=>console.log("Thre was some issue in Logging out")}
        onLogoutSuccess={()=>{ onLogin();}}
        />
    </div>
  )
}

export default LogoutComponent