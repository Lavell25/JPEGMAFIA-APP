import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUserSong } from "../services";

export default function Form(props) {
  const [title, setTitle] = useState("");
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSong = {
      title,
      user,
    };
    const response = await addUserSong(newSong);
    props.setUser(response);
    props.setToggle((prevToggle) => !prevToggle);
    if (response) {
      navigate(`/users/${response.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          display: "flexbox",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <input
          style={{
            width: "325px",
            height: "25px",
          }}
          placeholder="Enter your Alias"
          type="text"
          value={user}
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          style={{
            width: "325px",
            height: "25px",
          }}
          type="text"
          placeholder="Enter a song title ex: 'Skinny white girls love diet coke'"
          value={title}
          name="title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <button>ALLCAPSNOSPACES</button>
    </form>
  );
}
