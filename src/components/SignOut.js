import CallIcon from '@mui/icons-material/Call';
import { Button } from '@mui/material';
import React from 'react';
import { auth } from "../firebase.js";

function SignOut() {
  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={() => auth.signOut()}>
        Sign Out
      </Button>
      <h3>{auth.currentUser.displayName}</h3>
      <CallIcon />
    </div>
  )
}

export default SignOut
