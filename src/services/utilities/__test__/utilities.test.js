import { validateEmail } from '../index'
import { config } from '../../config/'

describe('Utilities', () => {
  it('should check email is empty', async () => {
    const returnValue = validateEmail('')
    expect(config.errorMsg[returnValue]).toBe(config.errorMsg[2])
  })

  it('should check invalid email address', async () => {
    const returnValue = validateEmail('test-test')
    expect(config.errorMsg[returnValue]).toBe(config.errorMsg[1])
  })

  it('should check valid email address', async () => {
    const returnValue = validateEmail('test@gmail.com')
    expect(returnValue).toBeTruthy();
  })
})