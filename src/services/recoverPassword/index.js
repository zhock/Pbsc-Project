
import axios from 'axios'
import { config } from '../config'

const getData = (data) => data

const recoverService = async (loginId) => {
  let status = null
  let message = ''
  try {
    const url = `${config.buApi}/api/v2/forgot-password`
    const header = `headers: {'Content-Type': 'application/json'}`
    const data = await axios.post(url, { loginId }, header)
    status = data.status
    message = data.data.message
  }catch (error) {
    console.log(error)
    status = error.response.status
  }
  return getData({message, status}) 
}

export default recoverService
