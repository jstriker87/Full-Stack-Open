import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const deletePB = deleteObject => {
  let url = `${baseUrl}/${deleteObject[0].id}`
  return axios.delete(url, deleteObject)
}

export default { 
  getAll: getAll, 
  create: create, 
  deletePB: deletePB,
}
