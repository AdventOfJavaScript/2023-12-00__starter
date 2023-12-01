import { render } from '@redwoodjs/testing/web'

import RsvpButton from './RsvpButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('RsvpButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RsvpButton />)
    }).not.toThrow()
  })
})
