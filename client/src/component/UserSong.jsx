import React from 'react'

export default function UserSong(props) {
  const { user, jpegmafia } = props

  // algo to match song 
  
  if (!user) return <h1>Loading...</h1>

  return (
    <div>
      <div>
        <h3>{user.fields.user}</h3>
        <h3>{user.fields.title}</h3>
      </div>
      <div>

      </div>
    </div>
  )
}
