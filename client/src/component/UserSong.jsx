import { useEffect, useState } from "react";

export default function UserSong(props) {
  const { user, jpegmafia } = props;

  const [song, setSong] = useState(null);

  useEffect(() => {
    const results = jpegmafia.filter((song) => {
      return song.fields.title
        .toLowerCase()
        .includes(user.fields.title.toLowerCase());
    });

    if (results.length !== 0) {
      setSong(results[0].fields.mp3[0].url);
    } else {
      setSong(
        "https://dl.airtable.com/.attachments/0ea59a2afc40bc67de27ec9eb69de094/a5476618/JPEGMAFIA-BlackBenCarson-25DIMESACK.mp3"
      );
    } console.log(`Your song sucks so here's one of my favorites`);
  }, [jpegmafia, user.fields.title]);

  if (!user) return <h1>Loading...</h1>;

  return (
    <div>
      <div
        style={{
          display: "grid",
          textAlign: "center",
          color: "whitesmoke",
          fontSize: "20px",
        }}
        className="user-infomation"
      >
        <h3>{user.fields.user}</h3>
        <h3>{user.fields.title}</h3>
      </div>
      <div>
        <audio controls>
          <source src={song}></source>
        </audio>
      </div>
    </div>
  );
}
