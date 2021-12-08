import axios from "axios";

export const BASE_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/jpegmafia?maxRecords=161`
  
export const BASE_USER_URL =
  `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/usersong`

export const config = {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`
    }
}



export const grabApi = async () => {
  const response = await axios.get(BASE_URL, config)
  return response.data.records
}

export const postSong = async (body) => {
  const response = await axios.post(BASE_URL, { fields: body }, config)
  return response.data
}

export const editSongTitle = async (body, id) => {
  const response = await axios.put(`${BASE_URL}/${id}`, { fields: body }, config)
  return response.data
}

export const grabUsers = async () => {
  const response = await axios.get(BASE_USER_URL, config)
  return response.data.records
}

export const addUserSong = async (body) => {
  const response = await axios.post(`${BASE_USER_URL}`, { fields: body }, config)
  return response.data
}

export const postJpegmafiaSong = async (body) => {
  const response = await axios.post(`${BASE_URL}`, { fields: body }, config)
  return response.data
}