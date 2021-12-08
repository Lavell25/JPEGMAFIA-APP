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
      <div id="floatContainer" class="float-container">
        <input
          placeholder="Enter your Alias"
          type="text"
          value={user}
          name="user"
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <input
        type="text"
        placeholder="Enter a song title ex: 'Skinny white girls love diet coke'"  
        value={title}
        name="title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <button>ALLCAPSNOSPACES</button>
    </form>
  );
}

// useEffect(() => {

//   if (props.songs) {
//     const foundSong = props.songs.find(song => {
//       return song.id === params.id
//     })
//     if (foundSong) {
//       setTitle(foundSong.fields.title)
//       setUser(foundSong.fields.mp3)
//     }
//   }
// }, [params.id, props.songs])

// const handleSubmit = async (e) => {
//   e.preventDefault()
//   const newSong = {
//     title,
//     user,
//   }
//   if (props.songs) {
//     const response = await editSongTitle(newSong, params.id)
//     props.setToggle(prevToggle => !prevToggle)
//     if (response) {
//       navigate(`/songs/${params.id}`)
//     }
//   } else {
//     const response = await postSong(newSong)
//     props.setToggle(prevToggle => !prevToggle)
//     if (response) {
//       navigate('/')
//     }
//   }
// }
