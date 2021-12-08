import { useState, useEffect } from "react"
import { postJpegmafiaSong } from "../services"


export default function Song(props) {

  const [song, setSong] = useState({})
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSong = {
      song
    }
    const response = await postJpegmafiaSong(newSong)
    props.setUser(response)
      props.setToggle(prevToggle => !prevToggle)
      if (response) {
        navigate(`/users/${response.id}`)
      }
    
  return (
      <div onSubmit={handleSubmit}>
        <input
          id="floatField"
          type="text"
          value={mp3}
          name='user'
          onChange={(e) => setUser(e.target.value)}
      />
      <button>Press Play</button>
      </div>
  )
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