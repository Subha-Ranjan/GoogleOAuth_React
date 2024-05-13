import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import LoginComponent from './components/LoginComponent'
import { gapi } from 'gapi-script'
import LogoutComponent from './components/LogoutComponent'
import Dashboard from './components/Dashboard'
const clientId = "67745895583-rqcqm6v8ca4ck0ldr7b4pe5fakgbs3j1.apps.googleusercontent.com"
const SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly"; 
function App() {
 
  const [user, setUser] = useState(null);

  function doLogIn(user){
    setUser(user);
    console.log("User's Data ==>\n", user);;
  }
  function doLogout(){
   setUser(null)
  }
  
  useEffect(
    ()=>{
      function start(){
        // gapi.client.init({ clientId: clientId, scope: SCOPES})
        gapi.auth2.init({ clientId: clientId, scope: ""})
      }
      gapi.load('client:auth2', start)
    
    }
  )

  return (
    <>
      

      
     { user!==null ? <><Dashboard user={user}/><LogoutComponent onLogin={doLogout}/></>: <LoginComponent onLogout={doLogIn}/>}
    </>
  )
}

export default App
