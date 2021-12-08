import "./App.css";
import { grabApi, grabUsers } from "./services";
import { useEffect, useState } from "react";
import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Form from "./component/Form";
import Songs from "./component/Songs";
import Song from "./component/Song";
import UserSong from "./component/UserSong";

function App() {
  const [jpegmafia, setJpegmafia] = useState([]);
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const getJpegmafia = async () => {
      const response = await grabApi();
      const allUsers = await grabUsers();
      setJpegmafia(response);
      setUsers(allUsers);
    };
    getJpegmafia();
  }, [toggle]);

  return (
    <div className="App">
      <h1>JPEGMAFIA Song Title Generator</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Songs jpegmafia={jpegmafia} />} />
        <Route path="/new" element={<Form setToggle={setToggle} setUser={setUser} />} />
        <Route path="/songs/:id" element={<Song jpegmafia={jpegmafia} />} />
        <Route
          path="/users/:id"
          element={<UserSong jpegmafia={jpegmafia} user={user} />}
        />
      </Routes>
    </div>
  );
}

export default App;
