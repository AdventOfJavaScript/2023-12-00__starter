import { render } from '@redwoodjs/testing/web'

import InviteGroup from './InviteGroup'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('InviteGroup', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InviteGroup />)
    }).not.toThrow()
  })
})
