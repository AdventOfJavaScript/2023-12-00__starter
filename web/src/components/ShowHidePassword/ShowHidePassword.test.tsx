import { render } from '@redwoodjs/testing/web'

import ShowHidePassword from './ShowHidePassword'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ShowHidePassword', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ShowHidePassword />)
    }).not.toThrow()
  })
})
