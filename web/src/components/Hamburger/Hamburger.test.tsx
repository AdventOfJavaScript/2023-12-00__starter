import { render } from '@redwoodjs/testing/web'

import Hamburger from './Hamburger'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Hamburger', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Hamburger />)
    }).not.toThrow()
  })
})
