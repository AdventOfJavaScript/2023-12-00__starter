import { render } from '@redwoodjs/testing/web'

import RsvpStatus from './RsvpStatus'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RsvpStatus', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RsvpStatus />)
    }).not.toThrow()
  })
})
