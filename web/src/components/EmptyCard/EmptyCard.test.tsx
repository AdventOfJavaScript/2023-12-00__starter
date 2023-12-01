import { render } from '@redwoodjs/testing/web'

import EmptyCard from './EmptyCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EmptyCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<EmptyCard />)
    }).not.toThrow()
  })
})
