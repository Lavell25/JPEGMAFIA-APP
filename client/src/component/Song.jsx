import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"

export default function Song(props) {
  const [song, setSong] = useState({})
  const params = useParams()
  // const navigate = useNavigate()

  useEffect(() => {
    const foundSong = props.songs.find(song => {
      return song.id === useParams.id
    })
    setSong(foundSong)
  }, [params.id, props.songs])

  return (
    <div>
      {song && song.fields &&
        <>
        <h1>{song.fields.title}</h1>
        <h4>{song.fields.mp3}</h4>
        {/* <Link to={`/edit/${song.id}`}></Link> */}
        </>
      }
    </div>
  )
}
