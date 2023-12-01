import { render } from '@redwoodjs/testing/web'

import MyAccount from './MyAccount'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MyAccount', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyAccount />)
    }).not.toThrow()
  })
})
