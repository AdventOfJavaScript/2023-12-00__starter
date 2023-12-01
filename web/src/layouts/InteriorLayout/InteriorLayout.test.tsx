import { render } from '@redwoodjs/testing/web'

import InteriorLayout from './InteriorLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InteriorLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InteriorLayout />)
    }).not.toThrow()
  })
})
