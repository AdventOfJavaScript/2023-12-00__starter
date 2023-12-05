import { render } from '@redwoodjs/testing/web'

import LogoutPage from './LogoutPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('LogoutPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LogoutPage />)
    }).not.toThrow()
  })
})
