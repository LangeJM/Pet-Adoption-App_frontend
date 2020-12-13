import React from "react";
import "./ProfilePage.css";

import { Button } from "react-bootstrap";

const ProfilePage = (props) => {
  return (
    <div className="mb-4">
      <h2>Profile</h2>
      <div className="d-flex my-3 text-left">
        <div className="labelWidth mx-3">First Name</div>
        <input type="text"></input>
        <div className="labelWidth mx-3">Last Name</div>
        <input type="text"></input>
      </div>
      <div className="d-flex my-3 text-left">
        <div className="labelWidth mx-3">Email address</div>
        <input type="email"></input>
        <div className="labelWidth mx-3">Phone number</div>
        <input type="email"></input>
      </div>
      <div className="d-flex my-3 text-left">
        <div className="labelWidth mx-3">Password</div>
        <input type="email"></input>
      </div>
      <div className="d-flex my-3 text-left">
        <div className="labelWidth mx-3">Bio</div>
        <textarea className="w-25" type="textarea"></textarea>
      </div>
      <Button>Save</Button>
    </div>
  );
};

export default ProfilePage;
