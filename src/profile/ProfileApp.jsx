import Profile from "./Profile.jsx";
import ProfileAddress from "./ProfileAddress.jsx";
import { ProfileContext } from "./ProfileContext.jsx";
import { useState } from "react";
import ProfileForm from "./ProfileForm.jsx";

export default function ProfileApp() {
    const [name, setName] = useState("");
    const [umur, setUmur] = useState("");

  return (
    <>
      <ProfileContext.Provider value={{ nama: name, umur: umur, alamat: "Jakarta" }}>
        <h1>Profile App</h1>
        <ProfileForm name={name} umur={umur} setName={setName} setUmur={setUmur}/>
        <Profile />
        <ProfileAddress />
      </ProfileContext.Provider>
    </>
  );
}
