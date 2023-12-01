import { render } from '@redwoodjs/testing/web'

import HeaderWithRulers from './HeaderWithRulers'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderWithRulers', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeaderWithRulers />)
    }).not.toThrow()
  })
})
