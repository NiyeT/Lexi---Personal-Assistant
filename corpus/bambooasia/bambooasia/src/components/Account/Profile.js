import React from "react"

import Auth from '../../utils/auth';
const auth = new Auth();

const Profile = () => (
  <>
    <h1>Your profile</h1>
    TODO: wire up editing profile
    { auth.getPicture() ? <img src={auth.getPicture()} /> : null }
    <ul>
      <li>Name: { auth.getUserName() }</li>
      <li>E-mail: { auth.getEmail() }</li>
    </ul>
  </>
)

export default Profile
