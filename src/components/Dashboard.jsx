import React from 'react'


function Dashboard({user, onLogin}) {
  return (
    <div>
        <h1>Dashboard</h1>
        <img src={user.imageUrl}/>
       <h3>Hello! {user.givenName}</h3>        
    </div>    
  )
}

export default Dashboard