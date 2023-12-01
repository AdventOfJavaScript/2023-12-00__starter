import { render } from '@redwoodjs/testing/web'

import WishListItem from './WishListItem'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WishListItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WishListItem />)
    }).not.toThrow()
  })
})
