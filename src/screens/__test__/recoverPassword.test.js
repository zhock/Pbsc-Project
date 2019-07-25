import 'react-native'
import React from 'react'
import { shallow } from 'enzyme'
import RecoverPassword from '../RecoverPassword';

describe('RecoverPassword', () => {
  let wrapper
  const testProps = {
    handleSubmit: jest.fn()
  }
  beforeEach(() => {
    wrapper = shallow(<RecoverPassword />)
    component = wrapper.instance()
  })

  describe('When submit button is pressed', () => {
    it('should call handleSubmit', () => {
      const actionSpy = jest.spyOn(component, 'handleSubmit')
      wrapper.find({ testID: 'submitButtom' }).first().props().onPress()
      expect(actionSpy).toHaveBeenCalled()
    })
  })
})



