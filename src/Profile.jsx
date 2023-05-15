import React from 'react'

function Profile({username, color}) {
  return (
    <div>
        <p>Profile for {username}</p>
        <p>Favourite color is {color}</p>
    
    </div>
  )
}

export default Profile