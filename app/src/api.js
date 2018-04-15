import Axios from 'axios'

const callApi = ({ method, path, data }) => {
  const baseUrl = 'http://localhost:8080'
  const accessToken = localStorage.getItem('access_token')
  return Axios({
    method,
    headers: {
      'x-access-token': accessToken
    },
    url: `${baseUrl}${path}`,
    data,
  })
}