import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { postSong, editSongTitle } from '../services'

export default function Form(props) {

  const [title, setTitle] = useState('')
  const [mp3, setMp3] = useState({})
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    
    if (props.songs) {
      const foundSong = props.songs.find(song => {
        return song.id === params.id
      })
      if (foundSong) {
        setTitle(foundSong.fields.title)
        setMp3(foundSong.fields.mp3)
      }
    }
  }, [params.id, props.songs])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newSong = {
      title,
      mp3,
    }
    if (props.songs) {
      const response = await editSongTitle(newSong, params.id)
      props.setToggle(prevToggle => !prevToggle)
      if (response) {
        navigate(`/songs/${params.id}`)
      }
    } else {
      const response = await postSong(newSong)
      props.setToggle(prevToggle => !prevToggle)
      if (response) {
        navigate('/')
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        name='title'
        onChange={(e) => setTitle(e.target.value)}
      />
       <input
        type="text"
        value={mp3}
        name='Song'
        onChange={(e) => setMp3(e.target.value)}
      />
      <button>ALLCAPSNOSPACES</button>
    </form>
  )
}
