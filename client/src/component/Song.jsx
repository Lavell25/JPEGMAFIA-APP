import { useState } from "react"
import { postJpegmafiaSong } from "../services"
import { useNavigate } from "react-router"



export default function Song(props) {

  const [song, setSong] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const playSong = {
      song,
    }
    const response = await postJpegmafiaSong(playSong)
    props.setSong(response)
    props.setToggle(prevToggle => !prevToggle)
    if (response) {
      navigate(`/users/${response.id}`)
    }
    
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={song}
          name='mp3'
          onChange={(e) => setSong(e.target.value)}
        />
        <button>Press Play</button>
      </form>
    )
  }
}


// const [song, setSong] = useState({})
//   const params = useParams()
//   // const navigate = useNavigate()

//   useEffect(() => {
//     const findSong = props.songs.find(song => {
//       return song.id === useParams.id
//     })
//     setSong(findSong)
//   }, [params.id, props.songs])

//   return (
//     <div>
//       {song && song.fields &&
//         <>
//         <h1>{song.fields.title}</h1>
//         <h4>{song.fields.mp3}</h4>
//         </>
//       }
//     </div>
//   )