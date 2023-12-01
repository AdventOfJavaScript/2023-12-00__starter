import { render } from '@redwoodjs/testing/web'

import Avatar from './Avatar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Avatar avatar="https://picsum.photos/seed/1701216491240/300/300" />
      )
    }).not.toThrow()
  })
})
