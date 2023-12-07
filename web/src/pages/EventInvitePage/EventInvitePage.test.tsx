import { render } from '@redwoodjs/testing/web'

import EventInvitePage from './EventInvitePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('EventInvitePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EventInvitePage />)
    }).not.toThrow()
  })
})
