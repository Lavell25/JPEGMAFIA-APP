import { Link } from "react-router-dom"

export default function Songs(props) {
  return (
    <div>
      {
        props.songs.map(song => (
          <Link key={song.id} to={`/songs/${song.id}`}>{song.fields.title}</Link>
        ))
      }
    </div>
  )
}
