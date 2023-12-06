import { render } from '@redwoodjs/testing/web'

import EventPage from './EventPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventPage />)
    }).not.toThrow()
  })
})
