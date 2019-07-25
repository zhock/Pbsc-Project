import axios from 'axios'
import recoverService from '../'

jest.mock('axios', () => {
  return {
    post: jest.fn()
  }
})
describe('RecoverService', () => {
  let clientMock
  it('should get recover password message', async () => {
    const postSpy = jest.spyOn(axios, 'post').mockReturnValue(Promise.resolve({data:[]}))
    const response = await recoverService('test@gmail.com')
    expect(postSpy).toHaveBeenCalled()
    expect(postSpy).toHaveBeenCalledWith(
      `http://myneighby.herokuapp.com/api/v2/forgot-password`,
      {"loginId": "test@gmail.com"},
      `headers: {'Content-Type': 'application/json'}`
    )
  })
}) 