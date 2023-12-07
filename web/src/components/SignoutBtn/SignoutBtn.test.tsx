import { render } from '@redwoodjs/testing/web'

import SignoutBtn from './SignoutBtn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SignoutBtn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignoutBtn />)
    }).not.toThrow()
  })
})
