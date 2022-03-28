import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/home";
import InviteFriend from "../components/inviteFriend";
import InviteViaEmail from "../components/inviteViaEmail";
import InviteViaUsername from "../components/inviteViaUsername";
import InviteSuccess from "../components/invitationSuccess";


export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("./userData.json")
      .then((res) => res.json())
      .then( result => dispatch({
        type: "FETCH_DATA",
        result,
      }));
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invite" element={<InviteFriend />} />
        <Route path="/inviteViaEmail" element={<InviteViaEmail />} />
        <Route path="/inviteViaUsername" element={<InviteViaUsername />} />
        <Route path="/inviteSuccess" element={<InviteSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}
